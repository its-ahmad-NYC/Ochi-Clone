import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-20 bg-zinc-100">
        <div className="cardcontainer h-[50vh] w-1/2 "> 
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute px-5 py-1 rounded-full border-2 border-[#CEEA67] left-10 bottom-10 text-[#CEEA67]">©2019–2022</button>
            </div>
        </div>    
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2 "> 
            <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute px-5 py-1 rounded-full border-2 left-10 uppercase bottom-10">Rating 5.0 on Clutch</button>
            </div>
            <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="absolute px-5 py-1 rounded-full border-2 left-10 uppercase bottom-10">Business Bootcamp Alumni</button>
            </div>
        </div>    
    </div>
  )
}

export default Cards