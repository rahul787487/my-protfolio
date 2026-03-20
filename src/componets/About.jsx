import React from 'react'

const About = () => {
  return (
    <div id="about" name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-gray-900/30 p-6 rounded-xl shadow-lg transition-all duration-500 hover:bg-gray-900/70 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50">
            <div className='pb-4'>
              <p className='text-2xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>
            <p className='text-lg mt-4'>
               Motivated Information Technology engineering student and aspiring Full Stack Developer with a strong interest in building web applications. Skilled in frontend and backend development with a passion for learning new technologies. Currently improving problem-solving skills through Data Structures and Algorithms in Java and eager to contribute to real-world software development projects.
            </p>
          </div>

          <div className="bg-gray-900/30 p-6 rounded-xl shadow-lg transition-all duration-500 hover:bg-gray-900/70 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50">
            <div className='pb-4'>
              <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Education</p>
            </div>
            <p className='text-lg mt-4'>Bachelor of Engineering (B.E.) in Electronics and Communication Engineering
<br />
Government College of Engineering, Bhavnagar, Gujarat, India
<br />
Expected Graduation: 2017-2021
<br />
CGPL:7.67/10
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
