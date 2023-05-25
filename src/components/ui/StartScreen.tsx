import { globalAutoplay } from '@/utils/content'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { FullScreenHandle } from 'react-full-screen'

type Props = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>,
  setPlayStart: React.Dispatch<React.SetStateAction<boolean>>,
  playStart: boolean,
  handleFullScreen: FullScreenHandle,
}

export default function StartScreen({ setPlay, setPlayStart, playStart, handleFullScreen }: Props) {

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white justify-center items-center z-[100]" style={{ display: playStart ? 'none' : 'flex' }}>
      <motion.button
        className='w-fit h-fit font-MNWide font-extrabold uppercase text-5xl bg-birusa-blue text-white px-10 py-7 rounded-full border-2 border-birusa-blue'
        whileHover={{
          color: 'rgb(0 131 173)',
          backgroundColor: 'rgb(255 255 255)',
          boxShadow: '0 0 10px rgba(0 131 173)',
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
    </div>
  )
}
