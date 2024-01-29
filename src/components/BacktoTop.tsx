'use client'
import React,{useState,useEffect} from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'


const BacktoTop = () => {
    const [invisible, setInvisible] = useState(false)

    useEffect(()=>{
        const handleBacktoTopButton = ()=>{
            const handleTop = document.documentElement.scrollTop || document.body.scrollTop
            setInvisible(handleTop > 190);
        }
        window.addEventListener('scroll',handleBacktoTopButton)

    return () =>{
        window.removeEventListener('scroll',handleBacktoTopButton)
    }
    },[])

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
        <div
        >
        <AiOutlineArrowUp 
        className={`${invisible ? 'block bottom-10 right-10 fixed text-[#0d0d26] p-2 cursor-pointer bg-yellow-500 h-[50px] w-[50px] rounded-full':'hidden fixed bottom-40 right-6 bg-yellow-500'}`}
        onClick={scrollTop}
        size={10}
        />
        </div>
    </>
  )
}

export default BacktoTop