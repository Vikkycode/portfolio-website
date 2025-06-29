import React from 'react'
import dynamic from 'next/dynamic'
import { aboutMeData,communicationSkills } from '@/context/data'

const AboutList = dynamic(() => import('@/components/AboutList'),{
  ssr:false,
})


const page = () => {
  return (
    <div className=" flex flex-col max-w-[1200px] py-10 xl:py-20 mx-auto px-6">
    <div className='h-full w-full ' data-aos="fade-up">
        <h1 className={`text-[#fcd731] text-4xl py-10 xl:py-20 text-center font-mono font-[900]`}>About Me</h1>
        <div className='xl:flex lg:flex-row  flex-col justify-between items-center flex-1 items-top '
        data-aos="fade-up">
        {/* <div className=''>
        
            <Image
            src={image}
            alt='picture'
            height={200}
            width={300}
            className='rounded-md bg-[#fcd731]'
            loading='lazy'
            />
        </div>  */}
        <div data-aos="fade-up">
        {aboutMeData?.map((about)=>(
              <AboutList 
              key={about.headline}
              headline={about.headline}
              subheadline={about.subheadline}
              />
        ))}
        </div>
        </div>
        <ol className='space-y-10 mt-10' data-aos="fade-up">
            <h1 className='text-[#fcd731] text-2xl capitalize font-mono font-[900] text-center xl:text-start'>Communication Skills</h1>
            {communicationSkills.map((item)=>(
                <li 
                key={item.id}
                >
              <span className='text-[#fcd731] text-[16px] text-start capitalize font-mono font-[900]'>{item.title}</span> : <span className='text-white text-[16px] font-mono text-start font-[900]'>{item.subtitle}</span></li>
            ))}
        </ol>
    </div>
    </div>
  )
}

export default page