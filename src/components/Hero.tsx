import Link from 'next/link'
import {AiFillLinkedin,AiFillTwitterSquare,AiFillGithub} from 'react-icons/ai'

import Image from 'next/image'
import avatar from '../../public/images/avatar-removebg.png'

import style from '../styles/global.module.css'
const Hero = () => {
  return (
    <div className='h-screen relative lg:top-[5rem] top-[6rem]'>
        <div className='lg:flex items-center justify-between'>
        <div className='flex flex-col flex-1 absolute z-20'>
        <h1 className={`text-[#fcd731] font-mono font-[900] text-4xl lg:text-6xl mb-5`}>Hello, I am <span>Victor,</span></h1>
        <h1 className='text-4xl lg:text-6xl font-semibold mb-5'>Frontend Developer</h1>
        <ul className='flex lg:justify-start justify-center gap-[30px]'>
          <Link 
          href='https://linkedin.com/in/victor-oricha'
          >
            <AiFillLinkedin
            size={30} 
            className='text-[#fcd731]'/>
          </Link>
          <Link
          href='https://github.com/Vikkycode'>
            <AiFillGithub
             size={30} 
             className='text-[#fcd731]'/>
          </Link>
          <Link
          href='https://twitter.com/oricha_victor'>
            <AiFillTwitterSquare
             size={30} 
             className='text-[#fcd731]'/>
          </Link>
        </ul>
        </div>
        <div className='h-[300px] w-[300px]  bg-[#0d0d26] rounded-full  border-x-cyan-500 border-y-red-500 lg:invisible'></div>
        <div className='lg:h-[400px] lg:w-[400px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 right-[90px] relative
        '>
            <div className="h-[395px] w-[395px] rounded-full absolute z-10 left-[2px] top-[3px] bg-[#0d0d26] lg:block hidden"></div>
            <div className={`${style.gradientCircle} h-[100px] w-[100px] left-[350px] top-[150px] absolute z-10`}></div>
            <div className={`${style.gradientCircle} h-[200px] w-[200px] left-[170px] lg:left-[230px] -top-[3rem] lg:top-[20px]`}>
          <Image src={avatar} 
          className='rounded-full absolute z-20 object-cover top-[1px] left-[1px]'
          height={197}
          width={197}
          alt="Picture of the Victor" 
          />          
            </div>
        </div>
        </div>
    </div>
  )
}


export default Hero