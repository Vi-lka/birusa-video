import { useStore } from '@/utils/Store'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';

const animation = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    hide: {
        opacity: 0,
        y: "200%",
        transition: {
            y: { stiffness: 1000 }
        }
    },
}

export default function About({ isMenuOpen }: { isMenuOpen: boolean }) {

    const { currentMenu } = useStore()

    return (
        <motion.div
            className='absolute bottom-0 left-0 w-screen h-screen flex justify-center items-end bg-white z-[230]'
            // style={{ display: (isMenuOpen && isAboutOpen) ? 'flex' : 'none' }}
            variants={animation}
            animate={(isMenuOpen && (currentMenu === 1)) ? 'show' : 'hide'}
        >
            <div
                className='w-screen h-screen absolute top-0 left-0 z-[11]'
            >
                <Image
                    className='object-cover'
                    style={{ transform: 'scaleX(-1)'}}
                    fill={true}
                    src={'../imgs/background-pages.svg'}
                    priority={true}
                    alt="Бирюса TIM"
                />
            </div>
            <div className='flex flex-col justify-end items-center w-[100%] h-[100%] overflow-y-scroll text-birusa-blue-dark text-lg z-[12]'>
                <div className='font-MNWide max-w-[1980px] lg:w-[80%] w-[90%] h-[100%] 2xl:pt-[14%] lg:pt-[20%] pt-[200px]'>
                    <h1
                        className="
                            font-MNWide 
                            font-extrabold 
                            uppercase
                            2xl:text-6xl 
                            xl:text-5xl 
                            sm:text-4xl
                            text-3xl
                            lg:text-left
                            text-center
                            lg:mb-24 
                            mb-16
                        "
                    >
                        О Проекте
                    </h1>

                    <p
                        className="font-MNWide font-normal 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base lg:mb-32 mb-24"
                    >
                        «Место силы – Сибирь. Бирюса» – это три интерактивные истории о молодых ребятах. Герои пытаются найти себя, пройти через трудности и выбрать то, что им правда будет по сердцу. ТИМ «Бирюса» становится не просто точкой на карте, а местом силы. 
                        <br/>
                        <br/>
                        Выпускной мультимедийный проект «Место силы – Сибирь. Бирюса» создан студенткой Института филологии и языковой коммуникации СФУ Яной Фисенко совместно с форумом «Территория инициативной молодежи «Бирюса».
                    </p>

                    <div
                        className="font-MNWide font-normal lg:text-3xl sm:text-xl text-lg text-center lg:mb-32 mb-24"
                    >
                        <p className='mb-6'><b>Идея, сценарий, режиссура, продюсер</b> <br/> Яна Фисенко</p>
                        <p className='mb-6'>
                            <b>Сайт</b> <br/> <a href='https://dh-lab.ru/' target="_blank" className='underline'>DHlab</a>: <a href='https://t.me/vi_lka7' target="_blank" className='underline'>Виталя Пермяков</a>
                        </p>
                        <p className='mb-6'><b>Камера и монтаж</b> <br/> Никита Леонов</p>
                        <p className='mb-6'><b>Запись звука</b> <br/> Тёма Махаев</p>
                    </div>

                    <h1
                        className="
                            font-MNWide 
                            font-extrabold 
                            uppercase
                            2xl:text-5xl 
                            xl:text-4xl 
                            sm:text-3xl
                            text-2xl
                            text-center
                            lg:mb-24 
                            mb-16
                        "
                    >
                        Актёры
                    </h1>

                    <div
                        className="font-MNWide font-normal lg:text-3xl sm:text-xl text-lg text-center lg:mb-32 mb-24"
                    >
                        <p className='mb-6'><b>Поля</b> <br/> Аня Барбара Либрехт</p>
                        <p className='mb-6'><b>Мама Поли</b> <br/> Люся Бабаян</p>
                        <p className='mb-6'><b>Папа Поли</b> <br/> Андрей Парфенов</p>
                        <p className='mb-6'><b>Однокурсники Поли</b> <br/> Ксюша Сафонова, Лёша Солодовников, Ариша Левданская, Катя Образцова</p>
                        <p className='mb-6'><b>Артистки</b> <br/> Саша Пенязь, Таня Филонович</p>
                        <p className='mb-6'><b>Ян</b> <br/> Илья Свешников</p>
                        <p className='mb-6'><b>Максим</b> <br/> Влад Матвеев</p>
                        <p className='mb-6'><b>Босс</b> <br/> Максим Чернов</p>
                        <p className='mb-6'><b>Коллеги</b> <br/> Тёма Махаев, Соня Чиндекова</p>
                        <p className='mb-6'><b>Банда</b> <br/> Вова Листов, Максим Лапо, Катя Котова</p>
                        <p className='mb-6'><b>Ника</b> <br/> Арина Пачина</p>
                        <p className='mb-6'><b>Организаторы «Феста»</b> <br/> Ира Раевская, Настя Гудовская</p>
                        <p className='mb-6'><b>Настя</b> <br/> Настя Миронова</p>
                        <p className='mb-6'><b>Директор «ТИМ «Бирюса»</b> <br/> Никита Лукиянчук</p>
                    </div>

                    <h1
                        className="
                            font-MNWide 
                            font-extrabold 
                            uppercase
                            2xl:text-5xl 
                            xl:text-4xl 
                            sm:text-3xl
                            text-2xl
                            text-center
                            lg:mb-24 
                            mb-16
                        "
                    >
                        Большая благодарность
                    </h1>

                    <div
                        className="font-MNWide font-normal lg:text-3xl sm:text-xl text-lg text-center lg:pb-32 pb-24"
                    >
                        <p className='mb-6'>Диме Кафтасьеву за экстренно прекрасные кадры</p>
                        <p className='mb-6'>Витале Комарову за прекрасный свет</p>
                        <p className='mb-6'>Паше Ларину, Евгении Попечец</p>
                        <p className='mb-6'>Карену Бабаяну</p>
                        <p className='mb-6'>Анне Тимерман за чудесный бэкстэйдж</p>
                        <p className='mb-6'>Анне из «Hovel Hostel»</p>
                        <p className='mb-6'>Марии Мосягиной за связь с «Гагариным» и «Студвесной»</p>
                        <p className='mb-6'>Любе Чудеевой за связь со «Спортэксом»</p>
                        <p className='mb-6'>Всему Инфоцентру «Мы молодые», особенно Кате Самусевой, Насте Парухиной, Маше Бекшаевой, Илье Свешникову</p>
                        <p className='mb-6'>Елене Шульженковой и Роману Фисенко</p>
                        <p className='mb-6'>Руководителю выпускного проекта Олесе Владимировне Богуславской</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
