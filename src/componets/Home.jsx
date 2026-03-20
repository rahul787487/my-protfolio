import React from 'react'
import rahul from "../assets/rahul.jpg"
import { GoArrowRight } from "react-icons/go";
import { FaGithub } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'
import { siteConfig } from '../data/siteConfig'

const Home = () => {
    return (
        <div id='home' name='home' className='relative w-full min-h-screen scroll-mt-20 overflow-hidden bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <AnimatedBackground />
            <div className='relative z-10 mx-auto flex min-h-screen max-w-screen-lg flex-col justify-center gap-10 px-4 pb-24 pt-28 md:flex-row md:items-center md:gap-12 md:pb-16'>
                <div className='flex flex-1 flex-col justify-center'>
                    <p className='mb-4 w-fit rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium tracking-[0.2em] text-cyan-200 uppercase'>
                        {siteConfig.location}
                    </p>
                    <h2 className='text-4xl font-bold text-white sm:text-6xl'>
                        I'm {siteConfig.name},
                        <span className='mt-2 block text-cyan-300'>{siteConfig.role}</span>
                    </h2>
                    <p className='max-w-2xl py-4 text-base leading-7 text-gray-300 sm:text-lg'>I am a passionate Full Stack Developer and a fresher, eager to build modern web applications. I have hands-on experience with technologies like React, Tailwind CSS,nodejs,Mongodb,etc  and other modern tools. I am always excited to learn new skills and contribute to innovative projects. My goal is to grow as a developer and deliver high-quality solutions.

                    </p>
                    <div className='flex flex-col gap-3 pt-2 sm:flex-row'>
                        <a
                          href="#portfolio"
                          className='group flex w-fit items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 text-white transition duration-200 hover:scale-105'
                        >
                          Portfolio
                          <span className='group-hover:rotate-90 duration-300'>
                            <GoArrowRight className='ml-1' />
                          </span>
                        </a>
                        <a
                          href={siteConfig.githubProfile}
                          target='_blank'
                          rel='noreferrer'
                          className='flex w-fit items-center gap-2 rounded-md border border-cyan-400/60 bg-black/30 px-6 py-3 text-cyan-100 transition duration-200 hover:scale-105 hover:bg-cyan-400/10'
                        >
                          <FaGithub size={18} />
                          GitHub Profile
                        </a>
                    </div>

                </div>
                <div className='flex flex-1 justify-center'>
                    <img src={rahul} alt="Rahul's profile" className='mx-auto w-3/4 max-w-xs rounded-full sm:max-w-sm md:w-full md:max-w-md' />
                </div>
            </div>

        </div>
    )
}

export default Home
