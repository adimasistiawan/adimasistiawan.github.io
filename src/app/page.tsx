import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyWorks from "./components/MyWorks";
import WhatIdo from "./components/WhatIdo";
import Experiences from "./components/Experiences";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] mx-auto">
      <Navbar/>
      <HeroSection/>
      <WhatIdo isAboutMe={true}/>
      <MyWorks/>
      <Experiences/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}
