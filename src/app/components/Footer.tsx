import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaInstagram, FaThreads } from 'react-icons/fa6';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className='px-18 sm:px-32 py-24 bg-[#030712] text-white'>
        <div className='flex flex-col justify-between gap-12'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6">
                    <div className="text-5xl font-semibold">
                        <span className="text-[#6b7280]">Adimas</span>
                        <span className="text-white">Putra</span>
                        <span className="text-white">.</span>
                    </div>
                    <p className="mt-4 text-[#6b7280] text-2xl font-semibold">Building innovative solutions and creating exceptional digital experiences.</p>
                </div>
                <div className="lg:col-span-5">
                    <h3 className='text-[#6b7280] text-2xl font-semibold'>Stay connected w/ me.</h3>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://instagram.com/adimasistiawan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
                        >
                            <FaInstagram className="w-8 h-8" />
                        </a>
                         <a
                            href="https://www.threads.com/@adimasistiawan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
                        >
                            <FaThreads className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adimas-putra-istiawan-29587814b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
                        >
                            <FiLinkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="mailto:adimasistiawan02@gmail.com"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
                        >
                            <FiMail className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            &copy; {currentYear} Adimas Portfolio. All rights reserved.
        </div>
    </section>
  )
}

export default Footer