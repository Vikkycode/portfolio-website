import React, { Suspense } from 'react'
import PortfolioList from './PortfolioList';



const Portfolio = ()=>{
    return (
        <section id='portfolio' className='h-full xl:h-screen w-full'>
            <h1 className={`text-[#fcd731] text-4xl py-20 text-center font-mono font-[900]`}>Portfolio</h1>
            <Suspense fallback={<p>Loading...</p>}>
               <PortfolioList />
            </Suspense>
        </section>
    )
}

export default Portfolio;