'use client'

import { globalAutoplay } from '@/utils/content'
import { motion, useCycle } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { FullScreenHandle } from 'react-full-screen'
import Image from 'next/image';
import { useDimensions } from '@/utils/use-dimensions'
import { Navigation } from './menu/Navigation'
import { MenuToggle } from './menu/MenuToggle'
import useDebounce from '@/utils/use-demounce'

type Props = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>,
  play: boolean,
  setPlayStart: React.Dispatch<React.SetStateAction<boolean>>,
  playStart: boolean,
  handleFullScreen: FullScreenHandle,
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

export default function StartScreen({ setPlay, play, setPlayStart, playStart, handleFullScreen }: Props) {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const debouncedIsOpen = useDebounce(isOpen, 300);

  return (
    <>
      <div className='absolute top-0 left-0 w-fit h-fit mt-10 ml-[3%] z-[101]' style={{ display: play ? 'none' : 'flex' }}>
        <h1 className='w-fit h-fit font-MNWide font-extrabold uppercase text-xl bg-birusa-blue text-white px-7 py-4 rounded-full'>
          Название/Лого
        </h1>
      </div>

      <div className="absolute top-0 left-0 w-screen h-screen bg-white flex-col justify-center items-center z-[100]" style={{ display: playStart ? 'none' : 'flex' }}>
        <motion.p
          className='w-[45vw] h-fit font-MNWide font-extrabold uppercase text-3xl text-center bg-white text-birusa-blue p-5 self-end mb-[10vh] mr-10 rounded-full border-none scale-100 border-birusa-blue z-50'
        >
          {"Тут что-нибудь написано (короткое описание)"}
        </motion.p>

        <motion.button
          className='w-fit h-fit font-MNWide font-extrabold uppercase text-5xl bg-white text-birusa-blue px-10 py-7 mb-[25vh] rounded-full border-4 scale-100 border-birusa-blue z-50'
          whileHover={{
            color: 'rgb(255 255 255)',
            backgroundColor: 'rgb(0 131 173)',
            boxShadow: '0 0 8px rgba(0 79 117)',
            paddingLeft: '50px',
            paddingRight: '50px',
            transition: { duration: 0.15 },
          }}
          onClick={() => {
            setPlay(true)
            setPlayStart(true)
            globalAutoplay.click = true
            handleFullScreen.enter
          }}
          onClickCapture={handleFullScreen.enter}
        >
          Начать
        </motion.button>

        <Image
          className='object-cover z-[49]'
          fill={true}
          src={'../imgs/background.svg'}
          priority={true}
          alt="Бирюса TIM"
        />
        <div className='absolute top-0 left-0 w-screen h-screen z-[40] main-image-bg' />
      </div>

      <motion.nav
        className=' z-[100]'
        style={{ display: play ? 'none' : 'flex' }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >

        <motion.div className="background-clip absolute top-0 bottom-0 right-0 w-screen bg-birusa-blue" variants={sidebar} />
        <Navigation isOpen={debouncedIsOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  )
}
