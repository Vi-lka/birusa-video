import { CONTENT } from '@/utils/content';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    currentVideo: number | undefined | null,
    currentPerson: number | undefined | null,
    ended: boolean
}

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

export default function QuestionsVar({ currentVideo, currentPerson, ended }: Props) {

    let question = ''

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            question = element.name
        }
    });

    return (
        <motion.div
            className='absolute w-screen h-fit text-center flex items-center justify-center bottom-[45%] p-1 z-30'
            style={{
                display: ended ? 'flex' : 'none',
            }}
            animate={ended ? "open" : "closed"}
            variants={variants}
        >
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
        </motion.div>
    )
}
