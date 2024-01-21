import React from 'react'
import { skills } from '@/context/data'
import Image from 'next/image'

function Skill() {
  return (
    <>
    <section id='skill' className='min-h-[50vh] min-w-max'>
        <div className='flex flex-col justify-between  items-center'>
        <div>
            <h1 className={`text-[#fcd731] text-4xl pt-10 text-center font-mono font-[900]`}>Skills</h1>
            <h2 className='text-[#fcd731] text-2xl py-10 max-w-xs xl:max-w-lg text-center font-mono font-[900]'>The skills, tools, and technologies I am really good at:</h2>
        </div>
        <ul className='grid grid-cols-2 grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-32 xl:gap-x-40 '>
        {skills.map((icon)=>(
            <li key={icon.name}
            className='flex flex-col'>
                <Image 
                src={icon.icon}
                height={50}
                width={50}
                alt={icon.name}/>
                <span className=' text-[#fcd731]  font-mono font-[900]'>{icon.name}</span>
            </li>
        ))}
        </ul>
        </div>
    </section>
    </>
  )
}

export default Skill