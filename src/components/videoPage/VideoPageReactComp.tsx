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
import useSound from 'use-sound';
import { OnProgressProps } from 'react-player/base';

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
        //
        final,
        setFinal,
    } = useStore()

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    React.useEffect(() => {
        hasCookie('current-progress') && (setCurrentVideo(Number(getCookie('current-progress'))))
        hasCookie('current-person') && (setCurrentPerson(Number(getCookie('current-person'))))
        globals.click && setPlay(true)
        setFinal(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const reportChange = useCallback((state: any) => {
        setFullscreen(state)
    }, [])

    const [playOff] = useSound(
        '../audio/click-off.mp3',
        { volume: 0.2, interrupt: true, playbackRate: 2 }
    )

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
                                onMouseDown={() => {
                                    playOff()
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
                                        controls={true}
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
                                        onProgress={(state: OnProgressProps) => {
                                            if (((currentVideo === 15)) && (state.played > 0.85) && (final === false)) {
                                                setFinal(true)
                                                console.log("FINAL POLYA!)")
                                            }
                                            if (((currentVideo === 26)) && (state.played > 0.6215) && (final === false)) {
                                                setFinal(true)
                                                console.log("FINAL YAN!)")
                                            }
                                            if (((currentVideo === 36)) && (state.played > 0.6215) && (final === false)) {
                                                setFinal(true)
                                                console.log("FINAL NIKA!)")
                                            }
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
