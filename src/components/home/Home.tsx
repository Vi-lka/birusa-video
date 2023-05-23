'use client'

import { CONTENT } from '@/utils/content';
import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from '../ui/loading';

type Props = {}

function Home({ }: Props) {

    // const [domLoaded, setDomLoaded] = React.useState(false);

    // React.useEffect(() => {
    //     setDomLoaded(true);
    // }, []);

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                    <Link href={'video/' + CONTENT[0].url}>Start</Link>
                </main>
            </Suspense>
        </>
    )
}

export default Home