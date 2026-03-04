import React from 'react'
import rahul from "../assets/rahul.jpg"
import { GoArrowRight } from "react-icons/go";
import{ Link } from 'react-scroll'
import AnimatedBackground from './AnimatedBackground'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white relative'>
            <AnimatedBackground />
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl  font-bold
                    text-white'>I'm a Full stack Developer</h2>
                    <p className='text-gray-500 py-4 '>I am a passionate Full Stack Developer and a fresher, eager to build modern web applications. I have hands-on experience with technologies like React, Tailwind CSS,nodejs,Mongodb,etc  and other modern tools. I am always excited to learn new skills and contribute to innovative projects. My goal is to grow as a developer and deliver high-quality solutions.

                    </p>
                    <div><Link
  to="portfolio"
  smooth={true}
  duration={500}
  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer hover:scale-105 duration-200'
>
  Portfolio
  <span className='group-hover:rotate-90 duration-300'>
    <GoArrowRight className='ml-1' />
  </span>
</Link></div>

                </div>
                <div>
                    <img src={rahul} alt="Rahul's profile" className='rounded-full mx-auto w-2/3 md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home
