'use client'

import React, { Suspense, useCallback } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globalAutoplay } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StartScreen from '../ui/StartScreen';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';
import ButtonsVar from '../ui/ButtonsVar';

export default function VideoPageReactComp() {

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(true);

    const [currentVideo, setCurrentVideo] = React.useState<number | undefined | null>(0);

    const [ended, setEnded] = React.useState<boolean>(false);

    const [playStart, setPlayStart] = React.useState(false);

    const [play, setPlay] = React.useState(false);

    const addCookie = (current: number) => {
        setCookie('current-progress', current.toString(), { maxAge: 60 * 60 * 72, secure: true, path: '/', sameSite: true });
    }

    React.useEffect(() => {
        hasCookie('current-progress') && setCurrentVideo(Number(getCookie('current-progress')))
        globalAutoplay.click && setPlay(true)
    }, [])

    const reportChange = useCallback((state: any) => {
        setFullscreen(state)
    }, [])

    return (
        <>
            {loading ? <Loading /> : null}
            <FullScreen handle={handleFullScreen} onChange={reportChange}>
                {CONTENT.map(element => (
                    element.id === currentVideo ? (
                        <div key={element.id} className="relative w-screen h-screen flex-col items-center justify-between" style={{ display: loading ? 'none' : 'flex' }}>
                            {
                                currentVideo === 0 && (
                                    <StartScreen
                                        setPlay={setPlay}
                                        play={play}
                                        setPlayStart={setPlayStart}
                                        playStart={playStart}
                                        handleFullScreen={handleFullScreen}
                                    />
                                )
                            }

                            <div
                                className='w-fit h-fit'
                                onClick={() => {
                                    setPlay(!play)
                                    globalAutoplay.click = !play
                                }}
                            >
                                <Suspense fallback={<Loading />}>
                                    <ReactPlayer
                                        style={{ zIndex: 100 }}
                                        width={'100vw'}
                                        height={'100vh'}
                                        playing={play}
                                        url={"../video/" + element.filename + ".mp4"}
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
                                        onProgress={(state) => {
                                            console.log("playedSeconds: " + state.playedSeconds)
                                            console.log("loadedSeconds: " + state.loadedSeconds)
                                        }}
                                    />
                                </Suspense>
                            </div>
                            
                            <ButtonsVar 
                                currentVideo={currentVideo}
                                setCurrentVideo={setCurrentVideo}
                                ended={ended}
                                setEnded={setEnded}
                                setLoading={setLoading}
                            />

                            <div className="absolute bottom-[40%] left-0 w-full justify-center" style={{ display: play ? 'none' : 'flex' }}>
                                <motion.button
                                    className='start-button w-fit h-fit font-MNWide font-extrabold uppercase bg-white text-birusa-blue px-6 2xl:px-16 py-5 2xl:py-10 rounded-full border-4 border-birusa-blue z-50'
                                    whileHover={{
                                        color: 'rgb(255 255 255)',
                                        backgroundColor: 'rgb(0 131 173)',
                                        boxShadow: '0 0 8px rgba(0 79 117)',
                                        paddingLeft: '70px',
                                        paddingRight: '70px',
                                        transition: { duration: 0.15 },
                                    }}
                                    onClick={() => {
                                        setPlay(!play)
                                        globalAutoplay.click = !play
                                    }}
                                >
                                    Продолжить
                                </motion.button>
                            </div>

                            <Image
                              className='object-cover z-[0]'
                              style={{ display: play ? 'none' : 'flex' }}
                              fill={true}
                              src={'../imgs/background.svg'}
                              priority={true}
                              alt="Бирюса TIM"
                            />

                            <div className="absolute top-5 left-5 w-fit flex justify-center">
                                <button
                                    className='w-fit h-fit text-xl text-teal-300 bg-zinc-800 p-2 z-50'
                                    onClick={() => {
                                        setPlay(false)
                                        setPlayStart(false)
                                        globalAutoplay.click = false
                                        setEnded(false)
                                        setCurrentVideo(0)
                                        addCookie(0)
                                    }}
                                >
                                   {"Back to Start (Debug)"}
                                </button>
                            </div>

                            <div 
                                className="
                                    absolute       
                                    top-0 
                                    right-0 
                                    justify-center
                                    w-[60px] 
                                    h-[60px]
                                    mt-[110px] 
                                    mr-[3%]
                                " 
                                style={{ display: play ? 'none' : 'flex' }}
                            >
                                <motion.button
                                    className='
                                        w-fit 
                                        h-fit 
                                        text-xl 
                                        text-birusa-blue 
                                        cursor-pointer
                                        bg-white 
                                        rounded-xl 
                                        px-3
                                        py-2
                                        outline-none 
                                        border-none 
                                        z-[200]
                                    '
                                    whileHover={{
                                        boxShadow: '0 0 8px rgba(0 79 117)',
                                        transition: { duration: 0.15 },
                                      }}
                                    onClick={fullscreen ? handleFullScreen.exit : handleFullScreen.enter}
                                >
                                    {fullscreen ? <BiExitFullscreen className='w-[35px] h-[35px]' /> : <BiFullscreen className='w-[35px] h-[35px]' />}
                                </motion.button>
                            </div>
                        </div>
                    ) : null
                ))}
            </FullScreen>
        </>
    )
}
