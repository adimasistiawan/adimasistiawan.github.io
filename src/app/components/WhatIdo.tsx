import React from 'react'
import { FaArrowRight, FaGolang, FaLaravel } from 'react-icons/fa6'
import { GrReactjs } from 'react-icons/gr'
import { SiExpress, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPhp, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import FadeIn from './FadeIn'
import Link from 'next/link'

const WhatIdo = (props: {isAboutMe?: boolean}) => {
  return (
    <section className='px-18 sm:px-32 py-18'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className=''>
                <FadeIn>
                    <img src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full h-150 rounded-3xl' alt="" />
                </FadeIn>
            </div>
            <FadeIn delay={0.4}>
                <div className='flex flex-col justify-between gap-4 h-full'>
                    <div>
                        <h2 className='text-3xl lg:text-5xl text-[#030712] font-bold mb-4'>How I help turn ideas into products</h2>
                        <p className="text-[#374151] text-xl leading-relaxed mb-8">
                            I work across the full development cycle from backend logic to user-facing experiences. so every product I build is fast, reliable, and easy to grow.
                        </p>
                        <h3 className='text-xl lg:text-2xl font-semibold mb-4'>Tech I Work With</h3>
                        <div className='flex flex-row flex-wrap gap-4 mb-8'>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <FaLaravel size={16} />
                                <span>Laravel</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <FaGolang size={16} />
                                <span>Go Lang</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiNestjs size={16} />
                                <span>Nest.js</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiExpress size={16} />
                                <span>Express</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiPhp size={16} />
                                <span>PHP</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiNextdotjs size={16} />
                                <span>Next.js</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <GrReactjs size={16} />
                                <span>React.js</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiTailwindcss size={16} />
                                <span>Tailwind CSS</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiPostgresql size={16} />
                                <span>PostgreSQL</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiMysql size={16} />
                                <span>MySQL</span>
                            </div>
                            <div className='flex items-center gap-2 px-6 py-3 rounded-full bg-[#6b7280] text-white text-sm sm:text-lg hover:bg-[#030712] transition-colors duration-300 ease-out'>
                                <SiMongodb size={16} />
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                    {props.isAboutMe ? 
                    <Link href="/about-me" className='w-fit flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                        About Me
                        <FaArrowRight size={16} />
                    </Link> : 
                    <Link href="/about-me" className='w-fit flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
                        Let's Talk
                        <FaArrowRight size={16} />
                    </Link>
                    }
                    
                </div>
            </FadeIn>
        </div>
    </section>
  )
}

export default WhatIdo