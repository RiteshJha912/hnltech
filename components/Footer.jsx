import React from 'react'
import MagicButton from './ui/MagicButton'
import { BsFire } from 'react-icons/bs'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
      <div className='flex flex-col items-center mb-10'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready To Take <span className='text-blue'>Your</span> Business to the
          Next Level?
        </h1>
        <p className='text-white-200 text-center mt-6 sm:mt-8 md:mt-10'>
          Reach out to us today to explore how our tailored technology solutions
          can empower your business and drive growth.
        </p>

        <div className='mt-6 sm:mt-8'>
          <form className='w-full max-w-[35rem] mx-auto p-6 bg-blue-200 bg-opacity-75 rounded-lg'>
            <div className='mb-4'>
              <input
                type='text'
                id='name'
                placeholder='Name'
                className='w-full max-w-[35rem] p-3 text-sm text-white-200 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center hover:bg-blue-100'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                id='email'
                placeholder='Email ID'
                className='w-full max-w-[35rem] p-3 text-sm text-white-200 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center hover:bg-blue-100'
              />
            </div>
            <div className='mb-6'>
              <textarea
                id='message'
                rows='4'
                placeholder='Your Message'
                className='w-full max-w-[35rem] p-3 text-sm text-white-200 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center hover:bg-blue-100'
              ></textarea>
            </div>

            <div className='flex justify-center mt-4'>
              <MagicButton
                title='Grow With Us'
                icon={<BsFire />}
                position='right'
                className='w-full'
              />
            </div>
          </form>
        </div>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm font-light mt-5 sm:mt-8 text-center'>
          © 2025 HNLTech Pvt. Ltd. <br />
          Designed and Developed By{' '}
          <a
            href='https://noxalgo.com'
            className='text-white hover:text-blue !important transition-colors duration-300 hover:cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'
          >
            NOXALGO LLP
          </a>
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blue-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-5 sm:mt-8 mb-10'
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
