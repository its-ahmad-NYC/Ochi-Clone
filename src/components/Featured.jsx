import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {
  const [Hover, Hoverd] = useState(false);
  const [Hover1, Hoverd1] = useState(false);


  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl tracking-tight font-['Roboto']">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => Hoverd1(true)}
            onMouseLeave={() => Hoverd1(false)}
            className="cardcontainer w-1/2 h-[80vh] relative"
          >
            <h1 className="absolute z-[9] flex overflow-hidden leading-none text-[#CDEA68] tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Roboto']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Hover1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => Hoverd(true)}
            onMouseLeave={() => Hoverd(false)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute z-[9] flex overflow-hidden leading-none text-[#CDEA68] tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Roboto']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Hover ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
