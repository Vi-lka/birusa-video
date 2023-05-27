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

const titles = ["Карта", "Авторы", "Партнеры", "Че-нибудь)"];

export const MenuItem = ({ i } : { i: number }) => {

  return (
    <motion.li
        className="m-0 p-0 py-10 list-none flex items-center justify-center cursor-pointer"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
      <div className="w-fit">
        <Link href="/" className="font-MNWide font-extrabold uppercase text-5xl text-white">
            {titles[i]}
        </Link>
      </div>
    </motion.li>
  );
};
