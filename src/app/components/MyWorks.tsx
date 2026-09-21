import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import FadeIn from './FadeIn'
import Link from 'next/link'
import projects from '@/utils/projects'

const MyWorks = () => {
  return (
    <section className='px-18 sm:px-32 py-18'>
        <FadeIn>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='text-3xl lg:text-5xl text-[#030712] font-bold'>Featured Projects</h2>
                <Link href="/my-works" className='w-fit flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                    View All Works
                    <FaArrowRight size={16} />
                </Link>
            </div>
        </FadeIn>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
            {projects.map((project, index) => (
                index < 6 &&
                <FadeIn key={index} >
                    <div className='flex flex-col justify-between transition-all duration-300 hover:-translate-y-1'>
                        <div className='px-8 py-8 h-100 overflow-hidden bg-[#e5e7eb] rounded-3xl'>
                            <img src={project.image} alt="" className='object-cover w-full h-full rounded-3xl' />
                        </div>
                        <div className='bg-white py-4'>
                            <h3 className='text-2xl font-semibold text-[#030712] mb-1'>{project.title}</h3>
                            <p className='text-[#374151] text-xl leading-relaxed line-clamp-2 mb-2'>{project.description}</p>
                            <div className='flex flex-row flex-wrap gap-2'>
                                <Link href={project.detail} target='_blank' className='px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                                    <FaArrowRight size={16} />
                                </Link>
                                <a href={project.demo} target='_blank' className='px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                                    <FiExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    </section>
  )
}

export default MyWorks