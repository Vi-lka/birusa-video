import { useStore } from '@/utils/Store';
import { motion } from 'framer-motion'
import React from 'react'
import useSound from 'use-sound';

const variantsUl = {
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    hide: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variantsLi = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hide: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const personIds = [0, 1, 2]
const persons = ["Поля", "Ян", "Ника"]
const colors = ["#80c41c", "#4a017d", "#f41e6b"];

export default function MapMainNavigation() {

    const { currentMap, setCurrentMap } = useStore()

    console.log(currentMap)

    const anyWindow = window as any

    const [playClick] = useSound(
      '../audio/click-main.mp3',
      { volume: 0.9, interrupt: true, playbackRate: 3 }
    )

  return (
    <motion.ul
      className="
        absolute 
        flex
        flex-col 
        justify-evenly
        w-screen 
        left-0 
        top-[10%]
        sm:top-[6vh]
        md:top-[25vh] 
        sm:h-[85vh]
        h-[80vh] 
        md:h-[65vh]
        md:justify-evenly 
        z-[230]
      "
      style={{ display: (currentMap === undefined) ? 'flex' : 'none' }}
      variants={variantsUl}
    >
      {personIds.map(i => (
        <motion.li
          key={i}
          className="
              m-0 
              list-none 
              flex 
              items-center 
              justify-center 
              p-0 
              sm:py-0
              lg:py-3
              py-3 
              cursor-pointer
              z-[230]
            "
          variants={variantsLi}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.15 },
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => {
            setCurrentMap(i)
            playClick()
            // if (i === 0) {
            //   anyWindow.ym(93903526,'reachGoal','polya_map_open')
            // } else if (i === 1) {
            //   anyWindow.ym(93903526,'reachGoal','yan_map_open')
            // } else if (i === 2) {
            //   anyWindow.ym(93903526,'reachGoal','nika_map_open')
            // }
          }}
        >
          <div className="w-fit">
            <p
              className="
                  font-MNWide 
                  font-extrabold 
                  uppercase
                  2xl:text-5xl 
                  xl:text-4xl 
                  lg:text-3xl 
                  sm:text-[16px]
                  text-xl
                  cursor-pointer
                "
                style={{ color: colors[i] }}
            >
              {persons[i]}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
