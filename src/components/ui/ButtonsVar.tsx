'use client'

import { CONTENT, globalAutoplay } from '@/utils/content'
import { setCookie } from 'cookies-next'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    currentVideo: number | undefined | null,
    setCurrentVideo: React.Dispatch<React.SetStateAction<number | null | undefined>>,
    ended: boolean
    setEnded: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const variants = {
    open: { 
        opacity: 1, 
        y: 0,
    },
    closed: { 
        opacity: 0, 
        y: "100%",
    },
  }

export default function ButtonsVar({ currentVideo, setCurrentVideo, ended, setEnded, setLoading }: Props) {

    let buttons = [] as {
        name: string,
        url: string,
        indexUrl: number

    }[];

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            buttons = element.buttons
        }
    });

    const addCookie = (current: number) => {
        setCookie('current-progress', current.toString(), { maxAge: 60 * 60 * 72, secure: true, path: '/', sameSite: true });
    }
    
  return (
    <div className="buttons-var absolute bottom-[15vh] left-0 flex w-full justify-evenly">
    {
        buttons.map((value, index) =>
            <motion.button
                key={index}
                className='
                    font-MN 
                    font-extrabold 
                    2xl:text-3xl 
                    xl:text-2xl
                    lg:text-xl
                    md:text-lg
                    text-base
                    bg-birusa-blue 
                    text-white 
                    xl:px-10
                    xl:py-6
                    lg:px-8
                    lg:py-5
                    md:px-5 
                    md:py-2 
                    px-3
                    py-2
                    rounded-full 
                    z-50
                '
                style={{ display: ended ? 'block' : 'none' }}
                animate={ended ? "open" : "closed"}
                variants={variants}
                whileHover={{
                    backgroundColor: 'rgb(132 204 22)',
                    textShadow: '0 0 5px rgba(0 79 117)',
                    boxShadow: '0 0 10px rgba(132 204 22)',
                    transition: { duration: 0.15 },
                }}
                onClick={() => {
                    setEnded(false)
                    globalAutoplay.click = true
                    setCurrentVideo(value.indexUrl)
                    addCookie(value.indexUrl)
                    setLoading(true)
                }}
            >
                {value.name}
            </motion.button>
        )
    }
    </div>
  )
}
