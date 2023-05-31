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
                <div className="loading absolute w-screen h-screen flex flex-col items-center justify-center z-[100]">
                    <div className="water"></div>
                    <div className="font-MNWide font-normal text-center text-white px-7 py-4 pr-4">
                        <h1>
                            Загрузка...
                        </h1>
                    </div>
                </div>
            )
        }
        </>
    )
  }