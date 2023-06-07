import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';

const variantsLogos = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100, delay: 0.5 }
      }
    },
    closed: {
      y: 200,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};

export default function Icons() {
  return (
    <motion.div 
      className=" 
        absolute 
        bottom-0 
        left-0 
        lg:mb-10 
        mb-4  
        mx-0
        w-[100%] 
        flex 
        justify-between 
        items-end
        z-[201]
      "
    variants={variantsLogos}
>
    <motion.div className="w-fit h-fit ml-[3%]">
        <a href="https://timbiryusa.ru/" target="_blank" className="w-fit h-fit z-[211]">
            <Image
                className="
                w-[150px]
                lg:w-[200px]
                xl:w-[250px]
                "
                width={150}
                height={150}
                src={'../imgs/birusa-logo.png'}
                priority={true}
                alt="Бирюса TIM"
            />
        </a>
    </motion.div>
    <motion.div className="w-fit h-fit mr-[3%] flex">
        <a href="https://vk.com/biryusa_tim" target="_blank" className="w-fit h-fit z-[211]">
            <Image
                className="
                w-[40px]
                lg:w-[55px]
                xl:w-[65px]
                mx-auto
                mr-2
                "
                width={50}
                height={50}
                src={'../imgs/vk-icon.svg'}
                priority={true}
                alt="Бирюса TIM"
            />
        </a>
        <a href="https://t.me/biryusa_tim" target="_blank" className="w-fit h-fit z-[211]">
            <Image
                className="
                w-[37px]
                lg:w-[50px]
                xl:w-[60px]
                mx-auto
                "
                width={50}
                height={50}
                src={'../imgs/telegram-icon.svg'}
                priority={true}
                alt="Бирюса TIM"
            />
        </a>
    </motion.div>
</motion.div>
  )
}
