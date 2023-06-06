import { useStore } from '@/utils/Store'
import { addCookiePerson, addCookieProgress, globals } from '@/utils/content'
import { Cycle, motion } from 'framer-motion'
import React from 'react'
import PolyaFlow from './PolyaFlow'

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
    
    function handleClick(index: number, indexPer: number) {
        console.log(index)

        globals.click = true

        setEnded(false)
        setPlay(true)

        setCurrentMenu(undefined)
        setCurrentMap(undefined)

        toggleOpen()

        setCurrentVideo(index)
        addCookieProgress(index)

        setCurrentPerson(indexPer)
        addCookiePerson(indexPer)

        if (index === 0) {
            setPlayFromStart(true)
        } else {
            setLoading(true)
        }
    }

  return (
    <motion.div className='map-container w-screen h-screen z-[250]' style={{ display: currentMap === 0 ? 'block' : 'none' }}>
        <PolyaFlow handleClick={handleClick} />
    </motion.div>
  )
}
