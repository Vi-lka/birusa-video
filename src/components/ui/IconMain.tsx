import { useStore } from '@/utils/Store'
import { addCookiePerson, addCookieProgress, globals } from '@/utils/content'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            y: { delay: 0.04 }
        }
    },
    hide: { 
        opacity: 0, 
        y: "-200%",
    },
}

export default function IconMain({ toggle } : { toggle: () => void }) {

    const {
        play,
        setPlay,
        playFromStart,
        setPlayFromStart,
        // 
        currentVideo,
        setCurrentVideo,
        setCurrentPerson,
        //
        ended, 
        setEnded,
        loading, 
        setLoading
    } = useStore()

    function handleClick(index: number, indexPer: number) {

        globals.click = true

        setEnded(false)
        setPlay(false)

        setCurrentVideo(index)
        addCookieProgress(index)

        setCurrentPerson(indexPer)
        addCookiePerson(indexPer)

        if ((index === currentVideo) || (index === 0)) {
            setPlayFromStart(false)
        } else {
            setLoading(true)
        }
    }

  return (
    <motion.div 
        className="
            absolute 
            top-0 
            left-0 
            w-fit 
            h-fit 
            lg:mt-10 
            mt-4  
            ml-[3%] 
            z-[300]
        " 
        style={{ display: (playFromStart || currentVideo! > 0) ? 'flex' : 'none' }}
        animate={ended ? (((currentVideo === 15) || (currentVideo === 26) || (currentVideo === 36)) ? 'hide' : 'show') : (play ? (loading ? 'show' : 'hide') : 'show')}
        variants={variants}
    >
        <div 
            className='main-title w-fit h-fit font-MNExpanded font-[800] antialiased md:subpixel-antialiased text-center uppercase text-white bg-birusa-blue-semilight px-4 py-[14px] lg:px-7 lg:py-4 rounded-full cursor-pointer'
            onClick={toggle}
            onClickCapture={() => {handleClick(0, 0)}}
        >
            Место силы – Сибирь. Бирюса
        </div>
    </motion.div>
  )
}
