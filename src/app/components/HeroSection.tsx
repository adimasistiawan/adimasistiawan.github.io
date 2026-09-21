import Image from 'next/image'
import React from 'react'
import FadeIn from './FadeIn'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='px-18 sm:px-32 py-18'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left'>
                <FadeIn>
                    <h1 className='text-[#030712] text-xl lg:text-2xl mb-6'>
                        Hello, I'm Adimas
                    </h1>
                    <span className="text-6xl sm:text-7xl lg:text-8xl mb-8 text-[#030712] font-extrabold">I build <span className='text-[#b6bcc6]'>fullstack</span> products that scale with real impact.</span>
                    <div className='flex flex-col sm:flex-row items-center sm:items-start mt-12'>
                        <Link href="mailto:adimasistiawan02@gmail.com" className='max-w-max px-6 py-3 rounded-full mr-4 bg-[#030712] hover:bg-[#6b7280] text-white text-2xl mb-2 lg:mb-0 transition-colors duration-300 ease-out'>Hire Me</Link>
                        <Link href="/CV.pdf" target="_blank" download className='max-w-max px-6 py-3 rounded-full mr-4 bg-white border border-[#030712] text-[#030712] text-2xl'>Download CV</Link>
                    </div>
                </FadeIn>
            </div>
            <div className='col-span-4 place-self-center mt-8 lg:mt-0'>
                <FadeIn delay={0.4}>
                    <Image className='rounded-full object-cover h-78' src="/images/photo-profile.jpeg" alt="" width={300} height={300} />
                </FadeIn>
            </div>
        </div>
    </section>
  )
}

export default HeroSection