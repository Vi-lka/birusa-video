'use client'

import React from 'react'
import ReactPlayer from 'react-player/lazy'

type Props = {}

function Home({ }: Props) {

    const [domLoaded, setDomLoaded] = React.useState(false);

    const [click, setClick] = React.useState(false);


    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded && (
                <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
                    <div onClick={() => setClick(true)}>Home</div>
                    <div onClick={() => setClick(!click)}>
                        <ReactPlayer playing={click} url={"/video/video1.mp4"} />
                    </div>
                </main>
            )}
        </>
    )
}

export default Home