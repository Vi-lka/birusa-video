import { globalAutoplay } from '@/utils/content'
import React from 'react'

type Props = {
    setPlay: React.Dispatch<React.SetStateAction<boolean>>,
    setPlayStart: React.Dispatch<React.SetStateAction<boolean>>,
    playStart: boolean,
}

export default function StartScreen({setPlay, setPlayStart, playStart}: Props) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-zinc-800 justify-center items-center z-[100]" style={{display: playStart ? 'none' : 'flex'}}>
        <button 
            className='w-fit h-fit text-3xl bg-teal-300 text-zinc-800 px-10 py-3 rounded-full'                     
            onClick={() => {
                setPlay(true)
                setPlayStart(true)
                globalAutoplay.click = true
                document.body.requestFullscreen()
            }}
        >
           Start
        </button>
    </div>
  )
}
