import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

function Page({ params }: Props) {

    console.log(params.slug)

    return (
        <div>
            {
                params.slug[0] === '1' ? 'yes' : params.slug
            }
        </div>
    )
}

export default Page