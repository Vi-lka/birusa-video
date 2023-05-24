import Loading from '@/components/ui/loading'
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react'
const SuspenseVideoPageReactComp = dynamic(
    () => import('@/components/videoPage/VideoPageReactComp'),
    { suspense: true, ssr: false }
  );

export default function page() {
  return (
    <>
        <Suspense fallback={<Loading />}>
            <SuspenseVideoPageReactComp />
        </Suspense>
    </>
  )
}
