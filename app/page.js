"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Services';
import Skills from './components/Skills';
import SkillsResp from './components/SkillsResp';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

export default function Home() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="dark:bg-gray-900"
    >
      <AiOutlineCloseCircle
        onClick={toggleDrawer(anchor, false)}
        className='text-2xl font-bold my-3 mr-3 dark:text-white'
        style={{ float: 'right' }}
      />
      <h1 className='font-bold text-gray-800 dark:text-white uppercase tracking-[7px] text-2xl text-center my-8'>Dev_<span className='text-teal-600'>Gide</span></h1>
      <List className='px-5 flex flex-col justify-between overflow-y-auto pb-20'>
        <div className='flex flex-col'>
          <Link href="/" className=" py-4 pl-3 text-base text-gray-700 dark:text-slate-50 font-bold tracking-[2px]">Home</Link>

          <Link href="/" className="border-t-2 py-4 pl-3 text-base text-gray-700 dark:text-slate-50 font-bold tracking-[2px]">About</Link>

          <Link href="/" className="border-t-2 py-4 pl-3 text-base text-gray-700 dark:text-slate-50 font-bold tracking-[2px]">Skills</Link>
          
          <Link href="/" className="border-t-2 py-4 pl-3  text-gray-700 dark:text-slate-50 tracking-[2px] font-bold">Portfolio</Link>

          <Link href="/" className="border-y-2 py-4 pl-3  text-gray-700 dark:text-slate-50 tracking-[2px] font-bold">Contact Me</Link>
        </div>
      </List>
    </Box>
  );
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 cursor-pointer bg-white dark:bg-black'>
      <section className='bg-slate-50/50 dark:bg-gray-800 py-5 px-5 sm:px-12 w-full flex justify-between items-center z-20'>
        <h1 className='font-bold uppercase tracking-[7px] lg:text-3xl text-xl'>Dev_<span className='text-teal-600'>Gide</span></h1>
        <div className='hidden lg:block'>
          <Link href="/" className="text-base  md:hover:text-gray-400 font-semibold dark:text-white mx-2 tracking-[2px]">Home</Link>

          <Link href="/" className="text-base md:text-lg md:hover:text-gray-400 font-semibold dark:text-white mx-2 tracking-[2px]">About</Link>

          <Link href="/" className="text-base md:text-lg md:hover:text-gray-400 font-semibold dark:text-white mx-2 tracking-[2px]">Services</Link>
          
          <Link href="/" className="text-base md:text-lg md:hover:text-gray-400 font-semibold dark:text-white ml-2 tracking-[2px]">Portfolio</Link>
        </div>

        <Link href="/" className="hidden lg:block py-1 px-3 border-2 border-teal-600 rounded-md text-base transition-all hover:bg-teal-600 md:text-lg hover:text-white font-semibold dark:text-white ml-2 tracking-[2px]">Contact Me</Link>

        <div className='lg:hidden'>
          {['top'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} className="text-2xl dark:text-white hover:opacity-50"/>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section id='hero' className='select-none'>
        <Hero />
      </section>
      <section id='about' className='md:mt-20'>
       <About />
      </section>
      <section id='experience' className='md:mt-20'>
       <Experience />
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
