import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen bg-zinc-100 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="marker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" w-[6vw] rounded-md h-[5vw] bg-red-500"
                  >
                    <img
                      className="rounded-md w-full h-full"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase leading-[6vw] text-zinc-950 tracking-tight font-semibold text-[7.5vw] font-['Roboto']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light text-black leading-none tracking-tight">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-900 text-black font-light text-md rounded-full uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-900 rounded-full">
            <span className="rotate-[45deg] text-black">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
