import React from 'react'
import PortfolioCard from './PortfolioCard'
import {projects} from '@/context/data'

const PortfolioList = () => {
 
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 grid-rows-3 xl:grid-rows-1 gap-6 '>
      {
        projects.map(project => (
            <PortfolioCard
            key={project.title}
            title={project.title}
            overview={project.description}
            image={project.image}
            demolink={project.demoLink}
            githlink={project.githhubLink}
            />
        ))
      }

            
        <PortfolioCard />
    </div>
  )
}

export default PortfolioList