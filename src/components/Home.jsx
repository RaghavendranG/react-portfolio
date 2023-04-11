import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-white'>Hi, my name is</p>
<h1 className='text-4xl text-white font-bold sm:text-7xl'>Raghavendran G</h1>
<h2 className='text-4xl text-gray-400 font-bold sm:text-7xl'>I'm a Full-stack Developer.</h2>
<p className='text-gray-400 py-4 max-w-[700px]'>Specialized and Experienced in designing and 
developing web applications using MERN stack</p>
<div>
<button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
Projects <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/></button>  
</div>
</div>
    
    </div>
  )
}

export default Home;