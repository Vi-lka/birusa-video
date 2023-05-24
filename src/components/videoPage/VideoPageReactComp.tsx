'use client'

import React, { Suspense } from 'react'
import Loading from '@/components/ui/loading'
import { CONTENT, globalAutoplay } from '@/utils/content';
import ReactPlayer from 'react-player';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

export default function VideoPageReactComp() {

    const [loading, setLoading] = React.useState<boolean>(true);

    const [currentVideo, setCurrentVideo] = React.useState<number | undefined | null>(0);
    
    const [ended, setEnded] = React.useState<boolean>(false);

    const [playStart, setPlayStart] = React.useState(false);

    const [play, setPlay] = React.useState(false);

    const addCookie = (current: number) => {
        setCookie('current-progress', current.toString());
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

    return (
        <>
            {loading ? <Loading/> : null}
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
                                <button 
                                    key={index} 
                                    className='text-teal-300 bg-zinc-800 p-3 z-50'
                                    style={{display: ended ? 'block' : 'block'}}
                                    onClick={() => { 
                                        globalAutoplay.click = true
                                        setCurrentVideo(value.indexUrl)
                                        addCookie(value.indexUrl)
                                        setLoading(true)
                                    }} 
                                >
                                    {value.name}
                                </button>
                            )
                        }
                        </div>

                        {
                            currentVideo === 0 && (
                                <div className="absolute top-0 left-0 w-screen h-screen bg-zinc-800 justify-center items-center z-[100]" style={{display: playStart ? 'none' : 'flex'}}>
                                    <button 
                                        className='w-fit h-fit text-3xl bg-teal-300 text-zinc-800 px-10 py-3 rounded-full'                     
                                        onClick={() => {
                                            setPlay(true)
                                            setPlayStart(true)
                                            globalAutoplay.click = true
                                        }}
                                    >
                                       Start
                                    </button>
                                </div>
                            )
                        }

                                <div className="absolute inset-y-1/2 left-0 w-full justify-center" style={{display: play ? 'none' : 'flex'}}>
                                    <button 
                                        className='w-fit h-fit text-3xl text-teal-300 bg-zinc-800 p-3 z-50'                     
                                        onClick={() => {
                                            setPlay(!play)
                                            globalAutoplay.click = !play
                                        }}
                                    >
                                       Click to play
                                    </button>
                                </div>
                            
                        <div className="absolute top-8 left-0 w-full flex justify-center">
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
                                back to start
                            </button>
                        </div>
                    </div>
                ) : null
            ))}
        </>
    )
}
