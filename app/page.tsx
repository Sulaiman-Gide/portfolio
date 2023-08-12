"use client"
import Image from 'next/image'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import SkillsResp from './components/SkillsResp';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='home h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 cursor-pointer'>
      <Navbar />
      <section id='hero' className=''>
        <Hero />
      </section>
      <section id='about' className='md:mt-20'>
       <About />
      </section>
      <section id='experience' className='md:mt-20'>
       <Experience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='skills'>
        <SkillsResp />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <GetInTouch />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
