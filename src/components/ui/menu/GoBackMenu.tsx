import { motion } from 'framer-motion'
import React from 'react'
import { FullScreenHandle } from 'react-full-screen'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

type Props = {
    isMenuOpen: boolean,
    currentMenu: number | undefined,
    setCurrentMenu: React.Dispatch<React.SetStateAction<number | undefined>>
}

const animation = {
    show: {
        opacity: 1,
        x: 0,
    },
    hide: {
        opacity: 0,
        x: "200%",
        transition: {
            x: { delay: 0.04 }
        }
    },
}

export default function GoBackMenu({ isMenuOpen, currentMenu, setCurrentMenu }: Props) {
    return (
        <motion.div className="
            absolute       
            top-0 
            right-0 
            justify-center
            lg:w-[60px] 
            lg:h-[60px]
            w-[38px] 
            h-[38px]
            lg:mt-[184px] 
            mt-[115px] 
            mr-[3%]
            z-[220]
        "
            variants={animation}
            style={{display: (isMenuOpen && (currentMenu !== undefined) ? 'flex' : 'none')}}
            animate={(isMenuOpen && (currentMenu !== undefined) ? 'show' : 'hide')}
        >
            <motion.button
                className='
                go-back-menu-button
                w-fit 
                h-fit 
                text-xl 
                text-birusa-blue 
                cursor-pointer
                bg-white 
                shadow-[0_0_6px_rgba(0,79,117,1)]
                rounded-xl 
                px-[6px]
                pr-[7px]
                py-[6px]
                lg:px-3
                lg:py-2
                outline-none 
                border-none 
                z-[200]
            '
                whileHover={window.innerWidth > 1024 ? {
                    backgroundColor: 'rgb(0 131 173)',
                    boxShadow: '0 0 8px rgba(0 79 117)',
                    transition: { duration: 0.15 },
                } : {
                    boxShadow: '0 0 8px rgba(0 79 117)',
                    transition: { duration: 0.15 },
                }}
                onClick={() => setCurrentMenu(undefined)}
            >
                <MdOutlineArrowBackIosNew className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' />
            </motion.button>
        </motion.div>
    )
}
