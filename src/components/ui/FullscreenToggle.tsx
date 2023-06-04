import { motion } from 'framer-motion'
import React from 'react'
import { FullScreenHandle } from 'react-full-screen'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'

type Props = {
  play: boolean,
  loading: boolean,
  ended: boolean,
  fullscreen: boolean,
  handleFullScreen: FullScreenHandle
}

const animation = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: "-200%",
    transition: {
      y: { delay: 0.04 }
    }
  },
}

export default function FullscreenToggle({ play, loading, ended, fullscreen, handleFullScreen }: Props) {
  return (
    <motion.div className="
            absolute       
            top-0 
            right-0 
            flex
            justify-center
            lg:w-[60px] 
            lg:h-[60px]
            w-[38px] 
            h-[38px]
            lg:mt-[110px] 
            mt-[65px] 
            mr-[3%]
            z-[201]
        "
      variants={animation}
      animate={ended ? 'show' : (play ? (loading ? 'show' : 'hide') : 'show')}
    >
      <motion.button
        className='
                toggle-screen-button
                w-fit 
                h-fit 
                text-xl 
                text-birusa-blue 
                cursor-pointer
                bg-white 
                shadow-[0_0_6px_rgba(0,79,117,1)]
                rounded-xl 
                px-[6px]
                pl-[6.5px]
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
        onClick={fullscreen ? handleFullScreen.exit : handleFullScreen.enter}
      >
        {fullscreen ? <BiExitFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' /> : <BiFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' />}
      </motion.button>
    </motion.div>
  )
}
