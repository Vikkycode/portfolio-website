import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import image from '../../public/images/victor.png'
import Link from 'next/link'


const Button = dynamic(() => import('@/components/Button'))

const About = () => {
  return (
    <section 
    id='about' 
    className='w-full h-full xl:h-screen'>
        <h1 className={`text-[#fcd731] text-4xl py-0 xl:py-20 text-center font-mono font-[900]`}
         data-aos="fade-up">About Me</h1>
        <div className='flex lg:flex-row  flex-col justify-between items-center flex-1 items-top '>
        <div className=''
         data-aos="fade-up">
            <Image
            src={image}
            alt='picture'
            height={200}
            width={300}
            className='rounded-md bg-[#fcd731]'
            priority
            />
        </div>
        <div className='max-w-xl xl:ml-5 lg:ml-28'
         data-aos="fade-up">
            <h1 className='pt-6 xl:pt-0 font-semibold text-center text-start text-[#fcd731] font-mono font-[900] text-2xl'>Hello there</h1>
            <div className='flex flex-col space-y-5'>
            <p className='text-white font-mono font-[900] text-start text-[16px]'>I am Victor Oricha, an accessible frontend software engineer breaking barriers in the digital realm. Despite being deaf, my commitment to excellence resonates in every line of code</p>
            <p className='text-white font-mono text-start font-[900] text-[14px]'>I am a passionate digital inclusion advocate with a unique perspective, navigating the coding landscape with a vision for inclusivity and accessibility. {" "} <Link 
            href={'/about'} 
            aria-label='about me' 
            className='text-[#fcd731]'>Read more</Link></p>

            <Button 
            btn="Download CV"
            className="focus-visible:outline-2  border-2 border-[#fcd731] transition delay-100 bg-[#fcd731] text-[#0d0d26]  font-mono font-[900] text-xl py-3 px-5  rounded-md  hover:text-[#fcd731] hover:bg-transparent hover:bg-yellow-200"
          />
            </div>
        </div>
        </div>
    </section>
  )
}

export default About