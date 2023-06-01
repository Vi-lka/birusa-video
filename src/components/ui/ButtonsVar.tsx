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

    const setPersonColor = (current: number) => {
        switch (current) {
            case 0:
                return '#f41e6b'
            case 1:
                return '#4a017d'
            case 2:
                return '#80c41c'
        
            default:
                break;
        }
    }

    const setPersonShadow = (current: number) => {
        switch (current) {
            case 0:
                return '0 0 8px #f41e6b'
            case 1:
                return '0 0 8px #4a017d'
            case 2:
                return '0 0 8px #80c41c'
        
            default:
                break;
        }
    }
    
  return (
    <div className="buttons-var absolute lg:bottom-[15vh] md:bottom-[15vh] sm:bottom-[12vh] bottom-[4vh] left-0 flex w-full justify-evenly">
    {
        buttons.map((value, index) =>
            <motion.button
                key={index}
                className='
                    font-MNWide 
                    font-[400] 
                    2xl:text-2xl 
                    xl:text-xl
                    lg:text-lg
                    text-sm
                    bg-white
                    text-birusa-blue 
                    shadow-[0_0_8px_rgba(0,79,117,1)]
                    xl:px-10
                    xl:py-5
                    lg:px-8
                    lg:py-3
                    md:px-5 
                    md:py-2 
                    px-4
                    py-2
                    rounded-full 
                    z-50
                '
                style={{display: ended ? 'block' : 'none'}}
                animate={ended ? "open" : "closed"}
                variants={variants}
                whileHover={{
                    color: "white",
                    backgroundColor: currentVideo === 0 ? setPersonColor(index) : '#00aedd',
                    boxShadow: currentVideo === 0 ? setPersonShadow(index) : '0 0 10px #00aedd',
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
