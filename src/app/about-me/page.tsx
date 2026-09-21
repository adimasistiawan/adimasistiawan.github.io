import { FaArrowRight, FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatIdo from "../components/WhatIdo";
import Image from "next/image";
import ContactMe from "../components/ContactMe";
import FadeIn from "../components/FadeIn";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] mx-auto">
      <Navbar/>
      <section className='px-18 sm:px-32 py-18'>
        <FadeIn>
          <h1 className="text-[#030712] text-xl lg:text-2xl mb-6">About Me</h1>
        </FadeIn>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div>
            <FadeIn>
              <span className='text-6xl sm:text-7xl lg:text-8xl text-[#030712] font-extrabold'>More Than Just <span className='text-[#b6bcc6]'>Writing Code</span></span>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.4}>
              <Image className='size-96 rounded-3xl object-cover mb-8' src="/images/photo-profile.jpeg" alt="" width={300} height={300} />
              <p className='text-[#374151] text-xl leading-relaxed mb-8'>Full-Stack Software Engineer with 5+ years of experience. Comfortable owning the full development lifecycle from database design and REST API
              architecture to third party integrations and application security hardening while collaborating closely with designers
              and QA within an Agile workflow. Known as a detail oriented, communicative problem solver with a strong drive for
              continuous learning, and a track record of driving complex features to completion both independently and as part of a
              team.</p>
              <div className="flex gap-4 mt-4">
                  <button className='flex items-center gap-2 max-w-max px-6 py-3 rounded-full mr-4 bg-[#030712] hover:bg-[#6b7280] text-white text-2xl mb-2 lg:mb-0 transition-colors duration-300 ease-out'>
                    Let's Talk
                    <FaArrowRight size={16} />
                  </button>
                  <a
                      href="https://instagram.com/adimasistiawan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-3 rounded-full border border-[#030712] text-[#6b7280]"
                  >
                      <FaInstagram className="w-8 h-8" />
                  </a>
                    <a
                      href="https://www.threads.com/@adimasistiawan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-3 rounded-full border border-[#030712] text-[#6b7280]"
                  >
                      <FaThreads className="w-8 h-8" />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/adimas-putra-istiawan-29587814b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-3 rounded-full border border-[#030712] text-[#6b7280]"
                  >
                      <FiLinkedin className="w-8 h-8" />
                  </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <WhatIdo isAboutMe={false}/>
      <Experiences/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}
