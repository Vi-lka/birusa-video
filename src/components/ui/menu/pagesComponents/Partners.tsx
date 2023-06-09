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

export default function Partners({ isMenuOpen }: { isMenuOpen: boolean }) {

    const { currentMenu } = useStore()

    return (
        <motion.div
            className='absolute bottom-0 left-0 w-screen h-screen flex justify-center items-end bg-white z-[230]'
            // style={{ display: (isMenuOpen && isPartnersOpen) ? 'flex' : 'none' }}
            variants={animation}
            animate={(isMenuOpen && (currentMenu === 2)) ? 'show' : 'hide'}
        >
            <div
                className='w-screen h-screen absolute top-0 left-0 z-[11]'
            >
                <Image
                    className='object-cover'
                    style={{ transform: 'scaleX(-1)' }}
                    fill={true}
                    src={'../imgs/background-pages.svg'}

                    alt="Бирюса TIM"
                />
            </div>
            <div className='flex flex-col justify-end items-center w-[100%] h-[100%] overflow-y-scroll text-birusa-blue-dark text-lg z-[12]'>
                <div className='font-MNWide max-w-[1980px] lg:w-[85%] w-[90%] h-[100%] 2xl:pt-[14%] lg:pt-[20%] pt-[200px]'>
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
                            lg:mb-32 
                            mb-24
                        "
                    >
                        Партнёры
                    </h1>

                    <div
                        className="font-MNWide font-normal 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-lg text-sm text-center lg:mb-32 mb-24"
                    >
                        <div
                            className='2xl:w-[500px] 2xl:h-[250px] xl:w-[400px] xl:h-[200px] w-[250px] h-[125px] relative mx-auto text-left'
                        >
                            <Image
                                className='object-contain'
                                fill={true}
                                src={'../imgs/partners/agency.png'}

                                alt="Агентство молодежной политики и реализации программ общественного развития Красноярского края"
                            />
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Агентство молодежной политики и реализации программ общественного развития Красноярского края
                        </p>

                        <div
                            className='2xl:w-[500px] 2xl:h-[220px] xl:w-[400px] xl:h-[150px] w-[250px] h-[100px] relative mx-auto text-left'
                        >
                            <a href='https://vk.com/biryusa_tim' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/biryusa.png'}

                                    alt="«Бирюса»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Образовательный форум Территория инициативной молодёжи <a href='https://vk.com/biryusa_tim' target="_blank" className='underline'>«Бирюса»</a>
                        </p>


                        <div
                            className='2xl:w-[500px] 2xl:h-[150px] xl:w-[400px] xl:h-[120px] w-[250px] h-[70px] relative mx-auto text-left'
                        >
                            <a href='https://vk.com/molodkrsk' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/we_young.png'}

                                    alt="«Мы молодые»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            <a href='https://vk.com/molodkrsk' target="_blank" className='underline'>«Мы молодые»</a> портал агентства молодежной политики и реализации программ общественного развития Красноярского края
                        </p>


                        <div
                            className='2xl:w-[500px] 2xl:h-[150px] xl:w-[400px] xl:h-[120px] w-[250px] h-[70px] relative mx-auto text-left'
                        >
                            <Image
                                className='object-contain'
                                fill={true}
                                src={'../imgs/partners/forum.png'}

                                alt="«Форум»"
                            />
                        </div>
                        <p className='lg:mb-64 mb-32'>
                            Центр молодёжных инициатив «Форум»
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
                        Благодарность
                    </h1>

                    <div className="font-MNWide font-normal 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-lg text-sm text-center lg:pb-24 pb-12">
                        <div
                            className='2xl:w-[500px] 2xl:h-[170px] xl:w-[400px] xl:h-[150px] w-[250px] h-[100px] relative mx-auto text-left'
                        >
                            <a href='https://vk.com/gagarin_cs' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/gagarin.png'}

                                    alt="«Гагарин»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Региональный студенческий центр <a href='https://vk.com/gagarin_cs' target="_blank" className='underline'>«Гагарин»</a>
                        </p>

                        <div className='2xl:w-[500px] 2xl:h-[200px] xl:w-[400px] xl:h-[160px] w-[250px] h-[110px] relative mx-auto text-left'>
                            <a href='https://vk.com/sportexpro' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/sportex.png'}

                                    alt="«Спортэкс»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Центр экстремального спорта <a href='https://vk.com/sportexpro' target="_blank" className='underline'>«Спортэкс»</a>
                        </p>

                        <div className='2xl:w-[500px] 2xl:h-[100px] xl:w-[400px] xl:h-[70px] w-[250px] h-[50px] relative mx-auto text-left'>
                            <a href='https://vk.com/studvesnakrsk' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/studvesna.png'}

                                    alt="«Российская студенческая весна»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Фестиваль <a href='https://vk.com/studvesnakrsk' target="_blank" className='underline'>«Российская студенческая весна»</a> Красноярский край
                        </p>

                        <div className='2xl:w-[500px] 2xl:h-[130px] xl:w-[400px] xl:h-[100px] w-[250px] h-[70px] relative mx-auto text-left'>
                            <a href='https://vk.com/kamenka' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/kamenka.png'}

                                    alt="«Каменка»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Арт-резиденция <a href='https://vk.com/kamenka' target="_blank" className='underline'>«Каменка»</a>
                        </p>

                        <div className='2xl:w-[500px] 2xl:h-[250px] xl:w-[400px] xl:h-[180px] w-[250px] h-[110px] relative mx-auto text-left'>
                            <a href='https://vk.com/deloreandonuts' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/delorean.png'}

                                    alt="«Delorean»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Кофейня <a href='https://vk.com/deloreandonuts' target="_blank" className='underline'>«Delorean»</a>
                        </p>
                        
                        <div className='2xl:w-[500px] 2xl:h-[270px] xl:w-[400px] xl:h-[220px] w-[250px] h-[140px] relative mx-auto text-left'>
                            <a href='https://krascompass.ru/' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/krascompass.png'}

                                    alt="«КомпаС»"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Центр товаров для туризма <a href='https://krascompass.ru/' target="_blank" className='underline'>«КомпаС»</a>
                        </p>

                        <div className='2xl:w-[500px] 2xl:h-[190px] xl:w-[400px] xl:h-[150px] w-[250px] h-[100px] relative mx-auto text-left'>
                            <a href='http://www.hovel24.ru/ru/' target="_blank" className='absolute w-full h-full'>
                                <Image
                                    className='object-contain'
                                    fill={true}
                                    src={'../imgs/partners/hovel24.png'}

                                    alt="Hovel Hostel"
                                />
                            </a>
                        </div>
                        <p className='lg:mb-32 mb-24'>
                            Хостел <a href='http://www.hovel24.ru/ru/' target="_blank" className='underline'>Hovel Hostel</a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
