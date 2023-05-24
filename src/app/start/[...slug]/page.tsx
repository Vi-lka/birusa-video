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

export default function Page({ params }: { params: { slug: string[] } }) {

    console.log(params)

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SuspenseVideoPage 
                    params={params}
                />
            </Suspense>
        </>
    )
}

export function generateStaticParams() {
    return [{ slug: ['video1'] }, { slug: ['video1', 'video2'] }, { slug: ['video1', 'video3'] }]
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
