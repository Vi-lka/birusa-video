'use client'

import { VIDEO } from '@/utils/content';
import React from 'react'
import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/navigation';

type Props = {
    params: { slug: string[] }
}

function Page({ params }: Props) {
    
    const [domLoaded, setDomLoaded] = React.useState(false);

    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    const router = useRouter();

    let link = '/video/' + params.slug[params.slug.length - 1]

    const [play, setPlay] = React.useState(true);

    return (
        <>
            {domLoaded && (
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                    <div onClick={() => setPlay(!play)}>
                        <ReactPlayer playing={play} url={link + ".mp4"} />
                    </div>
                </main>
            )}
        </>
    )
}

export default Page