import React from 'react'
import Image from 'next/image'
import img from '../asses/alvc-bg.png'
const PortfolioCard = () => {
  return (
    <div className='w-[350px] h-[450px] bg-[#0d0d26] rounded-[12px] border-2 border-[#ccc]'>
        <Image
         src={img}
         alt="hulu"
         height={440}
         width={350}
         className='rounded-t-[12px] border-none'
         />
         <div className='p-2 flex items-center justify-center flex-col'>
            <h1 className='font-500 leading-[32px] tracking-[-2%] text-xl'>Furniture store landing page</h1>
            <p className='font-300 leading-[32px] tracking-[-2%] text-left text-[12px]'>Responsive HTML CSS Javascript</p>
         </div>
    </div>
  )
}

export default PortfolioCard