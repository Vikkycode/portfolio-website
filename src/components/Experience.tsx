'use client'
import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import {experiences } from '@/context/data'

const ExperienceList = dynamic(() => import('@/components/ExperienceList'),{
    ssr:false,
})


function Experience() {
    const [openAccordionId, setOpenAccordionId] = useState(null)

    const toggleAccordion = (itemId: any) => {
        setOpenAccordionId((prev) => prev === itemId ? null : itemId)
    }
    return (
        <>
            <section id='experience' className='min-h-full w-full'>
                <div className='flex flex-col justify-between  items-center'>
                    <div data-aos="fade-up">
                        <h1 className={`text-[#fcd731] text-4xl pt-10 text-center font-mono font-[900]`}>Experiences</h1>
                        <h2 className='text-[#fcd731] text-2xl py-10 max-w-xs xl:max-w-lg text-center font-mono font-[900]'>Here is a quick summary ofg my few experiences:</h2>
                    </div>
                    <div className=''>
                        <ul className='space-y-4'>
                            {experiences.map((experience) => (
                                <ExperienceList
                                    key={experience.id}
                                    id={experience.id}
                                    role={experience.role}
                                    company={experience.company}
                                    description={experience.description}
                                    year={experience.year}
                                    link={experience.link}
                                    location={experience.location}
                                    skills={experience.skills}
                                    isOpen={experience.id === openAccordionId}
                                    onToggle={toggleAccordion} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience