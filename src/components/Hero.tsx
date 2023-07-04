import React from 'react'

const Hero = () => {
  return (
    <div className=' top-32 absolute'>
        <div className='flex items-center justify-between'>
        <div className='flex flex-col flex-1 absolute z-10'>
        <h1 className='text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300'>Hello, I am <span>Victor</span></h1>
        <h1 className='text-5xl font-semibold mb-5'>Frontend Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit.Lorem ipsum dolor sit amet consectetur 
        adipisicing elit.
        </p>
        <button className='bg-red-800 p-2 w-28 rounded-full mt-10'>Click me</button>
        </div>
        <div className='h-[300px] w-[300px]  bg-[#0d0d26] rounded-full  border-x-cyan-500 border-y-red-500 invisible'></div>
        <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 '>
            <div className="h-[290px] w-[290px] rounded-full absolute z-10 left-[290px] bg-[#0d0d26]"></div>
        </div>
        </div>
    </div>
  )
}


export default Hero