import React from 'react'
import style from '../styles/global.module.css'
import Image from 'next/image'
import image from '../../public/images/avatar.jpg'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full lg:h-screen'>
        <h1 className={`text-[#fcd731] text-4xl py-20 text-center font-mono font-[900]`}>About Me</h1>
        <div className='flex lg:flex-row  flex-col justify-center items-center flex-1 items-top '>
        <div className=''>
            <Image
            src={image}
            alt='picture'
            height={200}
            width={300}
            className='rounded-md'/>
        </div>
        <div className='max-w-lg ml-5 lg:ml-28'>
            <h1 className='4xl  font-semibold pt-10 text-[#fcd731] font-mono font-[900] text-2xl'>Hello there</h1>
            <p className="font-[400] leading-[32px] tracking-[5%] text-[16px] text-[#fcd731]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa id dolor at corrupti, iusto sed ipsa accusantium quis, molestias itaque modi cumque, voluptas deserunt quos? Quos qui assumenda sunt.</p>
            
            <div className="border border-gray-400 mb-10 lg:mb-28"></div>
            {/* <div className='gap-y-[10px] gap-x-[20px] flex items-center  lg:-mt-10 mt-10'>
                <Link 
                href=""
                className={`${style.gradientBtn}`}>Download CV</Link>
                <Link 
                href=""
                className={`${style.gradientText} border py-2 px-6 rounded-full`}>Hire Me</Link>
                </div> */}
        </div>
        </div>
    </div>
  )
}

export default About