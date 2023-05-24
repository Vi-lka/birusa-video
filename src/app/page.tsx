import React, { Suspense } from 'react'
import Home from '@/components/home/Home';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const SuspenseVideoPageReactComp = dynamic(
  () => import('@/components/videoPage/VideoPageReactComp'),
  { suspense: true, ssr: false }
);

function Page() {

    return (
        <>
          {/* <Home /> */}
          <Suspense fallback={<Loading />}>
            <SuspenseVideoPageReactComp />
        </Suspense>
        </>
    )
}

export default Page