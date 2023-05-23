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
                <h1 color="black">Loading...</h1>
            )
        }
        </>
    )
  }