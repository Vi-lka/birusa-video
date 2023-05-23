'use client'

import { CONTENT } from '@/utils/content';
import Link from 'next/link';
import React from 'react'
import ReactPlayer from 'react-player';

type Props = {
    play: boolean,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>,
    urlFull: string,
    link: string
}

function VideoPage({ play, setPlay, urlFull, link }: Props) {

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
            <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                <div onClick={() => setPlay(!play)}>
                    <ReactPlayer playing={play} url={'/video/' + link + ".mp4"} controls={false} playsinline stopOnUnmount={true} loop={false} preload={'auto'}/>
                </div>
                {
                    buttons.map((value, index) => 
                        <Link key={index} href={'video/' + value.url}>
                            {value.name}
                        </Link>
                    )
                }
            </main>
        </>
    )
}

export default VideoPage