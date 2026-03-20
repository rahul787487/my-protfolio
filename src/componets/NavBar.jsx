import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, label: 'Home', target: 'home' },
    { id: 2, label: 'About', target: 'about' },
    { id: 3, label: 'Project', target: 'portfolio' },
    { id: 4, label: 'Skill', target: 'experience' },
    { id: 5, label: 'Contact', target: 'contact' },
  ]

  const closeMenu = () => setNav(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    closeMenu()

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${sectionId}`)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', nav)

    return () => document.body.classList.remove('overflow-hidden')
  }, [nav])

  return (
    <div className='fixed z-50 flex h-20 w-full items-center justify-between bg-black/95 px-4 text-white shadow-lg shadow-black/30 backdrop-blur-sm'>
      <div>
        <h1 className='ml-2 text-5xl font-great-vibes'>{siteConfig.name}</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, label, target }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300'
          >
            <button type='button' onClick={() => scrollToSection(target)}>
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button
        type='button'
        onClick={() => setNav(!nav)}
        className='z-50 cursor-pointer pr-4 text-gray-400 md:hidden'
        aria-label={nav ? 'Close menu' : 'Open menu'}
        aria-expanded={nav}
        aria-controls='mobile-menu'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav && (
        <ul
          id='mobile-menu'
          className='fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col items-center justify-center gap-8 overflow-y-auto bg-gradient-to-b from-black to-gray-800 px-6 text-gray-300 md:hidden'
        >
          {links.map(({ id, label, target }) => (
            <li
              key={id}
              className='w-full max-w-xs text-center'
            >
              <button
                type='button'
                onClick={() => scrollToSection(target)}
                className='w-full rounded-xl border border-gray-700 bg-black/30 px-4 py-4 text-2xl capitalize transition duration-300 hover:border-cyan-400 hover:text-cyan-400'
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
