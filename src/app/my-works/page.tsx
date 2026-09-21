import Image from "next/image";
import Navbar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { FaArrowRight } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import projects from "@/utils/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] mx-auto">
      <Navbar/>
      <section className='px-18 sm:px-32 py-18'>
        <div className="text-center">
            <h1 className='text-7xl sm:text-8xl lg:text-9xl text-[#030712] font-extrabold'>Some Of The Things <span className='text-[#b6bcc6]'>I've Built</span></h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-18'>
            {projects.map((project, index) => (
                <FadeIn key={index} >
                    <div className='flex flex-col justify-between transition-all duration-300 hover:-translate-y-1'>
                        <div className='px-8 py-8 h-100 overflow-hidden bg-[#e5e7eb] rounded-3xl'>
                            <img src={project.image} alt="" className='object-cover w-full h-full rounded-3xl' />
                        </div>
                        <div className='bg-white py-4'>
                            <h3 className='text-2xl font-semibold text-[#030712] mb-1'>{project.title}</h3>
                            <p className='text-[#374151] text-xl leading-relaxed line-clamp-2 mb-2'>{project.description}</p>
                            <div className='flex flex-row flex-wrap gap-2'>
                                <Link href={`/my-works/${project.slug}`} className='px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-sm sm:text-lg'>
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
      <ContactMe/>
      <Footer/>
    </main>
  );
}
