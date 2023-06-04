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

    // ============================ ПОЛЯ ============================
    {
        id: 1,
        name: 'Куда поедем?',
        filename: 'polya.webm',
        buttons: [
            {
                name: 'В университет',
                indexUrl: 11,
            },
            {
                name: 'На берег',
                indexUrl: 12,
            }
        ]
    },
    {
        id: 11,
        name: 'Как дела?',
        filename: 'polya.webm',
        buttons: [
            {
                name: 'Сказать правду',
                indexUrl: 111,
            },
            {
                name: 'Соврать',
                indexUrl: 112,
            }
        ]
    },
    {
        id: 12,
        name: 'Что сделать?',
        filename: 'polya.webm',
        buttons: [
            {
                name: 'Поехать на ленты',
                indexUrl: 121,
            },
            {
                name: 'Побыть с папой',
                indexUrl: 122,
            }
        ]
    },

    // ============================ ЯН ============================ 
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

    // ============================ НИКА ============================ 
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