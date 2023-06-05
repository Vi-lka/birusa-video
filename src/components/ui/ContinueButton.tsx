import { useStore } from '@/utils/Store'
import { globals } from '@/utils/content'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    show: { 
        opacity: 1, 
        scale: 1,
        transition: {
            scale: { delay: 0.04 }
        }
    },
    hide: { 
        opacity: 0, 
        scale: 0,
    },
}

export default function ContinueButton() {

    const {
        play,
        setPlay,
    } = useStore()

  return (
    <motion.div 
        className="absolute bottom-[45%] left-0 w-full flex justify-center" 
        style={{ display: play ? 'none' : 'flex' }}
        animate={play ? 'hide' : 'show'}
        variants={variants}
    >
        <motion.button
            className='start-button w-fit h-fit font-MNWide font-extrabold uppercase bg-white text-birusa-blue shadow-[0_0_8px_rgba(0,79,117,1)] px-10 py-6 rounded-full border-none z-[50]'
            whileHover={{
                color: 'rgb(255 255 255)',
                backgroundColor: 'rgb(0 131 173)',
                boxShadow: '0 0 8px rgba(0 79 117)',
                paddingLeft: '68px',
                paddingRight: '68px',
                transition: { duration: 0.15 },
            }}
            onClick={() => {
                globals.click = !play
                setPlay(!play)
            }}
        >
            Продолжить
        </motion.button>
    </motion.div>
  )
}
