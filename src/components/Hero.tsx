import Image from 'next/image'
import avatar from '../asses/vic.png'
import style from '../styles/global.module.css'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-screen relative lg:top-[5rem] top-[6rem]'
    tabIndex={0}>
        <div className='lg:flex items-center justify-between'>
        <div className='flex flex-col flex-1 text-center  absolute z-20 xl:text-start order-last xl:order-first'>
        <h1 className={`text-white  font-mono font-[900] text-4xl xl:text-6xl  mb-5`}>Hello, I am <span className='text-[#fcd731]'>Victor,</span></h1>
        <h1 className='text-3xl lg:text-6xl font-semibold mb-5'> Deaf Frontend Developer</h1>
        <div className='flex space-y-6 space-x-0 items-center flex-col xl:flex-row xl:space-y-0 xl:space-x-6 '>
         
         <Link href={`#contact`}>
         <Button 
          btn="Hire me"
          className="focus-visible:outline-2  border-2 border-[#fcd731] transition delay-100 bg-[#fcd731] text-[#0d0d26]  font-mono font-[900] text-xl py-3 px-5  rounded-md  hover:text-[#fcd731] hover:bg-transparent hover:bg-yellow-200"
          />
         </Link>
         <Link href={`#portfolio`}>
        <Button 
          btn="view my portfolio"
          className="focus-visible:outline-2  border-2 border-[#fcd731] transition delay-100 bg-transparent  font-mono font-[900] text-xl  text-[#fcd731] py-3 px-5  rounded-md hover:text-[#0d0d26] hover:bg-[#fcd731]"
          />
         </Link>
        </div>
        </div>
        <div className='h-[300px] w-[300px]  bg-[#0d0d26] rounded-full  border-x-cyan-500 border-y-red-500 lg:invisible' tabIndex={0}></div>
        <div className='lg:h-[400px] lg:w-[400px] rounded-full bg-[#fcd731] right-[90px] relative
        '>
            <div className="h-[395px] w-[395px] rounded-full absolute z-10 left-[2px] top-[3px] bg-[#0d0d26] lg:block hidden"></div>
            <div className={`${style.gradientCircle} h-[100px] w-[100px] left-[350px] top-[150px] absolute z-10 xl:block hidden`}></div>
            <div className={`${style.gradientCircle} h-[200px] w-[200px] left-[170px] lg:left-[230px]  lg:top-[20px] xl:block hidden order-first xl:order-last`}>
          <Image src={avatar} 
          className='rounded-full absolute z-20 object-contain top-[1px] left-[1px]'
          height={197}
          width={197}
          alt="Picture of the Victor"
          loading='lazy'
          />          
            </div>
        </div>
        </div>
    </div>
  )
}


export default Hero