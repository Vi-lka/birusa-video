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
            style={{ display: isMenuOpen ? 'flex' : 'none' }}
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
                        <p className='mb-6'>
                            <b>Идея, сценарий, режиссура, продюсер</b> 
                            <br/> 
                            <a href='https://vk.com/ya.fisen' target="_blank" className='underline'>Яна Фисенко</a>
                        </p>
                        <p className='mb-6'>
                            <b>Сайт</b> 
                            <br/> 
                            <a href='https://dh-lab.ru/' target="_blank" className='underline'>DHlab</a>: <a href='https://t.me/vi_lka7' target="_blank" className='underline'>Виталя Пермяков</a>
                        </p>
                        <p className='mb-6'>
                            <b>Камера, режиссура, монтаж</b> 
                            <br/> <a href='https://vk.com/nileonov' target="_blank" className='underline'>Никита Леонов</a> 
                        </p>
                        <p className='mb-6'>
                            <b>Запись звука</b> 
                            <br/> <a href='https://vk.com/amachaev' target="_blank" className='underline'>Тёма Махаев</a> 
                        </p>
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
                        <p className='mb-6'>
                            <b>Поля</b> 
                            <br/> 
                            <a href='https://vk.com/ann_liebrecht' target="_blank" className='underline'>Аня Барбара Либрехт</a> 
                        </p>
                        <p className='mb-6'>
                            <b>Ян</b> 
                            <br/> 
                            <a href='https://vk.com/sveshnikovilya' target="_blank" className='underline'>Илья Свешников</a>
                        </p>
                        <p className='mb-6'>
                            <b>Ника</b> 
                            <br/> 
                            <a href='https://vk.com/id382448250' target="_blank" className='underline'>Арина Пачина</a>
                        </p>
                        <p className='mb-6'>
                            <b>Мама Поли</b> 
                            <br/> 
                            <a href='https://vk.com/lusunny' target="_blank" className='underline'>Люся Бабаян</a> 
                        </p>
                        <p className='mb-6'>
                            <b>Папа Поли</b> 
                            <br/> 
                            <a href='https://vk.com/krinworld' target="_blank" className='underline'>Андрей Парфенов</a> 
                        </p>
                        <p className='mb-6'>
                            <b>Однокурсники Поли</b> 
                            <br/> 
                            <a href='https://vk.com/saffonova' target="_blank" className='underline'>Ксюша Сафонова</a>,<br/>
                            <a href='https://vk.com/parenb_s_afro' target="_blank" className='underline'>Лёша Солодовников</a>,<br/>
                            <a href='https://vk.com/arishalevd' target="_blank" className='underline'>Ариша Левданская</a>,<br/>
                            <a href='https://vk.com/obraztsovakatia' target="_blank" className='underline'>Катя Образцова</a>
                        </p>
                        <p className='mb-6'>
                            <b>Артистки</b> 
                            <br/> 
                            <a href='https://vk.com/qpsssdb' target="_blank" className='underline'>Саша Пенязь</a>,<br/>
                            <a href='https://vk.com/tatfilonov' target="_blank" className='underline'>Таня Филонович</a>
                        </p>
                        <p className='mb-6'>
                            <b>Максим</b> 
                            <br/>
                            <a href='https://vk.com/hockeyislive' target="_blank" className='underline'>Влад Матвеев</a>
                        </p>
                        <p className='mb-6'>
                            <b>Босс</b> 
                            <br/> 
                            <a href='https://vk.com/maxogonckiy' target="_blank" className='underline'>Максим Чернов</a>
                        </p>
                        <p className='mb-6'>
                            <b>Коллеги</b> 
                            <br/> 
                            <a href='https://vk.com/amachaev' target="_blank" className='underline'>Тёма Махаев</a>,<br/>
                            <a href='https://vk.com/chindofya' target="_blank" className='underline'>Соня Чиндекова</a>
                        </p>
                        <p className='mb-6'>
                            <b>Банда</b> 
                            <br/>
                            <a href='https://vk.com/kiska_volodya' target="_blank" className='underline'>Вова Листов</a>,<br/>
                            <a href='https://vk.com/idmaximlapo' target="_blank" className='underline'>Максим Лапо</a>,<br/>
                            <a href='https://vk.com/k_kotovaa' target="_blank" className='underline'>Катя Котова</a>
                        </p>
                        <p className='mb-6'>
                            <b>Организаторы «Феста»</b> 
                            <br/> 
                            <a href='https://vk.com/irraevskaya' target="_blank" className='underline'>Ира Раевская</a>,<br/>
                            <a href='https://vk.com/gudanastasia' target="_blank" className='underline'>Настя Гудовская</a>
                        </p>
                        <p className='mb-6'>
                            <b>Настя</b> 
                            <br/> 
                            <a href='https://vk.com/aneistazzz_i' target="_blank" className='underline'>Настя Миронова</a>
                        </p>
                        <p className='mb-6'>
                            <b>Директор «ТИМ «Бирюса»</b> 
                            <br/> 
                            <a href='https://vk.com/nikitlucky' target="_blank" className='underline'>Никита Лукиянчук</a>
                        </p>
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
                        Музыка
                    </h1>

                    <div
                        className="font-MNWide font-normal lg:text-3xl sm:text-xl text-lg text-center lg:mb-32 mb-24"
                    >
                        <p className='mb-6'>
                            Творчество <a href='https://vk.com/y.tronenko' target="_blank" className='underline'>Юлии Троненко</a> 
                        </p>
                        <p className='mb-6'> 
                            Такой простой – <a href='https://vk.com/tvoedaleko' target="_blank" className='underline'>Твоё далеко</a>
                        </p>
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
                        <p className='mb-6'>
                            (ТУТ ЕГО ПРОДАКШН КАКОЙ-ТО БУДЕТ И ССЫЛКА):<br/> 
                            <a href='https://vk.com/privetcheloveche' target="_blank" className='underline'>Диме Кафтасьеву</a> за экстренно прекрасные кадры
                        </p>
                        <p className='mb-6'>
                            <a href='https://vk.com/id126029146' target="_blank" className='underline'>Витале Комарову</a> за связь с <a href='https://vk.com/kamenka' target="_blank" className='underline'>«Каменкой»</a>
                        </p>
                        <p className='mb-6'>
                            <a href='https://vk.com/larin__pavel' target="_blank" className='underline'>Паше Ларину</a>, Евгении Попечец
                        </p>
                        <p className='mb-6'>
                            Карену Бабаяну
                        </p>
                        <p className='mb-6'>
                            <a href='https://vk.com/annatimerman' target="_blank" className='underline'>Анне Тимерман</a> за чудесный бэкстэйдж
                        </p>
                        <p className='mb-6'>
                            Анне из <a href='http://www.hovel24.ru/ru/' target="_blank" className='underline'>«Hovel Hostel»</a>
                        </p>
                        <p className='mb-6'>
                            <a href='https://vk.com/mary_mosyagina' target="_blank" className='underline'>Марии Мосягиной</a> за связь с <a href='https://vk.com/gagarin_cs' target="_blank" className='underline'>«Гагариным»</a> и <a href='https://vk.com/studvesnakrsk' target="_blank" className='underline'>«Студвесной»</a>
                        </p>
                        <p className='mb-6'>
                            <a href='https://vk.com/prettypurr' target="_blank" className='underline'>Любе Чудеевой</a> за связь со <a href='https://vk.com/sportexpro' target="_blank" className='underline'>«Спортэксом»</a>
                        </p>
                        <p className='mb-6'>
                            Всему Инфоцентру <a href='https://vk.com/molodkrsk' target="_blank" className='underline'>«Мы молодые»</a>, особенно <a href='https://vk.com/samusevaes' target="_blank" className='underline'>Кате Самусевой</a>, <a href='https://vk.com/nastasua_p' target="_blank" className='underline'>Насте Парухиной</a>, <a href='https://vk.com/lady_mary_brienne' target="_blank" className='underline'>Маше Бекшаевой</a>, <a href='https://vk.com/sveshnikovilya' target="_blank" className='underline'>Илье Свешникову</a>
                        </p>
                        <p className='mb-6'>
                            Елене Шульженковой и Роману Фисенко
                        </p>
                        <p className='lg:mb-[16rem] mb-[8rem]'>
                            Руководителю выпускного проекта Олесе Владимировне Богуславской
                        </p>
                        <p className='lg:text-xl sm:text-base text-sm'>
                            СФУ, Красноярск 2023 год
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
