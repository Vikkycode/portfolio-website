import React from 'react'
import style from '../styles/global.module.css'
import Button from './Button'
import {AiOutlineMail, AiOutlineMobile, AiOutlineHome} from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='Contact' className='w-full py-10 h-full xl:h-screen xl:mt-96'>
        <div>
            <h1 className={`text-[#fcd731] text-4xl py-20 text-center font-mono font-[900]`}>Contact</h1>
        </div>
        <div className='flex flex-1 justify-between items-start flex-col xl:flex-row'>
        <div className='flex flex-col space-y-20 gap-5 lg:mt-5 my-10'>
                <div className='flex items-center space-x-4'>
                  <AiOutlineMail 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-xl'>Signwithvictor@gmail.com</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <AiOutlineMobile 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-xl'>+2347036708999</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <AiOutlineHome
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-xl'>Zarmangda- Rayfield junction, Jos</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <AiOutlineMail 
                  size={32}
                  className='text-[#fcd731]' />
                  <p className='text-[#fcd731] font-mono font-[900] text-xl'>Signwithvictor@gmail.com</p>
                </div>
            </div>
            <form action="">
                <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex flex-col'>
                    <label className='py-3 font-mono text-xl text-[#fcd731] font-mono font-[900]' htmlFor="">Full Name: </label>
                    <input 
                    type="text" 
                    className='h-[50px] w-[350px] xl:w-[500px] rounded-md border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black'
                    placeholder='Enter your full name...'
                    name=""
                     />
                </div>
                <div className='py-3 flex flex-col'>
                    <label className='py-3 text-[#fcd731] text-xl font-mono font-[900]' htmlFor=""> Email: </label>
                    <input 
                    type="email" 
                    className='h-[50px] w-[350px] xl:w-[500px] rounded-md border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black'
                    placeholder='Enter your email address...'
                    name=""
                     />
                </div>
                <div className='py-3 flex flex-col'>
                    <label className='py-3 text-[#fcd731] text-xl font-mono font-[900]' htmlFor="">Message: </label>
                    <textarea 
                    className='h-[300px] w-[350px] xl:w-[500px] rounded-md  border-none outline-none bg-yellow-300 px-4 text-black placeholder:text-black py-6 resize-none'
                    placeholder='Message'
                    name=""
                     />
                </div>
                <Button 
                btn="Contact me"
                className="border-none font-mono font-[900] text-xl  text-[#0d0d26] py-3 w-[350px] xl:w-[500px] rounded-md bg-[#fcd731] hover:bg-yellow-200"
                />
                </div>
            </form>
        </div>

    </div>
  )
}

export default Contact