import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const PortfolioCard = (props:any) => {
  return (
    <div className='w-[315px] pb-4 bg-[#0d0d26] rounded-md border-2 border-[#fcd731] border-[#ccc]'>
        <Image
         src={props.image}
         alt='hello'
         height={500}
         width={315}
        loading='lazy'
         />
         <div className='p-2 flex items-center justify-center flex-col px-6'>
            <h1 className='font-500 leading-[32px] tracking-[-2%] text-xl'>{props.title}</h1>
            <p className='font-300 leading-[32px] tracking-[-2%] text-left text-[14px]'>{props.overview}</p>
         </div>
         <div className='flex  justify-around items-end bottom-0 left-0 pt-6 '>
         
         <div className='flex items-center space-x-2'>
          <AiOutlineLink 
          size={20}
          className='text-[#fcd731]'/>
          <Link 
          href={`${props.demolink}`}
          className=' text-[#fcd731]'>
          Live Preview
          </Link>
         </div>
         <div className='flex items-center space-x-2'>
          <AiFillGithub 
          size={20}
          className='text-[#fcd731]'/>
          <Link href={`${props.githlink}`}
          className='text-[#fcd731]'>View code</Link>
         </div>
         </div>
    </div>
  )
}

export default PortfolioCard