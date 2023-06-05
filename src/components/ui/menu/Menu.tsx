import { motion, useCycle } from 'framer-motion'
import React, { useRef } from 'react'
import Icons from './Icons'
import { MenuToggle } from './MenuToggle'
import useDebounce from '@/utils/use-demounce'
import { useDimensions } from '@/utils/use-dimensions'
import MapMain from './pagesComponents/MapMain'
import About from './pagesComponents/About'
import Partners from './pagesComponents/Partners'
import GoBackMenu from './GoBackMenu'
import { useStore } from '@/utils/Store'
import Navigation from './Navigation'

const sidebar = {
    open: (height = window.innerWidth) => ({
        clipPath: `circle(${height * 2 + 400}px at 100% 0px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 0px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function Menu() {

    const {
        play,
        // 
        ended, 
        loading,
        //  
        setCurrentMenu,
        // 
        currentMap,
        setCurrentMap,
    } = useStore()

    const [isOpen, toggleOpen] = useCycle(false, true);
    const debouncedIsOpen = useDebounce(isOpen, 300);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    
    // const [openedMap, setOpenedMap] = React.useState<number>()

    return (
        <motion.nav
            className='z-[200] overflow-hidden'
            // style={{ display: play ? (loading ? 'flex' : 'none') : 'flex' }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >

            <motion.div className="background-clip absolute top-0 bottom-0 right-0 w-screen bg-birusa-blue z-[200]" variants={sidebar} />
            <Navigation isOpen={debouncedIsOpen} />
            <Icons />
            <MenuToggle
                isOpen={isOpen}
                toggle={() => {
                    toggleOpen()
                    setCurrentMenu(undefined)
                    setCurrentMap(undefined)
                }}
                animate={ended ? 'show' : (play ? (loading ? 'show' : 'hide') : 'show')}
            />

            <GoBackMenu
                isMenuOpen={isOpen}
                onClick={() => {
                    if (currentMap !== undefined) {
                        setCurrentMap(undefined)
                    } else {
                        setCurrentMap(undefined)
                        setCurrentMenu(undefined)
                    }
                }}
                zIndex={'300'}
            />

            <MapMain isMenuOpen={isOpen} toggleOpen={toggleOpen} />

            <About isMenuOpen={isOpen} />

            <Partners isMenuOpen={isOpen} />
        </motion.nav>
    )
}
