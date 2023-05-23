'use client'

import { PATHS, globalAutoplay } from '@/utils/content';
import React, { Suspense } from 'react'
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import Loading from '@/components/ui/loading';
import { GetStaticPaths, GetStaticProps } from 'next';
const SuspenseVideoPage = dynamic(
  () => import('@/components/videoPage/VideoPage'),
  { suspense: true, ssr: false }
);

export function generateStaticParams() {
    return [{ slug: ['video1'] }, { slug: ['video1', 'video2'] }, { slug: ['video1', 'video3'] }]
}

export default function Page({ params }: { params: { slug: string[] } }) {

    console.log(params)

    const router = useRouter();

    const [loading, setLoading] = React.useState<boolean>(true);

    const [play, setPlay] = React.useState(false);

    React.useEffect(() => {
        setLoading(false)
        globalAutoplay.click && setPlay(true)
    }, [])

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
            // return router.push('/404')
        }
    };

    checkPath();

    return (
        <>
        {
            loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <SuspenseVideoPage 
                        play={play}
                        setPlay={setPlay}
                        urlFull={urlFull}
                        link={link}
                    />
                </Suspense>
            )
        }
        </>
    )
}

// export function getStaticPaths() {
//     return {
//         Paths: [
//             // See path selection below
//             { params: { slug: ['video1'] } },
//             { params: { slug: ['video1', 'video2'] } },
//             { params: { slug: ['video1', 'video3'] }}
//         ],

//         // See the fallback section below 
//         fallback: false
//     };
// }
