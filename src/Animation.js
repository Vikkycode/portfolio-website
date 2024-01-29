'use client'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Animation = ({children}) => {
    
    useEffect(()=>{
        AOS.init({
     delay: 400, // values from 0 to 3000, with step 50ms
      duration: 1000,
        });
    })
  return (
    <div data-aos='fade-up'>{children}</div>
  )
}

export default Animation