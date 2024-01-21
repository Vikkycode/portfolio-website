'use client'
import React,{useState}  from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdLightMode} from 'react-icons/md'
import styles from '../app/Navbar.module.css'
import { navlinks } from '@/context/data'
import {usePathname} from 'next/navigation'

const Navbar = () => {
  const [isClick, setClick] = useState(false)
 
  const pathname = usePathname()
 const toggleMenu = ()=>{
  setClick(!isClick);
 }

  return (
    <div className={`${styles.flexCenter} h-[5rem]`}>
        <div className='text-2xl font-extrabold'>
        <Link href='/'
        className='text-[#fcd731] text-2xl text-center font-mono font-[900]'>
        Vikkycode
        </Link>
        </div>
        <nav className=' hidden lg:block'>
        <ul className='flex gap-5'>
            { navlinks?.map(({path,name})=>(
              
              <li key={path}>
                <Link 
                href={path}
                className={`text-center capitalize font-mono font-[900] ${pathname === path ? 'text-[#fcd731]':'' }`}>{name}</Link>
              </li>
            ))}
            
        </ul>
        </nav>
        <div className='flex'>
        <HiMenuAlt3
        className='block lg:hidden text-pink-500 text-red-500 text-yellow-500  bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
        onClick={toggleMenu} 
        size={30}/>
        {isClick && (

          <div className='bg-[#fcd731] flex flex-col justify-center items-center text-black right-0 z-10 top-0 h-full w-full absolute'>
          <nav className='block lg:hidden'>
            <AiOutlineClose 
            size={30}
            onClick={toggleMenu}
            className='fixed right-6 top-[25px]' />
            {isClick && (
        <ul className='flex flex-col h-[50vh] justify-center items-center gap-5'>
            
            { navlinks?.map(({path,name})=>(
              <li key={path}>
                <Link 
                href={path}
                className={`text-center text-2xl capitalize font-mono font-[900] ${pathname === name ? 'text-[#fcd731]':'' }`}>{name}</Link>
              </li>
            ))}
        </ul>
            )}
        </nav>
          </div>
        )}
        <MdLightMode
        className='hidden lg:block  text-[#fcd731]' 
        size={30} />
        </div>
    </div>
  )
}

export default Navbar