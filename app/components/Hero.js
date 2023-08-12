import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';

function Hero() {
    const [text, count ] = useTypewriter ({
        words: [
            "Hi, The Name's Dev_Gide",
            "Guy-who-loves-learning", 
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 1500,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='/IMG_0490.JPG' alt='' />
        <div className='z-20 heroText'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] sm:tracking-[10px]'>Front End Developer</h2>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#094b53' />
            </h1>
            <div className='pt-5 btnDiv'>
                <Link href="#about" >
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience" >
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills" >
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects" >
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero