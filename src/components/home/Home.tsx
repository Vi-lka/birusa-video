'use client'

import Link from 'next/link';
import React from 'react'
import ReactPlayer from 'react-player/lazy'

type Props = {}

function Home({ }: Props) {

    // const [domLoaded, setDomLoaded] = React.useState(false);

    // React.useEffect(() => {
    //     setDomLoaded(true);
    // }, []);

    return (
        <>
            <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                <Link href="/video/video1">Start</Link>
            </main>
        </>
    )
}

export default Home