'use client'

import { CONTENT, globalAutoplay } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense, useEffect } from 'react'
import ReactPlayer from 'react-player';
import Loading from '../ui/loading';

type Props = {
    play: boolean,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>,
    urlFull: string,
    link: string
}

function VideoPage({ play, setPlay, urlFull, link }: Props) {

    const [loading, setLoading] = React.useState<boolean>(true);

    const [ended, setEnded] = React.useState<boolean>(false);

    let buttons = [] as {
        name: string,
        url: string
    }[];

    CONTENT.forEach(element => {
        if (element.url === urlFull) {
            buttons = element.buttons
        }
    });

    console.log('PLAY: ' + play)
    console.log('globalAutoplay.CLICK: ' + globalAutoplay.click)
    console.log('ENDED: ' + ended)


    return (
        <>
            {loading ? <Loading/> : null}
            <div className="relative w-screen h-screen flex-col items-center justify-between" style={{display: loading ? 'none' : 'flex'}}>
                <div 
                    className='w-fit h-fit'
                    onClick={() => {
                        setPlay(!play)
                        globalAutoplay.click = !play
                    }}
                >
                    <ReactPlayer 
                        style={{zIndex: 1}}
                        width={'100vw'}
                        height={'100vh'}
                        playing={play} 
                        url={'/video/' + link + ".mp4"} 
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
                </div>
                <div className="absolute bottom-8 left-0 flex w-full justify-evenly">
                {
                    buttons.map((value, index) => 
                        <Link 
                            key={index} 
                            href={value.url} 
                            className='text-teal-300 bg-zinc-800 p-3 z-50'
                            style={{display: ended ? 'block' : 'none'}}
                            onClick={() =>  globalAutoplay.click = true} 
                        >
                            {value.name}
                        </Link>
                    )
                }
                </div>
            </div>
        </>
    )
}

export default VideoPage