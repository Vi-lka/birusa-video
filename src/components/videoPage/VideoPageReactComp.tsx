'use client'

import React, { Suspense, useCallback, useRef } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globalAutoplay } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import StartScreen from '../ui/StartScreen';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';
import ButtonsVar from '../ui/ButtonsVar';
import { Navigation } from '../ui/menu/Navigation';
import { MenuToggle } from '../ui/menu/MenuToggle';
import { useDimensions } from '@/utils/use-dimensions';
import useDebounce from '@/utils/use-demounce'
import Icons from '../ui/menu/Icons';

const sidebar = {
    open: (height = window.innerWidth) => ({
        clipPath: `circle(${height * 2 + 400}px at 100% 0px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 0px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function VideoPageReactComp() {

    const handleFullScreen = useFullScreenHandle();

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(true);

    const [currentVideo, setCurrentVideo] = React.useState<number | undefined | null>(0);

    const [ended, setEnded] = React.useState<boolean>(false);

    const [playStart, setPlayStart] = React.useState(false);

    const [play, setPlay] = React.useState(false);

    const [isOpen, toggleOpen] = useCycle(false, true);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const debouncedIsOpen = useDebounce(isOpen, 300);

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
            <FullScreen handle={handleFullScreen} onChange={reportChange}>
                {loading ? <Loading /> : null}

                <div 
                    className="
                        absolute 
                        top-0 
                        left-0 
                        w-fit 
                        h-fit 
                        lg:mt-10 
                        mt-4  
                        ml-[3%] 
                        z-[210]
                    " 
                    style={{ display: (playStart || currentVideo! > 0) ? (play ? (loading ? 'flex' : 'none') : 'flex') : 'none' }}
                >
                    <div className='main-title w-fit h-fit font-MNExpanded font-[800] antialiased md:subpixel-antialiased text-center uppercase text-white px-4 py-[14px] lg:px-7 lg:py-4 rounded-full'>
                        Место силы – Сибирь. Бирюса
                    </div>
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
                                        globalAutoplay.click = !play
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
                        </div>
                    ) : null
                ))}

                <div className="absolute bottom-[45%] left-0 w-full justify-center" style={{ display: play ? 'none' : 'flex' }}>
                    <motion.button
                        className='start-button w-fit h-fit font-MNWide font-extrabold uppercase bg-white text-birusa-blue shadow-[0_0_8px_rgba(0,79,117,1)] px-10 py-6 rounded-full border-none z-[50]'
                        whileHover={{
                            color: 'rgb(255 255 255)',
                            backgroundColor: 'rgb(0 131 173)',
                            boxShadow: '0 0 8px rgba(0 79 117)',
                            paddingLeft: '68px',
                            paddingRight: '68px',
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
                    className='object-cover z-[11]'
                    style={{ display: play ? 'none' : 'flex' }}
                    fill={true}
                    src={'../imgs/background.svg'}
                    priority={true}
                    alt="Бирюса TIM"
                />

                <div 
                    className="bg-color w-screen h-screen absolute top-0 left-0 z-[10]" 
                    style={{ display: play ? 'none' : 'block' }}
                />

                <div 
                    className="bg-color-black w-screen h-screen absolute top-0 left-0 z-[9]" 
                    style={{ display: play ? 'none' : 'block' }}
                />

                <div className="absolute top-16 left-5 w-fit flex justify-center">
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

                <motion.nav
                    className='z-[200]'
                    style={{ display: play ? (loading ? 'flex' : 'none') : 'flex' }}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >

                    <motion.div className="background-clip absolute top-0 bottom-0 right-0 w-screen bg-birusa-blue z-[200]" variants={sidebar} />
                    <Navigation isOpen={debouncedIsOpen} />
                    <Icons />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>

                <div
                    className="
                        absolute       
                        top-0 
                        right-0 
                        justify-center
                        lg:w-[60px] 
                        lg:h-[60px]
                        w-[38px] 
                        h-[38px]
                        lg:mt-[110px] 
                        mt-[65px] 
                        mr-[3%]
                    "
                    style={{ display: play ? (loading ? 'flex' : 'none') : 'flex' }}
                >
                    <motion.button
                        className='
                            toggle-screen-button
                            w-fit 
                            h-fit 
                            text-xl 
                            text-birusa-blue 
                            cursor-pointer
                            bg-white 
                            shadow-[0_0_6px_rgba(0,79,117,1)]
                            rounded-xl 
                            px-[6px]
                            pl-[7px]
                            py-[6px]
                            lg:px-3
                            lg:py-2
                            outline-none 
                            border-none 
                            z-[200]
                        '
                        whileHover={window.innerWidth > 1024 ? {
                            backgroundColor: 'rgb(0 131 173)',
                            boxShadow: '0 0 8px rgba(0 79 117)',
                            transition: { duration: 0.15 },
                          } : {
                            boxShadow: '0 0 8px rgba(0 79 117)',
                            transition: { duration: 0.15 },
                          }}
                        onClick={fullscreen ? handleFullScreen.exit : handleFullScreen.enter}
                    >
                        {fullscreen ? <BiExitFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' /> : <BiFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' />}
                    </motion.button>
                </div>
            </FullScreen>
        </>
    )
}
