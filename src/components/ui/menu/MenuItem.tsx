import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
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

const titles = ["Карта", "О Проекте", "Партнеры"];

export const MenuItem = ({ i }: { i: number }) => {

  return (
    <motion.li
      className="
        m-0 
        list-none 
        flex 
        items-center 
        justify-center 
        p-0 
        py-5 
        lg:py-10 
        md:py-8 
        cursor-pointer
        z-[200]
      "
      variants={variants}
      whileHover={{ 
        scale: 1.2,
        transition: { duration: 0.15 },
      }}
      whileTap={{ 
        scale: 0.9,
      }}
    >
      <div className="w-fit">
        <Link 
          href="/" 
          className="
            font-MNWide 
            font-extrabold 
            uppercase
            xl:text-5xl 
            lg:text-4xl 
            text-2xl
            text-white
          "
        >
          {titles[i]}
        </Link>
      </div>
    </motion.li>
  );
};
