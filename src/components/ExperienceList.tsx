import Link from 'next/link'
import {AiOutlinePlus, AiOutlineMinus, AiOutlineHome} from 'react-icons/ai'
import {AiOutlineLink } from 'react-icons/ai'




const ExperienceList = (props:any) => {
    

    const {id,role,company,year,description,skills,link,location,isOpen,onToggle} =  props

    
  return (
    <>
    <section>
    <li data-aos="fade-up">
                <div className='border-2  rounded-md py-2 px-4 w-[320px] xl:min-w-[1200px]'  data-aos="fade-up">
                    <div 
                    className={`flex items-center justify-between  `}
                    onClick={() => onToggle(id)}>
                <h1 className='py-4 capitalize text-[14px] font-mono font-[900]'>{role}</h1>
                <div className='flex items-center space-x-4'>
                <h2 className='capitalize text-[14px] font-mono font-[900]'>{year}</h2>
                 { isOpen ? (<AiOutlineMinus size={20} className='text-[#fcd731] transition delay-700 ease-out' /> ): (<AiOutlinePlus size={20} className='text-[#fcd731] transition delay-700 ease-out' />)}
                </div>
                    </div>
                {isOpen && (
                    <div className={`border-t-2 space-y-2 flex flex-col py-4`} data-aos="zoom-in ">
                        <h1>{company}</h1>
                        {/* <div className='flex justify-start items-center space-x-4'> */}
                        <div className='flex items-center space-x-4'>
                            <AiOutlineHome />
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <AiOutlineLink />
                            <Link
                            href={link}>{link}</Link>
                        </div>
                        {/* </div> */}
                        <h1>{description}</h1>
                        <ul>
                       {skills.map((item:any) => 
                       <li key={item.title}>
                           <p className='flex items-center space-x-6'>{item.title}</p>
                       </li>
                       )}   
                        </ul>
                       
                    </div>
                )}
                </div>
                </li>
    </section>
    </>
  )
}

export default ExperienceList