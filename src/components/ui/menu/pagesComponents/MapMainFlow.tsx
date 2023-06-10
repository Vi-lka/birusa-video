import { useStore } from '@/utils/Store'
import { addCookiePerson, addCookieProgress, globals } from '@/utils/content'
import { Cycle, motion } from 'framer-motion'
import React from 'react'
import PolyaFlow from './PolyaFlow'
import YanFlow from './YanFlow'
import NikaFlow from './NikaFlow'
import handleMetrika from '@/utils/metrika'

export default function MapMainFlow({ toggleOpen }: { toggleOpen: Cycle }) {

    const {
        setPlay,
        setPlayFromStart,
        // 
        setCurrentPerson,
        currentVideo,
        setCurrentVideo,
        //
        setEnded,
        setLoading,
        // 
        setCurrentMenu,
        // 
        currentMap,
        setCurrentMap,
        setFinal
    } = useStore()

    function handleClick(index: number, indexPer: number) {

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

        if ((index === currentVideo) || (index === 0)) {
            setPlayFromStart(true)
        } else {
            setLoading(true)
        }

        handleMetrika(index)
        setFinal(false)
    }

    return (
        <>
            {
                currentMap === 0 ? 
                    <motion.div className='map-container w-screen h-screen z-[250]' style={{ display: currentMap === 0 ? 'block' : 'none' }}>
                        <PolyaFlow handleClick={handleClick} />
                    </motion.div>
                :
                    currentMap === 1 ? 
                        <motion.div className='map-container w-screen h-screen z-[250]' style={{ display: currentMap === 1 ? 'block' : 'none' }}>
                            <YanFlow handleClick={handleClick} />
                        </motion.div>
                    :
                        currentMap === 2 ? 
                            <motion.div className='map-container w-screen h-screen z-[250]' style={{ display: currentMap === 2 ? 'block' : 'none' }}>
                                <NikaFlow handleClick={handleClick} />
                            </motion.div>
                        :
                        null
            }

        </>
    )
}
