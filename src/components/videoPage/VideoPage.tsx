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

    let buttons = [] as {
        name: string,
        url: string
    }[];

    CONTENT.forEach(element => {
        if (element.url === urlFull) {
            buttons = element.buttons
        }
    });

    return (
        <>
            {loading ? <Loading/> : null}
            <div className="min-h-screen max-h-screen flex-col items-center justify-between p-24" style={{display: loading ? 'none' : 'flex'}}>
                <div onClick={() => setPlay(!play)}>
                    <ReactPlayer playing={play} url={'/video/' + link + ".mp4"} controls={false} playsinline stopOnUnmount={true} loop={false} preload={'auto'} onReady={() => {
                        setLoading(false)
                    }}/>
                </div>
                {
                    buttons.map((value, index) => 
                        <Link key={index} href={value.url}>
                            {value.name}
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default VideoPage