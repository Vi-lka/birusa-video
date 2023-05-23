'use client'

import { CONTENT, PATHS } from '@/utils/content';
import React, { Suspense } from 'react'
import ReactPlayer from 'react-player';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VideoPage from '@/components/videoPage/VideoPage';
import dynamic from "next/dynamic";
import Loading from '@/components/ui/loading';
import Home from '@/components/home/Home';
const SuspenseVideoPage = dynamic(
  () => import('@/components/videoPage/VideoPage'),
  { suspense: true }
);

type Props = {
    params: { slug: string[] }
}

function Page({ params }: Props) {

    return (
        <>
          <Home />
        </>
    )
}

export default Page