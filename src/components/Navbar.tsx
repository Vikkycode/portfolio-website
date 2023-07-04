import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin,AiFillTwitterSquare,AiFillGithub} from 'react-icons/ai'
import styles from '../app/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={`${styles.flexCenter} h-[5rem]`}>
        <div>
        <Link href='/'>
        Vikkycode
        </Link>
        </div>
        <ul className='flex gap-5'>
            <li>About</li>
            <li></li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <ul className='flex gap-5'>
            <AiFillLinkedin size={25} />
            <AiFillTwitterSquare size={25} />
            <AiFillGithub size={25} />
        </ul>
    </div>
  )
}

export default Navbar