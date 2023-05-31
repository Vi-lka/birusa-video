'use client'

import { globalAutoplay } from '@/utils/content'
import { motion, useCycle } from 'framer-motion'
import React, { Suspense, useEffect, useRef } from 'react'
import { FullScreenHandle } from 'react-full-screen'
import Image from 'next/image';
import { useDimensions } from '@/utils/use-dimensions'
import { Navigation } from './menu/Navigation'
import { MenuToggle } from './menu/MenuToggle'
import useDebounce from '@/utils/use-demounce'
import Loading from './loading'
import ReactPlayer from 'react-player'

type Props = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>,
  play: boolean,
  setPlayStart: React.Dispatch<React.SetStateAction<boolean>>,
  playStart: boolean,
  handleFullScreen: FullScreenHandle,
}

export default function StartScreen({ setPlay, play, setPlayStart, playStart, handleFullScreen }: Props) {

  return (
    <>

      <div className="start-screen-cont-main absolute top-0 left-0 w-screen h-screen bg-white flex-col justify-center items-center z-[100]" style={{ display: playStart ? 'none' : 'flex' }}>
        <motion.p
          className='main-text h-fit font-MNWide font-extrabold uppercase text-center bg-transparent text-birusa-blue-semilight p-1 self-end mb-[10vh] mr-10 rounded-full z-50'
        >
          {"БЛЯ, это надо передвинуть"}
        </motion.p>

        <motion.button
          className='start-button w-fit h-fit font-MNWide font-extrabold uppercase text-5xl bg-white text-birusa-blue px-12 py-6 2xl:py-8 mb-[20vh] rounded-full shadow-[0_0_8px_rgba(0,79,117,1)] border-none z-50'
          whileHover={{
            color: 'rgb(255 255 255)',
            backgroundColor: 'rgb(0 131 173)',
            boxShadow: '0 0 8px rgba(0 79 117)',
            paddingLeft: '70px',
            paddingRight: '70px',
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

        <Suspense fallback={<Loading />}>
          <ReactPlayer
            className="bg-video"
            width={'100%'}
            height={'100%'}
            playing={true}
            muted={true}
            url={"../video/bg-video.mp4"}
            controls={false}
            playsinline
            stopOnUnmount={true}
            loop={true}
            preload={'auto'}
            // onReady={() => {
            //     setLoading(false)
            // }}
            // onEnded={() => {
            //     setEnded(true)
            // }}
            onProgress={(state) => {
                console.log("playedSeconds: " + state.playedSeconds)
                console.log("loadedSeconds: " + state.loadedSeconds)
            }}
          />
        </Suspense>

        <div className="w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[11]" />
      </div>
    </>
  )
}
