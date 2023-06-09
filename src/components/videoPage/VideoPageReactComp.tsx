'use client'

import React, { Suspense, useCallback } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globals } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie } from 'cookies-next';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StartScreen from '../ui/StartScreen';
import ButtonsVar from '../ui/ButtonsVar';
import Menu from '../ui/menu/Menu';
import FullscreenToggle from '../ui/FullscreenToggle';
import ContinueButton from '../ui/ContinueButton';
import BackgroundPause from '../ui/BackgroundPause';
import QuestionsVar from '../ui/QuestionsVar';
import { useStore } from '@/utils/Store';

export default function VideoPageReactComp() {

    const {
        play,
        setPlay,
        // 
        setCurrentPerson, 
        currentVideo,
        setCurrentVideo,
        //
        ended, 
        setEnded, 
        loading, 
        setLoading,
    } = useStore()

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    React.useEffect(() => {
        hasCookie('current-progress') && (setCurrentVideo(Number(getCookie('current-progress'))))
        hasCookie('current-person') && (setCurrentPerson(Number(getCookie('current-person'))))
        globals.click && setPlay(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const reportChange = useCallback((state: any) => {
        setFullscreen(state)
    }, [])

    return (
        <>
            <FullScreen className='custom-fullscreens' handle={handleFullScreen} onChange={reportChange}>
                {loading ? <Loading /> : null}

                {
                    currentVideo === 0 && (
                        <StartScreen handleFullScreen={handleFullScreen} />
                    )
                }

                {CONTENT.map(element => (
                    element.id === currentVideo ? (
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
                                {/* <h1 className='font-MNWide text-red-600 text-9xl absolute z-[10000]'>{element.id}</h1> */}
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

                <QuestionsVar />

                <ButtonsVar />

                <ContinueButton />

                <BackgroundPause />

                <Menu />

                <FullscreenToggle fullscreen={fullscreen} handleFullScreen={handleFullScreen} />

            </FullScreen>
        </>
    )
}
