import React from 'react'
import { FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'

const Contect = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() || 'Portfolio Visitor'
    const email = formData.get('email')?.toString().trim() || 'No email provided'
    const message = formData.get('message')?.toString().trim() || 'Hello Rahul, I would like to connect with you.'

    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Portfolio message for ${siteConfig.name} from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    window.location.href = mailtoLink
  }

  return (
    <div id='contact' name='contact' className='w-full min-h-screen scroll-mt-20 bg-gradient-to-b from-black to-gray-800 p-4 pb-24 text-white md:pb-12'>
      <div className='mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 transition-all duration-500 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105'>Contact</p>
            <p className='py-6 text-xl'>Send a message or use one of the direct contact options below.</p>
        </div>
        <div className='grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
            <div className='grid gap-4'>
              <a
                href={`mailto:${siteConfig.email}`}
                className='rounded-xl border border-gray-700/50 bg-gray-900/30 p-5 shadow-lg backdrop-blur-sm transition duration-300 hover:border-cyan-400/50 hover:bg-gray-900/60'
              >
                <div className='flex items-center gap-3 text-cyan-300'>
                  <FaEnvelope />
                  <span className='text-sm uppercase tracking-[0.25em]'>Email</span>
                </div>
                <p className='mt-3 break-all text-lg text-white'>{siteConfig.email}</p>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className='rounded-xl border border-gray-700/50 bg-gray-900/30 p-5 shadow-lg backdrop-blur-sm transition duration-300 hover:border-cyan-400/50 hover:bg-gray-900/60'
              >
                <div className='flex items-center gap-3 text-cyan-300'>
                  <FaPhoneAlt />
                  <span className='text-sm uppercase tracking-[0.25em]'>Phone</span>
                </div>
                <p className='mt-3 text-lg text-white'>{siteConfig.phone}</p>
              </a>

              <a
                href={siteConfig.githubProfile}
                target='_blank'
                rel='noreferrer'
                className='rounded-xl border border-gray-700/50 bg-gray-900/30 p-5 shadow-lg backdrop-blur-sm transition duration-300 hover:border-cyan-400/50 hover:bg-gray-900/60'
              >
                <div className='flex items-center gap-3 text-cyan-300'>
                  <FaGithub />
                  <span className='text-sm uppercase tracking-[0.25em]'>GitHub</span>
                </div>
                <p className='mt-3 text-lg text-white'>github.com/rahul787487</p>
              </a>
            </div>

            <div className='w-full rounded-xl border border-gray-700/50 bg-gray-900/30 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/50 hover:bg-gray-900/70 hover:shadow-2xl hover:shadow-cyan-400/50 sm:p-8'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input type="text" placeholder='Enter your name' name='name' required className='mb-4 rounded-md border-2 border-gray-600 bg-transparent p-3 text-white transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/50' />
                    <input type="email" placeholder='Enter your email' name='email' required className='mb-4 rounded-md border-2 border-gray-600 bg-transparent p-3 text-white transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/50' />
                    <textarea name="message" placeholder='Enter your message' rows={7} required className='mb-6 rounded-md border-2 border-gray-600 bg-transparent p-3 text-white transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/50'></textarea>
                    <button type='submit' className='mx-auto my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-400/50'>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contect
