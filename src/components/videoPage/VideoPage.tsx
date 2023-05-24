'use client'

import { CONTENT, PATHS, globalAutoplay } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense, useEffect } from 'react'
import ReactPlayer from 'react-player';
import Loading from '../ui/Loading';
import { useRouter } from 'next/navigation';

type Props = {
    params: { slug: string[] }
}

function VideoPage({ params }: Props) {

    const [loading, setLoading] = React.useState<boolean>(true);

    const [ended, setEnded] = React.useState<boolean>(false);

    const [play, setPlay] = React.useState(false);

    React.useEffect(() => {
        globalAutoplay.click && setPlay(true)
    }, [])

    const router = useRouter();
    
    let urlFull = '';
    let link = '';

    params.slug.forEach((slug, index) => {
        if (index === slug.length - 1) {
            urlFull += slug
        } else urlFull += slug + '/'
    })

    function checkPath() {
        if (PATHS.includes(urlFull)) {
            return link = params.slug[params.slug.length - 1]
        } else {
            return router.push('/404')
        }
    };

    checkPath();


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
                            href={'start/' + value.url} 
                            className='text-teal-300 bg-zinc-800 p-3 z-50'
                            style={{display: ended ? 'block' : 'block'}}
                            onClick={() =>  globalAutoplay.click = true} 
                        >
                            {value.name}
                        </Link>
                    )
                }
                </div>
                <div className="absolute inset-y-1/2 left-0 w-full justify-evenly" style={{display: play ? 'none' : 'flex'}}>
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
            </div>
        </>
    )
}

export default VideoPage