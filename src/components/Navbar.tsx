'use client'
import React,{useState}  from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdLightMode} from 'react-icons/md'
import styles from '../app/Navbar.module.css'

const Navbar = () => {
  const [isClick, setClick] = useState(false)
 
 const toggleMenu = ()=>{
  setClick(!isClick);
 }

  return (
    <div className={`${styles.flexCenter} h-[5rem]`}>
        <div className='text-2xl font-extrabold'>
        <Link href='/'>
        Vikkycode
        </Link>
        </div>
        <nav className=' hidden lg:block'>
        <ul className='flex gap-5'>
            <Link href='/about'>
            <li>About</li>
            </Link>
            <Link href='/portfolio'>
            <li>Portfolio</li>            
            </Link>
            <Link href='/skill'>
            <li>Skill</li>            
            </Link>
            <Link href='/contact'>
            <li>Contact</li>            
            </Link>
        </ul>
        </nav>
        <div className='flex'>
        <HiMenuAlt3
        className='block lg:hidden text-pink-500 text-red-500 text-yellow-500  bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
        onClick={toggleMenu} 
        size={30}/>
        {isClick && (

          <div className='bg-white text-black right-0 z-20 top-0 h-[50vh] w-[150px] absolute'>
          <nav className='block lg:hidden'>
            <AiOutlineClose 
            size={30}
            onClick={toggleMenu}
            className='fixed right-6 top-[25px]' />
            {isClick && (
        <ul className='flex flex-col h-[50vh] justify-center items-center gap-5'>
            
            <li>About</li>
            <li>Portfolio</li>
            <li>Skill</li>
            <li>Contact</li>
        </ul>
            )}
        </nav>
          </div>
        )}
        <MdLightMode
        className='hidden lg:block' 
        size={30} />
        </div>
    </div>
  )
}

export default Navbar