'use client'

import { CONTENT, PATHS } from '@/utils/content';
import React, { Suspense } from 'react'
import ReactPlayer from 'react-player';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VideoPage from '@/components/videoPage/VideoPage';
import dynamic from "next/dynamic";
import Loading from '@/components/ui/loading';
const SuspenseVideoPage = dynamic(
  () => import('@/components/videoPage/VideoPage'),
  { suspense: true }
);

type Props = {
    params: { slug: string[] }
}

function Page({ params }: Props) {

    const router = useRouter();

    const [loading, setLoading] = React.useState<boolean>(true);

    const [play, setPlay] = React.useState(false);

    React.useEffect(() => {
        setLoading(false);
    }, []);

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

export default Page