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
    className={
      "flex justify-center items-center outline-none border-[3px] border-birusa-blue cursor-pointer absolute top-0 right-0 w-[60px] h-[50px] pt-[5px] pr-[10px] pl-[12px] bg-white rounded-xl bg-transparent "
      +
      (window.innerWidth > 1000 ? "mt-11 mr-[3%]" : "mt-11 mr-[3%]")
    }
    whileHover={{
      boxShadow: '0 0 8px rgba(0 79 117)',
      transition: { duration: 0.15 },
    }}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23" className="scale-150">
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
        transition={{ duration: 0.1 }}
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
