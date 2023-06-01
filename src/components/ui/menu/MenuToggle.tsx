import * as React from "react";
import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgb(0 131 173)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <motion.button
    className="
      toggle-menu-button
      flex 
      justify-center 
      items-center 
      outline-none 
      border-none 
      cursor-pointer 
      absolute 
      top-0 
      right-0 
      lg:w-[60px] 
      lg:h-[50px] 
      lg:pt-[5px]
      lg:pr-[10px] 
      lg:pl-[12px] 
      w-[38px] 
      h-[37px] 
      pt-[3px]
      pr-[7px] 
      pl-[8px] 
      lg:mt-10 
      mt-4 
      mr-[3%]
      bg-white 
      shadow-[0_0_6px_rgba(0,79,117,1)]
      rounded-xl 
      z-[200]
    "
    whileHover={window.innerWidth > 1024 ? {
      backgroundColor: 'rgb(0 131 173)',
      boxShadow: '0 0 8px rgba(0 79 117)',
      transition: { duration: 0.15 },
    } : {
      boxShadow: '0 0 8px rgba(0 79 117)',
      transition: { duration: 0.15 },
    }}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23" className="lg:scale-150 scale-100">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 19 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 19 16.346" }
        }}
      />
    </svg>
  </motion.button>
);
