import React from 'react'
import PortfolioList from './PortfolioList';


const Portfolio = ()=>{
    return (
        <section className='h-screen w-full'>
            <h1 className='font-400 text-2xl leading-[32px] tracking-[10%]'>Portfolio</h1>
            <PortfolioList />
        </section>
    )
}

export default Portfolio;