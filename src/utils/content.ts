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
        id: 111,
        name: 'Окликнуть студентку',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Жми быстрее!!!',
                indexUrl: 113,
            },
        ]
    },
    {
        id: 112,
        name: 'Окликнуть студентку',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Жми быстрее!!!',
                indexUrl: 113,
            },
        ]
    },
    {
        id: 113,
        name: 'Что делать?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Промолчать',
                indexUrl: 1131,
            },
            {
                name: 'Ответить',
                indexUrl: 1132,
            },
        ]
    },
    {
        id: 1131,
        name: 'Что дальше?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
            {
                name: 'Проявить себя',
                indexUrl: 132,
            },
        ]
    },
    {
        id: 1132,
        name: 'Что дальше?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
            {
                name: 'Проявить себя',
                indexUrl: 131,
            },
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
    {
        id: 121,
        name: 'Окликнуть студентку',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Жми быстрее!!!',
                indexUrl: 123,
            },
        ]
    },
    {
        id: 122,
        name: 'Окликнуть студентку',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Жми быстрее!!!',
                indexUrl: 123,
            },
        ]
    },
    {
        id: 123,
        name: 'Что делать?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Промолчать',
                indexUrl: 1231,
            },
            {
                name: 'Ответить',
                indexUrl: 1232,
            },
        ]
    },
    {
        id: 1231,
        name: 'Что дальше?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
            {
                name: 'Проявить себя',
                indexUrl: 132,
            },
        ]
    },
    {
        id: 1232,
        name: 'Что дальше?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
            {
                name: 'Проявить себя',
                indexUrl: 132,
            },
        ]
    },
    {
        id: 131,
        name: 'Как ответить?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Ждут друзья',
                indexUrl: 1311,
            },
            {
                name: 'Нужно домой',
                indexUrl: 1321,
            },
        ]
    },
    {
        id: 132,
        name: 'Как ответить?',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Ждут друзья',
                indexUrl: 1311,
            },
            {
                name: 'Нужно домой',
                indexUrl: 1321,
            },
        ]
    },
    {
        id: 1311,
        name: '',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Нажми, чтобы отправить заявку',
                indexUrl: 14,
            },
        ]
    },
    {
        id: 1321,
        name: 'Нажми, чтобы отправить',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Отправить заявку',
                indexUrl: 14,
            },
        ]
    },
    {
        id: 14,
        name: 'Поехать на Бирюсу',
        filename: 'polya.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 15,
            },
        ]
    },
    {
        id: 15,
        name: 'Хочу на Бирюсу',
        filename: 'polya.mp4',
        buttons: []
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