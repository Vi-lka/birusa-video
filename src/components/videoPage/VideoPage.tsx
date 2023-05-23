'use client'

import { CONTENT } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense } from 'react'
import ReactPlayer from 'react-player/lazy';
import Loading from '../ui/loading';

type Props = {
    play: boolean,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>,
    urlFull: string,
    link: string
}

function VideoPage({ play, setPlay, urlFull, link }: Props) {

    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

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
        {
            loading ? (
                <Loading />
            ) : (
            <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                <div onClick={() => setPlay(!play)}>
                    <Suspense fallback={<Loading/>}>
                        <ReactPlayer playing={play} url={'/video/' + link + ".mp4"} controls={false} playsinline stopOnUnmount={true} loop={false} preload={'auto'}/>
                    </Suspense>
                </div>
                {
                    buttons.map((value, index) => 
                        <Link key={index} href={'video/' + value.url}>
                            {value.name}
                        </Link>
                    )
                }
            </main>
            )
        }
        </>
    )
}

export default VideoPage