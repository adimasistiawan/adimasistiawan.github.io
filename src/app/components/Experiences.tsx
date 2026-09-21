import React from 'react'
import FadeIn from './FadeIn'

const Experiences = () => {
  return (
    <section className='px-18 sm:px-32 py-18'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            <div className='lg:col-span-4 pr-48'>
                <FadeIn>
                    <h2 className='text-3xl lg:text-5xl text-[#030712] font-bold'>My Journey So Far</h2>
                </FadeIn>
            </div>
            <div className='lg:col-span-6'>
                <FadeIn delay={0.4}>
                    <div className='flex flex-col divide-y divide-gray-200'>
                        <div className='pb-6'>
                            <span className='block text-2xl font-semibold text-[#030712]'>Senior Software Engineer</span>
                            <span className='text-[#374151] text-xl'>
                                2025 - Present <span className='ml-1 font-semibold'>Suitmedia Digital Agency</span>
                            </span>
                        </div>
                        <div className='py-6'>
                            <span className='block text-2xl font-semibold text-[#030712]'>Software Engineer</span>
                            <span className='text-[#374151] text-xl'>
                                2022 - 2025 <span className='ml-1 font-semibold'>Suitmedia Digital Agency</span>
                            </span>
                        </div>
                        <div className='py-6'>
                            <span className='block text-2xl font-semibold text-[#030712]'>Full Stack Developer Freelance</span>
                            <span className='text-[#374151] text-xl'>
                                2021 - 2024 <span className='ml-1 font-semibold'>Markas Hosting</span>
                            </span>
                        </div>
                        <div className='py-6'>
                            <span className='block text-2xl font-semibold text-[#030712]'>Full Stack Web Developer</span>
                            <span className='text-[#374151] text-xl'>
                                2018 - 2022 <span className='ml-1 font-semibold'>Mitra IT Bali</span>
                            </span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
  )
}

export default Experiences