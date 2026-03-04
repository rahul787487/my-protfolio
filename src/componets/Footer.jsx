import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 1, label: 'Home', link: 'home' },
    { id: 2, label: 'About', link: 'about' },
    { id: 3, label: 'Portfolio', link: 'portfolio' },
    { id: 4, label: 'Experience', link: 'experience' },
  ]

  const services = [
    { id: 1, title: 'Backend Development' },
    { id: 2, title: 'Frontend Development' },
    { id: 3, title: 'Web App Development' },
    { id: 4, title: 'API Integration' },
  ]

  const socialLinks = [
    { id: 1, icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { id: 2, icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { id: 3, icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { id: 4, icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className='w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white py-12'>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Grid Layout - Responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          
          {/* Quick Links Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 inline-block'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map(({ id, label, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                    className='text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer'
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to='contact'
                  smooth
                  duration={500}
                  offset={-80}
                  className='text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 inline-block'>Services</h3>
            <ul className='space-y-3'>
              {services.map(({ id, title }) => (
                <li key={id} className='text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer'>
                  {title}
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Me Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 inline-block'>Reach Me</h3>
            <ul className='space-y-3 text-gray-400'>
              <li className='hover:text-cyan-400 transition duration-300'>
                📍 India
              </li>
              <li className='hover:text-cyan-400 transition duration-300'>
                📱 +91 6351420598
              </li>
              <li className='hover:text-cyan-400 transition duration-300 break-all'>
                📧 rahul968713@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 inline-block'>Follow Me</h3>
            <div className='flex gap-4 flex-wrap'>
              {socialLinks.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-cyan-400 hover:scale-110 transition duration-300 text-2xl'
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 my-8'></div>

        {/* Bottom Copyright Section */}
        <div className='text-center text-gray-400 text-sm sm:text-base'>
          <p>
            © {currentYear} Rahul. Made with <span className='text-red-500'>❤️</span> in India
          </p>
          <p className='mt-2 text-xs sm:text-sm'>
            Full Stack Developer | React | Node.js | MongoDB
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
