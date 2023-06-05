import { useStore } from '@/utils/Store'
import { globals } from '@/utils/content'
import { setCookie } from 'cookies-next'
import { Cycle, motion } from 'framer-motion'
import React from 'react'

export default function MapMainFlow({ toggleOpen }: { toggleOpen: Cycle }) {

    const {
        play,
        setPlay,
        setPlayFromStart,
        // 
        currentPerson, 
        setCurrentPerson, 
        currentVideo,
        setCurrentVideo,
        //
        ended, 
        setEnded, 
        loading, 
        setLoading, 
        // 
        setCurrentMenu,
        // 
        currentMap, 
        setCurrentMap 
    } = useStore()

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

        setCurrentMenu(undefined)
        setCurrentMap(undefined)

        toggleOpen()

        setCurrentVideo(index)
        addCookieProgress(index)

        if (currentVideo === 0) {
            setCurrentPerson(index)
            addCookiePerson(index)
        }
    }

  return (
    <motion.div className='map-container w-screen h-screen z-[201]'>
        {currentMap}
    </motion.div>
  )
}
