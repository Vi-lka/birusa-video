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
                name: 'Ян',
                indexUrl: 2,
            },
            {
                name: 'Ника',
                indexUrl: 3,
            },
            {
                name: 'Поля',
                indexUrl: 1,
            },
        ]
    },

    // ============================ ПОЛЯ ============================
    {
        id: 1,
        name: 'Куда поедем?',
        filename: '1.mp4',
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
        filename: '11.mp4',
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
        name: 'Нажми, чтобы поехать',
        filename: '111.mp4',
        buttons: [
            {
                name: 'Поехать в универ',
                indexUrl: 113,
            },
        ]
    },
    {
        id: 112,
        name: 'Нажми, чтобы поехать',
        filename: '112.mp4',
        buttons: [
            {
                name: 'Поехать в универ',
                indexUrl: 113,
            },
        ]
    },
    {
        id: 113,
        name: 'Что делать?',
        filename: '113.mp4',
        buttons: [
            {
                name: ' ',
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
        filename: '1131.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
        ]
    },
    {
        id: 1132,
        name: 'Что дальше?',
        filename: '1132.mp4',
        buttons: [ 
            {
                name: 'Проявить себя',
                indexUrl: 131,
            },
        ]
    },
    {
        id: 12,
        name: 'Что сделать?',
        filename: '12.mp4',
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
        name: 'Нажми, чтобы поехать',
        filename: '121.mp4',
        buttons: [
            {
                name: 'Поехать в универ',
                indexUrl: 123,
            },
        ]
    },
    {
        id: 122,
        name: 'Нажми, чтобы поехать',
        filename: '122.mp4',
        buttons: [
            {
                name: 'Поехать в универ ',
                indexUrl: 123,
            },
        ]
    },
    {
        id: 123,
        name: 'Что делать?',
        filename: '123.mp4',
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
        filename: '1231.mp4',
        buttons: [
            {
                name: 'Вдохновиться Бирюсой',
                indexUrl: 131,
            },
        ]
    },
    {
        id: 1232,
        name: 'Что дальше?',
        filename: '1232.mp4',
        buttons: [ 
            {
                name: 'Проявить себя',
                indexUrl: 132,
            },
        ]
    },
    {
        id: 131,
        name: 'Как ответить?',
        filename: '131.mp4',
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
        filename: '132.mp4',
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
        name: 'Нажми, чтобы отправить',
        filename: '1311.mp4',
        buttons: [
            {
                name: 'Отправить заявку',
                indexUrl: 15,
            },
        ]
    },
    {
        id: 1321,
        name: 'Нажми, чтобы отправить',
        filename: '1321.mp4',
        buttons: [
            {
                name: 'Отправить заявку',
                indexUrl: 15,
            },
        ]
    },
    {
        id: 15,
        name: 'Хочу на Бирюсу',
        filename: '15.mp4',
        buttons: []
    },


    // ============================ ЯН ============================ 
    {
        id: 2,
        name: 'Что сделать?',
        filename: '2.mp4',
        buttons: [
            {
                name: 'Передать задачу коллеге',
                indexUrl: 21,
            },
            {
                name: 'Пойти на обед',
                indexUrl: 22,
            }
        ]
    },
    {
        id: 21,
        name: 'Чего хочешь?',
        filename: '21.mp4',
        buttons: [
            {
                name: 'Пообедать',
                indexUrl: 23,
            },
            {
                name: 'Новые знакомства',
                indexUrl: 24,
            },
            {
                name: 'Взять отпуск',
                indexUrl: 25,
            }
        ]
    },
    {
        id: 22,
        name: 'Чего хочешь?',
        filename: '22.mp4',
        buttons: [
            {
                name: 'Пообедать',
                indexUrl: 23,
            },
            {
                name: 'Новые знакомства',
                indexUrl: 24,
            },
            {
                name: 'Взять отпуск',
                indexUrl: 25,
            }
        ]
    },
    {
        id: 23,
        name: 'Нажми, чтобы отправиться',
        filename: '23.mp4',
        buttons: [
            {
                name: 'Отправиться домой',
                indexUrl: 233,
            },
        ]
    },
    {
        id: 233,
        name: 'Что ответить боссу?',
        filename: '233.mp4',
        buttons: [
            {
                name: 'Сменить тему',
                indexUrl: 2331,
            },
            {
                name: 'Попросить отпуск',
                indexUrl: 2332,
            }
        ]
    },
    {
        id: 2331,
        name: 'Нажми, чтобы встретиться',
        filename: '2331.mp4',
        buttons: [
            {
                name: 'Встретиться с ребятами',
                indexUrl: 234,
            }
        ]
    },
    {
        id: 2332,
        name: 'Нажми, чтобы встретиться',
        filename: '2332.mp4',
        buttons: [
            {
                name: 'Встретиться с ребятами',
                indexUrl: 234,
            }
        ]
    },
    {
        id: 234,
        name: 'Что делать с заявкой?',
        filename: '234.mp4',
        buttons: [
            {
                name: 'Поставить напоминание',
                indexUrl: 2341,
            },
            {
                name: 'Подумать',
                indexUrl: 2342,
            }
        ]
    },
    {
        id: 2341,
        name: 'Поехать на Бирюсу',
        filename: '2341.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 26,
            }
        ]
    },
    {
        id: 2342,
        name: 'Поехать на Бирюсу',
        filename: '2342.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 26,
            }
        ]
    },
    {
        id: 24,
        name: 'Нажми, чтобы отправиться',
        filename: '24.mp4',
        buttons: [
            {
                name: 'Отправиться домой',
                indexUrl: 243,
            }
        ]
    },
    {
        id: 243,
        name: 'Что ответить боссу?',
        filename: '243.mp4',
        buttons: [
            {
                name: 'Сменить тему',
                indexUrl: 2431,
            },
            {
                name: 'Попросить отпуск',
                indexUrl: 2432,
            }
        ]
    },
    {
        id: 2431,
        name: 'Нажми, чтобы поехать',
        filename: '2431.mp4',
        buttons: [
            {
                name: 'Поехать на работу',
                indexUrl: 244,
            }
        ]
    },
    {
        id: 2432,
        name: 'Нажми, чтобы поехать',
        filename: '2432.mp4',
        buttons: [
            {
                name: 'Поехать на работу',
                indexUrl: 244,
            }
        ]
    },
    {
        id: 244,
        name: 'Поехать на Бирюсу',
        filename: '244.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 26,
            }
        ]
    },
    {
        id: 25,
        name: 'Нажми, чтобы отправиться',
        filename: '25.mp4',
        buttons: [
            {
                name: 'Отправиться домой',
                indexUrl: 253,
            }
        ]
    },
    {
        id: 253,
        name: 'Что ответить боссу?',
        filename: '253.mp4',
        buttons: [
            {
                name: 'Сменить тему',
                indexUrl: 2531,
            },
            {
                name: 'Попросить отпуск',
                indexUrl: 2532,
            }
        ]
    },
    {
        id: 2531,
        name: 'Нажми, чтобы встретиться',
        filename: '2531.mp4',
        buttons: [
            {
                name: 'Встретиться с ребятами',
                indexUrl: 254,
            }
        ]
    },
    {
        id: 2532,
        name: 'Нажми, чтобы встретиться',
        filename: '2532.mp4',
        buttons: [
            {
                name: 'Встретиться с ребятами',
                indexUrl: 254,
            }
        ]
    },
    {
        id: 254,
        name: 'Нажми, чтобы поехать',
        filename: '254.mp4',
        buttons: [
            {
                name: 'Поехать на работу',
                indexUrl: 255,
            }
        ]
    },
    {
        id: 255,
        name: 'Поехать на Бирюсу',
        filename: '255.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 26,
            }
        ]
    },
    {
        id: 26,
        name: 'Хочу на Бирюсу',
        filename: '26.mp4',
        buttons: []
    },

    // ============================ НИКА ============================ 
    {
        id: 3,
        name: 'Что делать?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Одобрить заявку',
                indexUrl: 31,
            },
            {
                name: 'Отклонить заявку',
                indexUrl: 32,
            }
        ]
    },
    {
        id: 31,
        name: 'Куда отправиться?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'В столовую',
                indexUrl: 311,
            },
            {
                name: 'На прогулку',
                indexUrl: 312,
            }
        ]
    },
    {
        id: 32,
        name: 'От кого сообщение?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'От организаторов «Феста»',
                indexUrl: 33,
            },
            {
                name: 'От друга',
                indexUrl: 34,
            }
        ]
    },
    {
        id: 33,
        name: 'Куда отправиться?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'В столовую',
                indexUrl: 311,
            },
            {
                name: 'На прогулку',
                indexUrl: 312,
            }
        ]
    },
    {
        id: 311,
        name: 'О чём говорить?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'О форуме',
                indexUrl: 3111,
            },
            {
                name: 'О проекте',
                indexUrl: 3121,
            }
        ]
    },
    {
        id: 312,
        name: 'О чём говорить?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'О форуме',
                indexUrl: 3111,
            },
            {
                name: 'О проекте',
                indexUrl: 3121,
            }
        ]
    },
    {
        id: 34,
        name: 'Окликнуть Нику',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Жми быстрее!!!',
                indexUrl: 35,
            },
        ]
    },
    {
        id: 35,
        name: 'Что делать Максиму?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Позвать прогуляться',
                indexUrl: 351,
            },
            {
                name: 'Оставить одну',
                indexUrl: 352,
            }
        ]
    },
    {
        id: 351,
        name: 'Что делать с работой?',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Поехать к подруге',
                indexUrl: 3511,
            },
            {
                name: 'Помочь на работе',
                indexUrl: 3512,
            }
        ]
    },
    {
        id: 3111,
        name: 'Поехать на Бирюсу',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 36,
            },
        ]
    },
    {
        id: 3121,
        name: 'Поехать на Бирюсу',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 36,
            },
        ]
    },
    {
        id: 3511,
        name: 'Поехать на Бирюсу',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 36,
            },
        ]
    },
    {
        id: 3512,
        name: 'Поехать на Бирюсу',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 36,
            },
        ]
    },
    {
        id: 352,
        name: 'Поехать на Бирюсу',
        filename: 'nika.mp4',
        buttons: [
            {
                name: 'Погнали!',
                indexUrl: 36,
            },
        ]
    },
    {
        id: 36,
        name: 'Хочу на Бирюсу',
        filename: 'nika.mp4',
        buttons: []
    },

]