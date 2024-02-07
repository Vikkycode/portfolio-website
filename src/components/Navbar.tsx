'use client'
import React,{useState,useContext}  from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdLightMode} from 'react-icons/md'
import styles from '../app/Navbar.module.css'
import { navlinks } from '@/context/data'
import {usePathname} from 'next/navigation'
import MyThemeContext from "../store/myThemeContext";



const Navbar = () => {
  const [isClick, setClick] = useState(false)

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
 


  const pathname = usePathname()
 const toggleMenu = ()=>{
  setClick(!isClick);
 }

  return (
    <header className={`${styles.flexCenter} h-[5rem]`}>
        <div className='text-2xl font-extrabold'
        data-aos="fade-right">
        <Link href='/'
        className='text-[#fcd731] text-2xl text-center font-mono font-[900]'>
        Vikkycode
        </Link>
        </div>
        <nav className=' hidden md:block'>
        <ul className='flex gap-5'>
            {navlinks?.map(({path,name})=>(
              
              <li key={path}>
                <Link 
                href={path}
                className={`text-center capitalize font-mono font-[900] ${pathname === path ? 'text-[#fcd731]':'' }`}>{name}</Link>
              </li>
            ))}
            
        </ul>
        </nav>
        <div className='flex' data-aos="fade-left">
        <HiMenuAlt3
        className='block md:hidden text-pink-500 text-red-500 text-yellow-500  bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
        onClick={toggleMenu} 
        size={30}/>
        {isClick && (

          <div className='bg-[#fcd731] flex flex-col justify-center items-center text-black right-0 z-10 top-0 h-full w-full absolute'
          data-aos="fade-left">
          <nav className='block md:hidden'
          >
            <AiOutlineClose 
            size={30}
            onClick={toggleMenu}
            className='absolute right-6 top-[25px]' />
            {isClick && (
        <ul className='flex flex-col h-[50vh] -z-10 justify-center items-center gap-5' data-aos="fade-left">
            
            { navlinks?.map(({path,name})=>(
              <li key={path}>
                <Link 
                href={path}
                className={`text-center text-2xl capitalize font-mono font-[900] ${pathname === name ? 'text-[#fcd731]':'' }`}
                target='_blanket'>{name}</Link>
                
              </li>
            ))}
        </ul>
            )}
        </nav>
          </div>
        )}
        <MdLightMode
        className='hidden lg:block py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-[#0d0d26] text-[#fcd731] dark:bg-[#fcd731] dark:text-black'
        onClick={toggleThemeHandler} 
        size={30} />
        </div>
    </header>
  )
}

export default Navbar