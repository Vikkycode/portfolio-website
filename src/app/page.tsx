import React, {Suspense} from 'react'
import dynamic from 'next/dynamic'

  const Navbar = dynamic(()=> import('@/components/Navbar'),{ssr:false})
  const Hero = dynamic(()=> import('@/components/Hero'))
  const About = dynamic(()=> import('@/components/About'))
  const Portfolio = dynamic(()=> import('@/components/Portfolio'))
  const Experience = dynamic(()=> import('@/components/Experience'),{ssr:false})
  const Skill = dynamic(()=> import('@/components/Skill'),{ssr:false})
  const Contact = dynamic(()=> import('@/components/Contact'),{ssr:false})
  const BacktoTop = dynamic(()=> import('@/components/BacktoTop'))
  const Footer = dynamic(()=> import('@/components/Footer'))
  const Animation = dynamic(()=> import('@/Animation'))


export default function Home() {
  
  return (
    <main className=" flex flex-col max-w-[1200px] mx-auto px-6 xs:px-8">
    <Suspense fallback={<p>loading...</p>}>
    <Navbar />
    </Suspense>
    <Animation>
    <Hero />
    <About />
    <Suspense fallback={<p>loading...</p>}>
    <Skill />
    </Suspense>
    <Portfolio />
    <Suspense fallback={<p>loading...</p>}>
    <Experience />
    </Suspense>
    <Contact />
    </Animation>
    <Footer />
    <BacktoTop />
    </main>
  )
}
