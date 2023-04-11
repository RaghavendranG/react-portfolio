import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TailwindCSS from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'
import react from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import AWS from '../assets/aws.png'
import Github from '../assets/github.png'
import Java from '../assets/download.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Skills</p>
                <p className='py-4'>These are the technologies i've worked</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailwindCSS} alt="HTML icon"/>
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="HTML icon"/>
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon"/>
                    <p className='my-4'>NodeJS</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon"/>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="HTML icon"/>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon"/>
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="HTML icon"/>
                    <p className='my-4'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills