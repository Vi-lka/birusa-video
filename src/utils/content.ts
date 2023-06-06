import { setCookie } from "cookies-next";

export const globals: Globals = {
    // to prevent... I forgot what...)))(((
    click: false,
}

export const addCookieProgress = (progress: number) => {
    setCookie('current-progress', progress.toString(), { maxAge: 30, secure: true, path: '/', sameSite: true });
}

export const addCookiePerson = (person: number) => {
    setCookie('current-person', person.toString(), { maxAge: 30, secure: true, path: '/', sameSite: true });
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
        filename: 'start.mp4',
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
        filename: 'polya.mp4',
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
        filename: 'polya.mp4',
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
        filename: 'polya.mp4',
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
        filename: 'yan.mp4',
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
        filename: 'nika.mp4',
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