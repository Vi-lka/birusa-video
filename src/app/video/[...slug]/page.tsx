'use client'

import { CONTENT, PATHS } from '@/utils/content';
import React from 'react'
import ReactPlayer from 'react-player';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VideoPage from '@/components/videoPage/VideoPage';

type Props = {
    params: { slug: string[] }
}

function Page({ params }: Props) {
    
    const [domLoaded, setDomLoaded] = React.useState(false);

    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    const router = useRouter();

    let urlFull = '';
    let link = '';

    params.slug.forEach((slug, index) => {
        if (index === params.slug.length - 1) {
            urlFull += slug
        } else urlFull += slug + '/'
    }) ;

    function checkPath() {
        if (PATHS.includes(urlFull)) {
            return link = params.slug[params.slug.length - 1]
        } else {
            return router.push('/404')
        }
    };

    checkPath();

    const [play, setPlay] = React.useState(true);

    return (
        <>
        {domLoaded && (
            <VideoPage 
                play={play}
                setPlay={setPlay}
                urlFull={urlFull}
                link={link}
            />
        )}
        </>
    )
}

export default Page