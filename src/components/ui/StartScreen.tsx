'use client'

import { globals } from '@/utils/content'
import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import { FullScreenHandle } from 'react-full-screen'
import Image from 'next/image';
import Loading from './loading'
import ReactPlayer from 'react-player'
import { useStore } from '@/utils/Store'

export default function StartScreen({ handleFullScreen }: { handleFullScreen: FullScreenHandle }) {

  const { 
    setPlay,
    playFromStart,
    setPlayFromStart,
} = useStore()

  const [videoStart, setVideoStart] = React.useState<boolean>(false);

  console.log(videoStart)

  return (
    <>

      <div className="start-screen-cont-main absolute top-0 left-0 w-screen h-screen bg-white flex-col justify-center items-center z-[100]" style={{ display: playFromStart ? 'none' : 'flex' }}>
        <motion.p
          className='main-text h-fit font-MNExpanded font-extrabold uppercase text-center antialiased md:subpixel-antialiased text-white px-4 py-[14px] lg:px-7 lg:py-4 2xl:px-12 2xl:py-6 rounded-full z-50'
        >
          Место силы – Сибирь. Бирюса
          <br />
          <span className='font-MNWide font-normal normal-case'>
            Интерактивный фильм
          </span>
        </motion.p>

        <motion.button
          className='start-button w-fit h-fit font-MNWide font-extrabold uppercase text-5xl bg-white text-birusa-blue px-12 py-6 2xl:py-8 rounded-full shadow-[0_0_8px_rgba(0,79,117,1)] border-none z-50'
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
            setPlayFromStart(true)
            globals.click = true
            handleFullScreen.enter
          }}
          onClickCapture={handleFullScreen.enter}
        >
          Начать
        </motion.button>

        <Suspense fallback={<Loading />}>
          <Image
            className='object-cover z-[49]'
            fill={true}
            src={'../imgs/background.svg'}
            priority={true}
            alt="Бирюса TIM"
          />
        </Suspense>


        <Suspense fallback={<Loading />}>
          <Image
            className='object-cover z-[9]'
            style={{ display: videoStart ? 'none' : 'block' }}
            fill={true}
            src={'../imgs/bg-img-start.png'}
            priority={true}
            alt="Бирюса TIM"
          />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <ReactPlayer
            className="bg-video"
            width={'100%'}
            height={'100%'}
            playing={true}
            muted={true}
            url={"../video/bg-video-start-notloop.mp4"}
            controls={false}
            playsinline
            stopOnUnmount={true}
            loop={true}
            preload={'auto'}
            fallback={
              <Image
                className='object-cover z-[10]'
                fill={true}
                src={'../imgs/bg-img-start.png'}
                priority={true}
                alt="Бирюса TIM"
              />
            }
            onStart={() => {
              setVideoStart(true)
            }}
            // onProgress={(state) => {
            //   console.log("playedSeconds: " + state.playedSeconds)
            //   console.log("loadedSeconds: " + state.loadedSeconds)
            // }}
          />
        </Suspense>

        <div className="bg-color w-screen h-screen absolute top-0 left-0 z-[11]" />

        <div className="bg-color-black w-screen h-screen absolute top-0 left-0 z-[11]"/>
      </div>
    </>
  )
}
