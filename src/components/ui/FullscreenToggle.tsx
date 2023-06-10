import { useStore } from '@/utils/Store'
import { motion } from 'framer-motion'
import React from 'react'
import { FullScreenHandle } from 'react-full-screen'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'
import useSound from 'use-sound'

type Props = {
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

export default function FullscreenToggle({ fullscreen, handleFullScreen }: Props) {

  const {
    play,
    ended, 
    loading, 
  } = useStore()

  const [playOn] = useSound(
    '../audio/click-on.mp3',
    { volume: 0.9, interrupt: true, playbackRate: 3.5 }
  )
  const [playOff] = useSound(
    '../audio/click-off.mp3',
    { volume: 0.9, interrupt: true, playbackRate: 2.5 }
  )


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
            z-[300]
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
        onClick={() => {fullscreen ? playOff() : playOn()}}
        onClickCapture={fullscreen ? handleFullScreen.exit : handleFullScreen.enter}
      >
        {fullscreen ? <BiExitFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' /> : <BiFullscreen className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]' />}
      </motion.button>
    </motion.div>
  )
}
