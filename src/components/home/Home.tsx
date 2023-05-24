'use client'

import { CONTENT, globalAutoplay } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from '../ui/loading';

function Home() {

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24">
                    <Link 
                        className='text-5xl'
                        href={'start/' + CONTENT[0].url} 
                        onClick={() => {
                            globalAutoplay.click = true
                            document.body.requestFullscreen()
                        }}
                    >
                        Enter
                    </Link>
                </main>
            </Suspense>
        </>
    )
}

export default Home