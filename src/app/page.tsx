
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className=" flex flex-col max-w-[1025px] mx-auto">
    <Navbar />
    <Hero />
    </div>
  )
}
