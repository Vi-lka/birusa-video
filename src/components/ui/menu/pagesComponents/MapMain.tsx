import { Cycle, motion } from 'framer-motion'
import React from 'react'
import MapMainNavigation from './MapMainNavigation'
import GoBackMenu from '../GoBackMenu'
import MapMainFlow from './MapMainFlow'
import { useStore } from '@/utils/Store'

const animation = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            y: { stiffness: 1000 }
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

const mapIds = [0, 1, 2];

export default function MapMain({ isMenuOpen, toggleOpen }: { isMenuOpen: boolean, toggleOpen: Cycle }) {

    const { currentMenu } = useStore()

    return (
        <motion.div
            className='absolute bottom-0 left-0 w-screen h-screen bg-white z-[230]'
            style={{ display: isMenuOpen ? 'flex' : 'none' }}
            variants={animation}
            animate={(isMenuOpen && (currentMenu === 0)) ? 'show' : 'hide'}
        >

            <MapMainNavigation />

            <MapMainFlow toggleOpen={toggleOpen} />

        </motion.div>
    )
}
