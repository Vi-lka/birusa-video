import { useStore } from '@/utils/Store'
import { CONTENT, globals } from '@/utils/content'
import { setCookie } from 'cookies-next'
import { motion } from 'framer-motion'
import React from 'react'
import { isMobile } from 'react-device-detect'

const variants = {
    open: { 
        opacity: 1, 
        y: 0,
        transition: {
            y: { velocity: -700, delay: 0.5 }
        }
    },
    closed: { 
        opacity: 0, 
        y: "1000%",
    },
}

export default function ButtonsVar() {

    const { 
        currentPerson, 
        setCurrentPerson, 
        currentVideo,
        setCurrentVideo,
        ended, 
        setEnded, 
        setLoading 
    } = useStore()

    let buttons = [] as {
        name: string,
        indexUrl: number
    }[];

    CONTENT.forEach(element => {
        if (element.id === currentVideo) {
            buttons = element.buttons
        }
    })

    const addCookieProgress = (progress: number) => {
        setCookie('current-progress', progress.toString(), { maxAge: 60 * 60 * 72, secure: true, path: '/', sameSite: true });
    }

    const addCookiePerson = (person: number) => {
        setCookie('current-person', person.toString(), { maxAge: 60 * 60 * 72, secure: true, path: '/', sameSite: true });
    }

    function handleClick(index: number) {
        globals.click = true

        setEnded(false)
        setLoading(true)

        setCurrentVideo(index)
        addCookieProgress(index)

        if (currentVideo === 0) {
            setCurrentPerson(index)
            addCookiePerson(index)
        }
    }

    const personColor = (current: number) => {
        switch (current) {
            // Поля
            case 1: 
                return '#80c41c'
            // Ян
            case 2:
                return '#4a017d'
            // Ника
            case 3:
                return '#f41e6b'
        
            default:
                break;
        }
    }

    const personShadow = (current: number) => {
        switch (current) {
            // Поля
            case 1:
                return '0 0 8px #80c41c'
            // Ян
            case 2:
                return '0 0 8px #4a017d'
            // Ника
            case 3:
                return '0 0 8px #f41e6b'
        
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
                style={{
                    display: ended ? 'block' : 'none', 
                    color: isMobile ? '#ffffff' : 'rgb(0,131,173)',
                    backgroundColor: isMobile ? (currentVideo === 0 ? personColor(value.indexUrl) : (currentPerson ? personColor(currentPerson) : "#00aedd")) : "#ffffff",
                    boxShadow: isMobile ? (currentVideo === 0 ? personShadow(value.indexUrl) : (currentPerson ? personShadow(currentPerson) : "0 0 8px #00aedd")) : "0 0 8px rgb(0,79,117)",
                }}
                animate={ended ? "open" : "closed"}
                variants={variants}
                whileHover={{
                    color: "#ffffff",
                    backgroundColor: currentVideo === 0 ? personColor(value.indexUrl) : (currentPerson ? personColor(currentPerson) : "#00aedd"),
                    boxShadow: currentVideo === 0 ? personShadow(value.indexUrl) : (currentPerson ? personShadow(currentPerson) : "0 0 8px #00aedd"),
                    transition: { duration: 0.15 },
                }}
                onClick={() => {handleClick(value.indexUrl)}}
            >
                {value.name}
            </motion.button>
        )
    }
    </div>
  )
}
