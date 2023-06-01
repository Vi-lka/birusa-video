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
        filename: 'start.webm',
        buttons: [
            {
                name: 'Поля',
                indexUrl: 1,
            },
            {
                name: 'Ян',
                indexUrl: 2,
            },
            {
                name: 'Ника',
                indexUrl: 2,
            }
        ]
    },
    {
        id: 1,
        name: 'Поля',
        filename: 'polya.webm',
        buttons: [
            {
                name: 'Ян',
                indexUrl: 2,
            },
            {
                name: 'Ника',
                indexUrl: 3,
            }
        ]
    },
    {
        id: 2,
        name: 'Ян',
        filename: 'yan.webm',
        buttons: [
            {
                name: 'Ника',
                indexUrl: 3,
            },
            {
                name: 'Поля',
                indexUrl: 1,
            }
        ]
    },
    {
        id: 3,
        name: 'Ника',
        filename: 'nika.webm',
        buttons: [
            {
                name: 'Поля',
                indexUrl: 1,
            },
            {
                name: 'Ян',
                indexUrl: 2,
            }
        ]
    }

]