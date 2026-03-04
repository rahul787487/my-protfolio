import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-20'>
           Motivated Information Technology engineering student and aspiring Full Stack Developer with a strong interest in building web applications. Skilled in frontend and backend development with a passion for learning new technologies. Currently improving problem-solving skills through Data Structures and Algorithms in Java and eager to contribute to real-world software development projects.
        </p>
        <br />
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
        </div>
        <p className='text-xl mt-20'>Bachelor of Engineering (B.E.) in Electronics and Communication Engineering
<br />
Government College of Engineering, Bhavnagar, Gujarat, India
<br />
Expected Graduation: 2017-2021
<br />
CGPL:7.67/10
        </p>
     
      </div>
    </div>
  )
}

export default About
