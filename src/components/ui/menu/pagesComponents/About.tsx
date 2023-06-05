import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    isMenuOpen: boolean,
    isAboutOpen: boolean,
}

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

export default function About({ isMenuOpen, isAboutOpen }: Props) {
    return (
        <motion.div
            className='absolute bottom-0 left-0 w-screen h-screen bg-white z-[200]'
            // style={{ display: (isMenuOpen && isAboutOpen) ? 'flex' : 'none' }}
            variants={animation}
            animate={(isMenuOpen && isAboutOpen) ? 'show' : 'hide'}
        >
            <h1>About</h1>
        </motion.div>
    )
}
