'use client'

import { CONTENT, globalAutoplay } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from '../ui/loading';

type Props = {}

function Home({ }: Props) {

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24">
                    <Link 
                        className='text-5xl'
                        href={CONTENT[0].url} 
                        onClick={() => globalAutoplay.click = true}
                    >
                        Enter
                    </Link>
                </main>
            </Suspense>
        </>
    )
}

export default Home