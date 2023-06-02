import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const variants = {
    show: { 
        opacity: 1, 
    },
    hide: { 
        opacity: 0, 
    },
}

export default function BackgroundPause({ play, ended } : { play: boolean, ended: boolean }) {
  return (
    <>
        <motion.div 
            className='w-screen h-screen absolute top-0 left-0 z-[11]'
            style={{ display: (play ? 'none' : 'block') }}
            animate={(play ? 'hide' : 'show')}
            variants={variants}
        >
            <Image
                className='object-cover z-[11]'
                fill={true}
                src={'../imgs/background.svg'}
                priority={true}
                alt="Бирюса TIM"
            />
        </motion.div>
        
        <motion.div 
            className="bg-color w-screen h-screen absolute top-0 left-0 z-[10]" 
            style={{ display: ended ? 'block' : (play ? 'none' : 'block') }}
            animate={ended ? 'show' : (play ? 'hide' : 'show')}
            variants={variants}
        />
        <motion.div 
            className="bg-color-black w-screen h-screen absolute top-0 left-0 z-[9]" 
            style={{ display: ended ? 'block' : (play ? 'none' : 'block') }}
            animate={ended ? 'show' : (play ? 'hide' : 'show')}
            variants={variants}
        />
    </>
  )
}
