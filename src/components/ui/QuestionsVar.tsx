import { useStore } from '@/utils/Store';
import { CONTENT } from '@/utils/content';
import { motion } from 'framer-motion';
import React from 'react'

const variants = {
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            scale: { delay: 0.1 }
        }
    },
    closed: {
        opacity: 0,
        scale: 0,
    },
}

export default function QuestionsVar() {

    const {
        currentVideo,
        //
        ended, 
    } = useStore()

    let question = ''

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            question = element.name
        }
    });

  const anyWindow = window as any

    return (
        <motion.div
            className='absolute w-screen h-fit text-center flex items-center justify-center p-1 z-30'
            style={{
                display: ended ? 'flex' : 'none',
                bottom: ((currentVideo === 15) || (currentVideo === 26) || (currentVideo === 36)) ? '90%' : '45%',
            }}
            animate={ended ? "open" : "closed"}
            variants={variants}
        >
            {
                ((currentVideo === 15) || (currentVideo === 26) || (currentVideo === 36)) ? 
                <div className="start-screen-cont-main absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-[100]">
                        <motion.p
                          className='main-text h-fit font-MNExpanded font-extrabold uppercase text-center antialiased md:subpixel-antialiased text-white px-4 py-[14px] lg:px-7 lg:py-4 2xl:px-12 2xl:py-6 rounded-full z-50'
                        >
                          Место силы – Сибирь. Бирюса
                          <br />
                          <span className='font-MNWide font-normal normal-case'>
                            Интерактивный фильм
                          </span>
                        </motion.p>

                        <motion.a
                          className='start-button w-fit h-fit font-MNWide font-extrabold uppercase text-5xl bg-white text-birusa-blue px-12 py-6 2xl:py-8 rounded-full shadow-[0_0_8px_rgba(0,79,117,1)] border-none z-50'
                          whileHover={{
                            color: 'rgb(255 255 255)',
                            backgroundColor: 'rgb(0 131 173)',
                            boxShadow: '0 0 8px rgba(0 79 117)',
                            paddingLeft: '70px',
                            paddingRight: '70px',
                            transition: { duration: 0.15 },
                          }}
                          href="https://vk.com/biryusa_tim" 
                          target="_blank"
                          onClick={() => {
                            // if (currentVideo === 15) {
                            //     anyWindow.ym(93903526,'reachGoal','polya_final_birusa_tim')

                            //   } else if (currentVideo === 26) {
                            //     anyWindow.ym(93903526,'reachGoal','yan_final_birusa_tim')

                            //   } else if (currentVideo === 36) {
                            //     anyWindow.ym(93903526,'reachGoal','nika_final_birusa_tim')

                            //   }
                          }}
                        >
                          {question}
                        </motion.a>
                    </div>
                :
                    <motion.h3
                        className='
                            font-MNExpanded 
                            font-[800] 
                            text-white 
                            2xl:text-4xl 
                            xl:text-3xl
                            lg:text-xl
                            md:text-lg
                            sm:text-base
                            text-sm
                            uppercase 
                            antialiased 
                            md:subpixel-antialiased
                            w-fit
                            drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]
                            border-y-2
                            border-white
                            xl:py-8
                            lg:py-6
                            py-2
                        '
                    >
                        {question}
                    </motion.h3>
                
            }
        </motion.div>
    )
}
