"use client"

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about-me" },
    { label: "Works", href: "/my-works" },
  ]
  return (
    <section className="px-18 sm:px-32 py-4 relative">
        <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold">
                <a href="/">
                    <span className="text-gray-400">Adimas</span>
                    <span className="text-black">Putra</span>
                    <span className="text-black">.</span>
                </a>
            </div>
            <div className="flex items-center gap-3">
                <Link href="mailto:adimasistiawan02@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#030712] text-[#030712] text-lg">
                    Let's Talk
                    <FaArrowRight size={16} />
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="flex px-3 py-3 items-center justify-center rounded-full border border-[#030712] text-[#030712] text-lg">
                    {isOpen ? <BiX size={18} /> : <BiMenu size={18} />}
                </button>
            </div>
        </nav>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#030712] pt-24 px-6 sm:px-18 lg:px-32"
          >
            <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 sm:right-18 lg:right-32 flex px-4 py-4 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
                <BiX size={30} />
            </button>
            <div className="flex flex-col divide-y divide-white/10">
              {menuItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-8"
                >
                  <div className="">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white transition-colors group-hover:text-gray-400 md:text-8xl">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex px-4 py-4 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <FaArrowRight size={18} className="text-white transition-colors group-hover:text-black" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Navbar