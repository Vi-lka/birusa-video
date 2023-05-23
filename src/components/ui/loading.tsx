'use client'

import React from "react";

export default function Loading() {
    
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
        {
            !loading && (
                <div className="absolute w-screen h-screen flex flex-col items-center justify-center bg-zinc-800 z-[100]">
                    <h1 className="text-teal-300 p-3 text-xl">Loading...</h1>
                </div>
            )
        }
        </>
    )
  }