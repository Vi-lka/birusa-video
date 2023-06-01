import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2];

export const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <motion.ul
    className="
      absolute 
      flex-col 
      justify-evenly
      w-screen 
      left-0 
      top-[25vh] 
      h-[65vh] 
      md:justify-evenly 
      z-[200]
    "
    style={{ display: isOpen ? 'flex' : 'none' }}
    variants={variants}
  >
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);