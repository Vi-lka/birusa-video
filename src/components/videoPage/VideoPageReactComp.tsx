'use client'

import React, { Suspense, useCallback } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globals } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StartScreen from '../ui/StartScreen';
import ButtonsVar from '../ui/ButtonsVar';
import IconMain from '../ui/IconMain';
import Menu from '../ui/menu/Menu';
import FullscreenToggle from '../ui/FullscreenToggle';
import ContinueButton from '../ui/ContinueButton';
import BackgroundPause from '../ui/BackgroundPause';
import QuestionsVar from '../ui/QuestionsVar';

export default function VideoPageReactComp() {

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(true);

    const [ended, setEnded] = React.useState<boolean>(false);

    const [playStart, setPlayStart] = React.useState(false);

    const [play, setPlay] = React.useState(false);

    const addCookie = (current: number) => {
        setCookie('current-progress', current.toString(), { maxAge: 60 * 60 * 72, secure: true, path: '/', sameSite: true });
    }

    React.useEffect(() => {
        hasCookie('current-progress') && (globals.currentVideo = Number(getCookie('current-progress')))
        hasCookie('current-person') && (globals.currentPerson = Number(getCookie('current-person')))
        globals.click && setPlay(true)
    }, [])

    console.log("Video: " + globals.currentVideo)
    console.log("Person: " + globals.currentPerson)

    const reportChange = useCallback((state: any) => {
        setFullscreen(state)
    }, [])

    return (
        <>
            <FullScreen className='custom-fullscreens' handle={handleFullScreen} onChange={reportChange}>
                {loading ? <Loading /> : null}

                <IconMain
                    ended={ended}
                    playStart={playStart}
                    currentVideo={globals.currentVideo}
                    play={play}
                    loading={loading}
                />

                {
                    globals.currentVideo === 0 && (
                        <StartScreen
                            setPlay={setPlay}
                            setPlayStart={setPlayStart}
                            playStart={playStart}
                            handleFullScreen={handleFullScreen}
                        />
                    )
                }

                {CONTENT.map(element => (
                    element.id === globals.currentVideo ? (
                        <div key={element.id} className="relative w-screen h-screen flex flex-col items-center justify-between">
                            <div
                                className='w-fit h-fit'
                                onClick={() => {
                                    if (ended) {
                                        return
                                    } else {
                                        setPlay(!play)
                                        globals.click = !play
                                    }
                                }}
                            >
                                <Suspense fallback={<Loading />}>
                                    <ReactPlayer
                                        style={{ zIndex: 100 }}
                                        width={'100vw'}
                                        height={'100vh'}
                                        playing={play}
                                        url={"../video/" + element.filename}
                                        controls={false}
                                        playsinline
                                        stopOnUnmount={true}
                                        loop={false}
                                        preload={'auto'}
                                        onReady={() => {
                                            setLoading(false)
                                        }}
                                        onEnded={() => {
                                            setEnded(true)
                                        }}
                                    />
                                </Suspense>
                            </div>
                        </div>
                    ) : null
                ))}

                <QuestionsVar 
                    currentVideo={globals.currentVideo}
                    currentPerson={globals.currentPerson}
                    ended={ended}
                />

                <ButtonsVar
                    currentVideo={globals.currentVideo}
                    currentPerson={globals.currentPerson}
                    ended={ended}
                    setEnded={setEnded}
                    setLoading={setLoading}
                />

                <ContinueButton 
                    play={play} 
                    setPlay={setPlay}
                />

                <BackgroundPause play={play} ended={ended} />

                <Menu 
                    play={play} 
                    loading={loading}
                    ended={ended}             
                />

                <FullscreenToggle 
                    play={play}
                    loading={loading}
                    ended={ended} 
                    fullscreen={fullscreen} 
                    handleFullScreen={handleFullScreen}                
                />

                <div className="absolute top-16 left-5 w-fit flex justify-center">
                    <button
                        className='w-fit h-fit text-xl text-teal-300 bg-zinc-800 p-2 z-50'
                        onClick={() => {
                            setPlay(false)
                            setPlayStart(false)
                            globals.click = false
                            setEnded(false)
                            globals.currentVideo = 0
                            addCookie(0)
                        }}
                    >
                        {"Back to Start (Debug)"}
                    </button>
                </div>

                
            </FullScreen>
        </>
    )
}
