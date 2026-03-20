import React from 'react'
import nodejsLogo from '../assets/nodejs.png'
import htmlLogo from '../assets/html.png'
import tailwindLogo from '../assets/tailwind.png'

const Experience = () => {
  const technologies = [
    { id: 1, src: htmlLogo, title: 'HTML', percent: 92, style: 'shadow-orange-500' },
    { id: 2, src: 'https://cdn.iconscout.com/icon/free/png-256/free-css-3-logo-23-1175239.png', title: 'CSS', percent: 88, style: 'shadow-blue-500' },
    { id: 3, src: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png', title: 'JavaScript', percent: 82, style: 'shadow-yellow-500' },
    { id: 4, src: 'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png', title: 'React', percent: 85, style: 'shadow-blue-600' },
    { id: 5, src: nodejsLogo, title: 'NodeJS', percent: 78, style: 'shadow-green-500' },
    { id: 6, src: tailwindLogo, title: 'Tailwind CSS', percent: 80, style: 'shadow-sky-400' },
    { id: 7, src: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png', title: 'MongoDB', percent: 72, style: 'shadow-green-700' },
    { id: 8, src: 'data:image/png;base64,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', percent: 68, style: 'shadow-white' },
    
  ]

  return (
    <div id="experience" name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black scroll-mt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='text-xl mt-20'>These are my core skills with proficiency levels</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map(({ id, src, title, percent, style }) => (
            <div key={id} className={`bg-gray-900/30 p-6 rounded-xl ${style} transition-all duration-500 hover:bg-gray-900/70 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 animate-fade-in`}>
              <div className="flex items-center gap-4 mb-4">
                <img src={src} alt={`${title} logo`} className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-12" />
                <div>
                  <p className="text-lg font-semibold text-white transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-cyan-400">{title}</p>
                  <p className="text-sm text-gray-300">{percent}%</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percent}%` }}
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
