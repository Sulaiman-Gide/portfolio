import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col about relative text-center lg:text-left lg:flex-row max-w-7xl px-2 py-10 md:px-10 justify-evenly mx-auto items-center'>
            
        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 0.8,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src='/IMG_4462.JPG'
            className='lg:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover lg:rounded-lg sm:w-54 sm:h-95 md:w-54 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='md:px-10 px-1'>
            <h1 className='font-bold text-gray-300 py-5 w-full text-center uppercase tracking-[15px] lg:text-3xl text-xl'>Little background</h1>
            <p className='text-base text-gray-200 lg:text-xl'>
                I'm Sulaiman Ibrahim Gide, here's a little bit about me.  I've been coding for over 4 years now. As a Front-End developer, I've designed many websites and worked with startups and large corporations to help build and scale their companies. I have extensive knowledge of HTML, CSS, JavaScript, SQL, Google Firebase, PHP, React and Next.Js combined with my communication and problem-solving skills. I have always been passionate about web development, which led me to constantly seek out new technologies and stay up-to-date on trends in the industry.
            </p>
        </div>
    </motion.div>
  )
}