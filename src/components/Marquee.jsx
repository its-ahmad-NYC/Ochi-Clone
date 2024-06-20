import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className="w-full overflow-hidden py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl ">
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className="text-[15vw] pr-10 leading-none font-[Roboto] font-semibold uppercase  ">
                We are ochi
                </motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}}  className="text-[15vw] pr-10 leading-none font-[Roboto] font-semibold uppercase ">
                We are ochi
                </motion.h1>
        </div>
    </div>
  )
}

export default Marquee