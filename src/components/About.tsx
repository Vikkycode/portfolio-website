import React from 'react'
import style from '../styles/global.module.css'
import Image from 'next/image'
import image from '../../public/images/avatar.jpg'
import Link from 'next/link'

const About = () => {
  return (
    <div  className='w-full lg:h-screen pb-20'>
        <h1 className={`${style.gradientText} text-4xl text-center`}>About Me</h1>
        <div className='flex lg:flex-row flex-col justify-center items-center flex-1 items-top mt-20'>
        <div className=''>
            <Image
            src={image}
            alt='picture'
            height={200}
            width={300} />
        </div>
        <div className='max-w-lg ml-5 lg:ml-28'>
            <h1 className='4xl font-semibold pt-10'>Hello there</h1>
            <p className="font-[400] leading-[32px] tracking-[5%] text-[16px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa id dolor at corrupti, iusto sed ipsa accusantium quis, molestias itaque modi cumque, voluptas deserunt quos? Quos qui assumenda sunt.</p>
            <div className='grid grid-cols-1 grid-cols-2 grid-rows-3 gap-5 lg:mt-5 my-10'>
                <div>
                    <label htmlFor=""
                     className={`${style.gradientText} font-[400] leading-[32px] tracking-[5%] text-[16px]`}>Full Name</label>
                    <p>Victor Oricha</p>
                </div>
                <div>
                    <label htmlFor=""
                     className={`${style.gradientText} font-[400] leading-[32px] tracking-[5%] text-[16px]`}>Email</label>
                    <p>Signwithvictor@gmail.com</p>
                </div>
                <div>
                    <label htmlFor=""
                    className={`${style.gradientText} font-[400] leading-[32px] tracking-[5%] text-[16px]`}>Mobile No</label>
                    <p>+2347036708999</p>
                </div>
                <div>
                    <label htmlFor=""
                     className={`${style.gradientText} font-[400] leading-[32px] tracking-[5%] text-[16px]`}>Linkedin</label>
                    <p>victor-oricha</p>
                </div>
            </div>
            <div className="border border-gray-400 mb-10 lg:mb-28"></div>
            <div className='gap-y-[10px] gap-x-[20px] flex items-center  lg:-mt-10 mt-10'>
                <Link 
                href=""
                className={`${style.gradientBtn}`}>Download CV</Link>
                <Link 
                href=""
                className={`${style.gradientText} border py-2 px-6 rounded-full`}>Hire Me</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default About