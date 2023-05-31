import React, { Suspense } from 'react'
import Loading from '@/components/ui/loading';
import dynamic from 'next/dynamic';
const SuspenseVideoPageReactComp = dynamic(
  () => import('@/components/videoPage/VideoPageReactComp'),
  { suspense: true, ssr: false }
);

function Page() {

    return (
        <>
          <Suspense fallback={<Loading />}>
            <SuspenseVideoPageReactComp />
          </Suspense>
        </>
    )
}

export default Page