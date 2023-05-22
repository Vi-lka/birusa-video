export type ContentType = {
    id: number
    name: string,
    url: string,
    buttons: {
        name: string,
        url: string
    }[]
}

export const PATHS = [
        'video1',
        'video1/video2',
        'video1/video3',
] as string[]

export const CONTENT: ContentType[] = [
    {
        id: 0,
        name: 'Start',
        url: 'video1',
        buttons: [
            {
                name: 'Variant1',
                url: 'video1/video2'
            },
            {
                name: 'Variant2' ,
                url: 'video1/video3' 
            }
        ]
    },
    {
        id: 1 as number,
        name: 'Step - Start/Variant1' ,
        url: 'video1/video2' ,
        buttons: []
    },
    {
        id: 2 as number,
        name: 'Step - Start/Variant2' ,
        url: 'video1/video3' ,
        buttons: []
    }

]