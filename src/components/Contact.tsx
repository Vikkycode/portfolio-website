'use client'
import React,{useRef, useState} from 'react'
import dynamic from 'next/dynamic'
import {AiOutlineMail, AiOutlineMobile, AiOutlineHome, AiFillLinkedin,AiFillTwitterSquare,AiFillGithub} from 'react-icons/ai'
import { Toaster,toast } from 'sonner'
import Link from 'next/link'
import emailjs from '@emailjs/browser';

const Button = dynamic(() => import('@/components/Button'))

// const serviceID = process.env.SERVICE_ID
// const templateID = process.env.TEMPLATE_ID
// const publicID = process.env.PUBLIC_ID


const Contact = () => {
  const [isSend, setIsend] = useState(false)

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e:any) => {
    e.preventDefault();

   await emailjs.sendForm('service_i9hhj8s', `template_df3edvj`, form.current!, `fZX99hTE3YePllAvG`)
      .then((result) => {
          console.log(result.text);
          setIsend(true)
          setTimeout(() =>{
            setIsend(false)
          },1000)
      }, (error) => {
          console.log(error.text);
      });
  };







  return (
    <section id='contact' className='w-full py-4 h-full xl:h-screen xl:mt-96'>
        <div>
            <h1 className={`text-[#fcd731] text-4xl py-10 xl:py-20 text-center font-mono font-[900]`}>Contact</h1>
        </div>
        <div className='flex flex-1 justify-between items-start flex-col xl:flex-row'>
        <div className='flex flex-col space-y-10 xl:space-y-20 gap-5 lg:mt-5 my-10 order-last xl:order-first' 
        data-aos="fade-up">
                <div className='flex items-center space-x-4'>
                  <AiOutlineMail 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-[14px]'>victororicha10@gmail.com</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <AiOutlineMobile 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-[14px]'>+2347036708999</p>
                </div>
                {/* <div className='flex items-center space-x-4'>
                  <AiOutlineHome
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-[14px]
                  '>Zarmangda- Rayfield junction, Jos</p>
                </div> */}
                {/* <div className='flex items-center space-x-4'>
                  <AiOutlineMail 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-xl'>Signwithvictor@gmail.com</p>
                </div> */}
        <ul className='flex lg:justify-start justify-center gap-[30px]' 
        data-aos="fade-up">
          <li>
          <Link 
          href='https://linkedin.com/in/victor-oricha'
          aria-label='This is a linkedin icon that direct you to linkedin site' >
            <AiFillLinkedin
            size={30} 
            className='text-[#fcd731]'/>
          </Link>
          </li>
          <li>
          <Link
          href='https://github.com/Vikkycode'
          aria-label='This is a github icon that direct you to Github site'>
            <AiFillGithub
             size={30} 
             className='text-[#fcd731]'/>
          </Link>
          </li>
          <li>
          <Link
          href='https://twitter.com/oricha_victor'
          aria-label='This is a twitter icon that direct you to twitter'>
            <AiFillTwitterSquare
             size={30} 
             className='text-[#fcd731]'/>
          </Link>
          </li>
        </ul>

            </div>
            <form ref={form} onSubmit={sendEmail} 
            data-aos="fade-up">
                <div className='flex justify-center -mt-5 flex-col items-center order-first xl:order-last'>
                <div className='py-3 flex flex-col'
                data-aos="fade-up">
                    <label className='py-3 font-mono text-xl text-[#fcd731] font-mono font-[900]' htmlFor="">Full Name: </label>
                    <input 
                    type="text" 
                    className='h-[50px] w-[320px] xl:w-[500px] rounded-md border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black'
                    placeholder='Enter your full name...'
                    name="user_name"
                     />
                </div>
                <div className='py-3 flex flex-col'
                data-aos="fade-up">
                    <label className='py-3 text-[#fcd731] text-xl font-mono font-[900]' htmlFor=""> Email: </label>
                    <input 
                    type="email" 
                    className='h-[50px] w-[320px] xl:w-[500px] rounded-md border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black'
                    placeholder='Enter your email address...'
                    name="user_email"
                     />
                </div>
                <div className='py-3 flex flex-col'
                data-aos="fade-up">
                    <label className='py-3 text-[#fcd731] text-xl font-mono font-[900]' htmlFor="">Message: </label>
                    <textarea 
                    className='h-[200px] w-[320px] xl:w-[500px] rounded-md  border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black py-6 resize-none'
                    placeholder='Message'
                    name="message"
                     />
                </div>
                <div 
                data-aos="fade-up">
                <Toaster richColors position='top-right' />
                <Button 
                btn="Contact me"
                onClick={() => toast.success("Success")}
                className="focus-visible:outline-2  border-2 border-[#fcd731] transition delay-100 bg-transparent  font-mono font-[900] text-xl  text-[#fcd731] py-3 w-[320px] xl:w-[500px] rounded-md hover:text-[#0d0d26] hover:bg-[#fcd731] hover:bg-yellow-200"
                />
                </div>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact