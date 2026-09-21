import Link from 'next/link'
import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa6'
import { PiMapPinSimple } from 'react-icons/pi'

const ContactMe = () => {
  return (
    <section className='px-18 sm:px-32 py-18 bg-[#e5e7eb]'>
        <div className='text-center flex flex-col items-center'>
            <h2 className='text-7xl sm:text-8xl lg:text-9xl mb-8 text-[#030712] font-extrabold'>Have a project in mind? <span className='text-[#b6bcc6]'>Let's build it together.</span></h2>
            <Link href="mailto:adimasistiawan02@gmail.com" className='flex items-center gap-2 max-w-max px-6 py-3 rounded-full bg-[#030712] hover:bg-[#6b7280] text-white text-2xl transition-colors duration-300 ease-out'>
                Let's Talk
                <FaArrowRight size={16} />
            </Link>
        </div>
    </section>
  )
}

export default ContactMe