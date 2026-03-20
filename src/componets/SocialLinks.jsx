import React from 'react'
import { FaEnvelope, FaGithub, FaHome } from 'react-icons/fa'
import { socialLinks } from '../data/siteConfig'

const iconMap = {
  github: FaGithub,
  mail: FaEnvelope,
}

const SocialLinks = () => {
  return (
    <>
      <div className='fixed left-0 top-[35%] z-40 hidden flex-col lg:flex'>
        <ul>
          {socialLinks.map(({ id, label, icon, href }, index) => {
            const Icon = iconMap[icon]

            return (
              <li
                key={id}
                className={`ml-[-100px] flex h-14 w-44 items-center justify-between bg-gray-700 px-4 duration-300 hover:ml-[-10px] ${
                  index === 0 ? 'rounded-tr-md' : ''
                } ${index === socialLinks.length - 1 ? 'rounded-br-md' : ''}`}
              >
                <a
                  href={href}
                  className='flex w-full items-center justify-between text-white'
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={label}
                >
                  {label} <Icon size={24} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-40 flex w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 lg:hidden'>
        <ul className='flex items-center gap-3 rounded-full border border-gray-700 bg-black/80 px-4 py-3 shadow-lg backdrop-blur-sm'>
          <li>
            <a
              href='#home'
              aria-label='Home'
              className='text-white transition duration-300 hover:text-cyan-400'
            >
              <FaHome size={20} />
            </a>
          </li>
          {socialLinks.map(({ id, label, icon, href }) => {
            const Icon = iconMap[icon]

            return (
              <li key={id}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className='text-white transition duration-300 hover:text-cyan-400'
                >
                  <Icon size={20} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default SocialLinks
