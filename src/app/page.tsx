import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className=" flex flex-col max-w-[1200px] mx-auto px-6">
    <Navbar />
    <Hero />
    <About />
    <Skill />
    <Portfolio />
    <Experience />
    <Contact />
    </main>
  )
}
