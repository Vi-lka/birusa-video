'use client'

import { CONTENT, PATHS } from '@/utils/content';
import React from 'react'
import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
            {domLoaded && (
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                    <div onClick={() => setPlay(!play)}>
                        <ReactPlayer playing={play} url={'/video/' + link + ".mp4"} />
                    </div>
                    {
                        buttons.map((value, index) => 
                            <Link key={index} href={'video/' + value.url}>
                                {value.name}
                            </Link>
                        )
                    }
                </main>
            )}
        </>
    )
}

export default Page