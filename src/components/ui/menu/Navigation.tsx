import * as React from "react";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean,
  setCurrentMenu: React.Dispatch<React.SetStateAction<number | undefined>>
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const itemIds = [0, 1, 2];
const titles = ["Карта", "О Проекте", "Партнёры"];

export const Navigation = ({ isOpen, setCurrentMenu }: Props) => (
  <motion.ul
    className="
      absolute 
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
      z-[210]
    "
    style={{ display: isOpen ? 'flex' : 'none' }}
    variants={variants}
  >
    {itemIds.map(i => (
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
            z-[210]
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
          setCurrentMenu(i)
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
                text-white
                cursor-pointer
              "
          >
            {titles[i]}
          </p>
        </div>
      </motion.li>
    ))}
  </motion.ul>
);