import React from 'react'

function AboutList(props:any) {

  return (
    <div className='flex flex-col space-y-10'>
        <div className='text-center xl:text-start'>
        <h1 className='text-[#fcd731] mt-10 text-start text-2xl capitalize font-mono font-[900]'>{props.headline}</h1>
        <p className='font-mono text-start font-[900] text-[16px]'>{props.subheadline}</p>
        </div>
    </div>
  )
}

export default AboutList