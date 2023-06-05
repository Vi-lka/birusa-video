import { motion, useCycle } from 'framer-motion'
import React, { useRef } from 'react'
import { Navigation } from './Navigation'
import Icons from './Icons'
import { MenuToggle } from './MenuToggle'
import useDebounce from '@/utils/use-demounce'
import { useDimensions } from '@/utils/use-dimensions'
import MapMain from './pagesComponents/MapMain'
import About from './pagesComponents/About'
import Partners from './pagesComponents/Partners'
import GoBackMenu from './GoBackMenu'

type Props = {
    play: boolean,
    loading: boolean,
    ended: boolean,
}

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

export default function Menu({ play, loading, ended }: Props) {

    const [currentMenu, setCurrentMenu] = React.useState<number>()

    const [isOpen, toggleOpen] = useCycle(false, true);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const debouncedIsOpen = useDebounce(isOpen, 300);

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
            <Navigation isOpen={debouncedIsOpen} setCurrentMenu={setCurrentMenu} />
            <Icons />
            <MenuToggle
                isOpen={isOpen}
                toggle={() => {
                    toggleOpen()
                    setCurrentMenu(undefined)
                }}
                animate={ended ? 'show' : (play ? (loading ? 'show' : 'hide') : 'show')}
            />

            <GoBackMenu
                isMenuOpen={isOpen}
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
            />

            <MapMain
                isMenuOpen={isOpen}
                isMapOpen={currentMenu === 0}
                setCurrentMenu={setCurrentMenu}
            />

            <About
                isMenuOpen={isOpen}
                isAboutOpen={currentMenu === 1}
            />

            <Partners
                isMenuOpen={isOpen}
                isPartnersOpen={currentMenu === 2}
            />
        </motion.nav>
    )
}
