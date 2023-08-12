import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col about relative text-center md:text-left md:flex-row max-w-7xl px-2 md:px-10 justify-evenly mx-auto items-center'>
            
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
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg sm:w-54 sm:h-95 md:w-54 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-8 md:px-10 px-2 aboutText'>
            <h4 className='text-4xl font-semibold'>Here is a  little background</h4>
            <p className='text-base text-gray-200 lg:text-xl'>
                I'm Sulaiman Ibrahim Gide, here's a little bit about me... I've been coding for over 5 years now. As a Front-End developer
                I've designed many websites and worked with startups and large corporations to help build scale thier companies.
                I have extensive knowledge of HTML, CSS, JavaScript, SQL, Google firebase, PHP, React and Next.Js combined with my communication and problem-solving skills.
                I have always been passionate about web development, which led me constantly seeking out new technologies and staying up-to-date on trends in the industry.
            </p>
        </div>
    </motion.div>
  )
}