import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <div className=" flex flex-col max-w-[1200px] mx-auto px-6">
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    </div>
  )
}
