import ContactMe from '@/app/components/ContactMe'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import projects from '@/utils/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Work({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] mx-auto">
        <Navbar/>
        <section className='px-18 lg:px-86 py-18'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl text-[#030712] font-extrabold mb-8 '>{project.title}</h1>
            <div className='px-8 py-8 h-120 overflow-hidden bg-[#e5e7eb] rounded-3xl '>
                <img src={project.image} alt="" className='object-cover w-full h-full rounded-3xl' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12'>
                <div className='order-2 lg:order-1 lg:col-span-3'>
                    <span className='text-2xl font-semibold text-[#030712]'>Tools</span>
                    <div className='flex flex-col flex-wrap gap-4 mt-4'>
                        {project.tech.map((tool, index) => (
                            <span className='text-xl text-[#374151]' key={index}>{tool}</span>
                        ))}
                    </div>
                    <div className='flex flex-wrap mt-8'>
                        <a href={project.demo} target='_blank' className='px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                            <FiExternalLink size={16} />
                        </a>
                    </div>
                </div>
                <div className='order-1 lg:order-2 lg:col-span-9'>
                    <p className='text-[#374151] text-xl leading-relaxed'>{project.description}</p>
                </div>
            </div>
        </section>
        <ContactMe/>
        <Footer/>
    </main>
  )
}
