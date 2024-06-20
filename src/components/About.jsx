import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" className="w-full p-20 bg-[#CDEA68] z-[10] relative rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[Roboto] text-[3vw] leading-[3.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className="w-full border-t-[1px] pt-10 flex gap-10 border-[#6b7a36] mt-20">
          <div className="w-1/2">
            <h1 className="text-6xl">Our approach:</h1>
            <button className="flex gap-8 uppercase items-center px-10 py-6 rounded-full mt-10 text-white bg-zinc-900">
              Read More
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
              </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl bg-green-200">
          <img className="w-full h-full bg-cover rounded-3xl " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
        </div>

    </div>
  )
}

export default About