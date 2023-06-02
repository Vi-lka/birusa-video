export const globals: Globals = {
    click: false,
    currentVideo: 0,
    currentPerson: 0,
}

export const PATHS = [
    'video1/',
    'video1/video2/',
    'video1/video3/',
] as string[]

export const CONTENT: ContentType[] = [
    {
        id: 0,
        name: 'Выбери персонажа',
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
                indexUrl: 3,
            }
        ]
    },
    {
        id: 1,
        name: 'писку дашь ебать?',
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
        name: 'А што вы делаете в моем холодильнике???',
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
        name: 'Что бормочешь когда дрочешь?',
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