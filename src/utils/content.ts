export const globalAutoplay = {
    click: false
}

export const PATHS = [
    'video1/',
    'video1/video2/',
    'video1/video3/',
] as string[]

export const CONTENT: ContentType[] = [
    {
        id: 0,
        name: 'Start',
        url: 'video1/',
        filename: 'video1',
        buttons: [
            {
                name: 'Уебать',
                url: 'video1/video2/',
                indexUrl: 1,
            },
            {
                name: 'Обнять',
                url: 'video1/video3/',
                indexUrl: 2,
            }
        ]
    },
    {
        id: 1,
        name: 'Step - Start/Variant1',
        url: 'video1/video2/',
        filename: 'video2',
        buttons: [
            {
                name: 'Уебать',
                url: 'video1/video2/',
                indexUrl: 1,
            },
            {
                name: 'Обнять',
                url: 'video1/video3/',
                indexUrl: 2,
            }
        ]
    },
    {
        id: 2,
        name: 'Step - Start/Variant2',
        url: 'video1/video3/',
        filename: 'video3',
        buttons: [
            {
                name: 'Уебать',
                url: 'video1/video2/',
                indexUrl: 1,
            },
            {
                name: 'Обнять',
                url: 'video1/video3/',
                indexUrl: 2,
            }
        ]
    }

]