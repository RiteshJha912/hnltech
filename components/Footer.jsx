import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-blue'>your</span> business to the
          next level ?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to us today to explore how our tailored technology solutions
          can empower your business and drive growth.
        </p>
        <a href='mailto:contact@hnltech.in'>
          <MagicButton
            title='lets get in touch'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light mt-5'>
          Copyright © 2024 HNLTech Pvt. Ltd.
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify items-center backdrop-blue-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-5 mb-10'
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
