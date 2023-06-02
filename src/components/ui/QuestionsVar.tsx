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

export default function QuestionsVar({ currentVideo, currentPerson, ended } : Props) {

    let question = ''

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            question = element.name
        }
    });

  return (
    <motion.div
        className='absolute w-screen h-fit text-center bottom-[50%] p-1 z-30'
        style={{
            display: ended ? 'block' : 'none',
        }}
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
                md:subpixel-antialiased'
        >
            {question}
        </motion.h3>
    </motion.div>
  )
}
