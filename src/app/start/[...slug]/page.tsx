import React, { Suspense } from 'react'
import dynamic from "next/dynamic";
import Loading from '@/components/ui/loading';
import getStaticPaths from '@/utils/getStaticPaths';
const SuspenseVideoPage = dynamic(
  () => import('@/components/videoPage/VideoPage'),
  { suspense: true, ssr: false }
);

export default function Page({ params }: { params: { slug: string[] } }) {

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
    return getStaticPaths()
}