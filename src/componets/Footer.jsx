import React from 'react'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { siteConfig, socialLinks } from '../data/siteConfig'

const iconMap = {
  github: FaGithub,
  mail: FaEnvelope,
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 1, label: 'Home', link: 'home' },
    { id: 2, label: 'About', link: 'about' },
    { id: 3, label: 'Portfolio', link: 'portfolio' },
    { id: 4, label: 'Experience', link: 'experience' },
    { id: 5, label: 'Contact', link: 'contact' },
  ]

  const services = [
    { id: 1, title: 'Backend Development' },
    { id: 2, title: 'Frontend Development' },
    { id: 3, title: 'Web App Development' },
    { id: 4, title: 'API Integration' },
  ]

  return (
    <footer className='w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 py-12 text-white'>
      <div className='mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='mb-6 inline-block border-b-2 border-cyan-500 pb-2 text-xl font-bold'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map(({ id, label, link }) => (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    className='cursor-pointer text-gray-400 transition duration-300 hover:text-cyan-400'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-6 inline-block border-b-2 border-cyan-500 pb-2 text-xl font-bold'>Services</h3>
            <ul className='space-y-3'>
              {services.map(({ id, title }) => (
                <li key={id} className='cursor-pointer text-gray-400 transition duration-300 hover:text-cyan-400'>
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-6 inline-block border-b-2 border-cyan-500 pb-2 text-xl font-bold'>Reach Me</h3>
            <ul className='space-y-3 text-gray-400'>
              <li className='transition duration-300 hover:text-cyan-400'>{siteConfig.location}</li>
              <li className='transition duration-300 hover:text-cyan-400'>{siteConfig.phone}</li>
              <li className='break-all transition duration-300 hover:text-cyan-400'>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-6 inline-block border-b-2 border-cyan-500 pb-2 text-xl font-bold'>Profiles</h3>
            <div className='flex flex-wrap gap-3'>
              {socialLinks.map(({ id, href, label, icon }) => {
                const Icon = iconMap[icon]

                return (
                  <a
                    key={id}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className='flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-300'
                    title={label}
                  >
                    <Icon />
                    {label}
                  </a>
                )
              })}
            </div>
            <a
              href={siteConfig.githubRepo}
              target='_blank'
              rel='noreferrer'
              className='mt-5 inline-flex items-center rounded-md bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition duration-300 hover:bg-cyan-500/20'
            >
              View Portfolio Repository
            </a>
          </div>
        </div>

        <div className='my-8 border-t border-gray-700'></div>

        <div className='text-center text-sm text-gray-400 sm:text-base'>
          <p>
            Copyright {currentYear} {siteConfig.name}. Built with care in India.
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
