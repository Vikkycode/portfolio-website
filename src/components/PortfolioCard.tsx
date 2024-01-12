import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCard = (props:any) => {
  return (
    <div className='w-[350px] pb-4 bg-[#0d0d26] rounded-md border-2 border-[#fcd731] border-[#ccc]'>
        <Image
         src={props.image}
         alt='hello'
         height={500}
         width={350}
         />
         <div className='p-2 flex items-center justify-center flex-col'>
            <h1 className='font-500 leading-[32px] tracking-[-2%] text-xl'>{props.title}</h1>
            <p className='font-300 leading-[32px] tracking-[-2%] text-left text-[12px]'>{props.overview}</p>
         </div>
         <div className='flex  justify-around items-end bottom-0 left-0 pt-20 '>
         
          <Link 
          href={`${props.demolink}`}
          className='border-none text-[#0d0d26] py-2 px-3 rounded-full bg-[#fcd731] hover:bg-yellow-200'>
          Live Demo
          </Link>
        
          <Link href={`${props.githlink}`}
          className='border-none text-[#0d0d26] py-2 px-3 rounded-full bg-[#fcd731]'>Github code</Link>
         </div>
    </div>
  )
}

export default PortfolioCard