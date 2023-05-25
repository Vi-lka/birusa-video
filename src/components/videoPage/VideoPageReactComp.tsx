'use client'

import React, { Suspense, useCallback } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globalAutoplay } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StartScreen from '../ui/StartScreen';
import { motion } from 'framer-motion';

export default function VideoPageReactComp() {

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(true);

    const [currentVideo, setCurrentVideo] = React.useState<number | undefined | null>(0);
    
    const [ended, setEnded] = React.useState<boolean>(false);

    const [playStart, setPlayStart] = React.useState(false);

    const [play, setPlay] = React.useState(false);

    const addCookie = (current: number) => {
        setCookie('current-progress', current.toString(), {maxAge: 60 * 60 * 72, secure: true, path: '/'});
    }

    React.useEffect(() => {
        hasCookie('current-progress') && setCurrentVideo( Number(getCookie('current-progress')) )
        globalAutoplay.click && setPlay(true)
    }, [])

    let buttons = [] as {
        name: string,
        url: string,
        indexUrl: number
        
    }[];

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            buttons = element.buttons
        }
    });

    const reportChange = useCallback((state: any) => {
            setFullscreen(state)
      }, [])

    return (
        <>
            {loading ? <Loading/> : null}
            <FullScreen handle={handleFullScreen} onChange={reportChange}>
            {CONTENT.map(element => (
                element.id === currentVideo ? (
                    <div key={element.id} className="relative w-screen h-screen flex-col items-center justify-between" style={{display: loading ? 'none' : 'flex'}}>
                        <div 
                            className='w-fit h-fit'
                            onClick={() => {
                                setPlay(!play)
                                globalAutoplay.click = !play
                            }}
                        >
                            <Suspense fallback={<Loading />}>
                                <ReactPlayer 
                                    style={{zIndex: 1}}
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
                                />
                            </Suspense>
                        </div>
                        <div className="absolute bottom-8 left-0 flex w-full justify-evenly">
                        {
                            buttons.map((value, index) => 
                                <motion.button 
                                    key={index} 
                                    className='font-MN font-extrabold text-xl bg-birusa-blue text-white px-7 py-4 rounded-full z-50'
                                    style={{display: ended ? 'block' : 'block'}}
                                    whileHover={{
                                        backgroundColor: 'rgb(132 204 22)',
                                        textShadow: '0 0 5px rgba(0 79 117)',
                                        boxShadow: '0 0 10px rgba(132 204 22)',
                                        transition: { duration: 0.15 },
                                    }}
                                    onClick={() => { 
                                        globalAutoplay.click = true
                                        setCurrentVideo(value.indexUrl)
                                        addCookie(value.indexUrl)
                                        setLoading(true)
                                    }} 
                                >
                                    {value.name}
                                </motion.button>
                            )
                        }
                        </div>

                        {
                            currentVideo === 0 && (
                                <StartScreen 
                                    setPlay={setPlay}
                                    setPlayStart={setPlayStart}
                                    playStart={playStart}
                                    handleFullScreen={handleFullScreen}
                                />
                            )
                        }

                        <div className="absolute top-5 right-5 w-fit justify-center" style={{display: play ? 'none' : 'flex'}}>
                            <button 
                                className='w-fit h-fit text-xl text-teal-300 bg-zinc-800 p-2 z-50'                     
                                onClick={fullscreen ? handleFullScreen.exit : handleFullScreen.enter}
                            >
                                {fullscreen ? "FullScreen on" : "FullScreen off"}
                            </button>
                        </div>

                        <div className="absolute bottom-[45%] left-0 w-full justify-center" style={{display: play ? 'none' : 'flex'}}>
                            <motion.button 
                                className='w-fit h-fit font-MNWide font-extrabold uppercase text-4xl bg-birusa-blue text-white px-10 py-7 rounded-full border-2 border-birusa-blue z-50'
                                whileHover={{
                                    backgroundColor: 'rgb(255 255 255)',
                                    color: 'rgb(0 131 173)',
                                    boxShadow: '0 0 10px rgba(0 131 173)',
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
                            
                        <div className="absolute top-5 left-5 w-fit flex justify-center">
                            <button 
                                className='w-fit h-fit text-xl text-teal-300 bg-zinc-800 p-2 z-50'                     
                                onClick={() => {
                                    setPlay(false)
                                    setPlayStart(false)
                                    globalAutoplay.click = false
                                    setCurrentVideo(0)
                                    addCookie(0)
                                }}
                            >
                                Back to start
                            </button>
                        </div>
                    </div>
                ) : null
            ))}
            </FullScreen>
        </>
    )
}
