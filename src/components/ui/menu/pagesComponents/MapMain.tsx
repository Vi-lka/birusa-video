import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    isMenuOpen: boolean,
    isMapOpen: boolean,
    setCurrentMenu: React.Dispatch<React.SetStateAction<number | undefined>>
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

export default function MapMain({ isMenuOpen, isMapOpen, setCurrentMenu }: Props) {
    return (
        <motion.div
            className='absolute bottom-0 left-0 w-screen h-screen bg-white z-[200]'
            // style={{ display: (isMenuOpen && isMapOpen) ? 'flex' : 'none' }}
            variants={animation}
            animate={(isMenuOpen && isMapOpen) ? 'show' : 'hide'}
        >
            <h1>Map</h1>
        </motion.div>
    )
}
