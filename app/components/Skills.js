import React from 'react'
import { motion } from 'framer-motion';

function Skills() {
  
  return (
    <div className='skills px-10 py-5'>
        <h1 className='font-bold text-gray-300 py-5 w-full text-center uppercase tracking-[15px] lg:text-5xl text-xl'>Skills</h1>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-900 py-3 px-6 shadow-dark '
           whileHover={{scale: 1.05}}
          >
            Web
          </motion.div>
          
          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-20vw", y:"2vw"}}
            transition={{ duration: 1.5}}
          >
            HTML
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-5vw", y:"-10vw"}}
            transition={{ duration: 1.5}}
          >
            CSS
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"20vw", y:"6vw"}}
            transition={{ duration: 1.5}}
          >
            Javascript
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-35vw", y:"5vw"}}
            transition={{ duration: 1.5}}
          >
            JQuery
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-28vw", y:"-3vw"}}
            transition={{ duration: 1.5}}
          >
            PHP
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"0vw", y:"11vw"}}
            transition={{ duration: 1.5}}
          >
            SQL
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-20vw", y:"-15vw"}}
            transition={{ duration: 1.5}}
          >
            React
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"15vw", y:"-12vw"}}
            transition={{ duration: 1.5}}
          >
            Bootstrap
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"32vw", y:"-5vw"}}
            transition={{ duration: 1.5}}
          >
            Material UI
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"0vw", y:"-22vw"}}
            transition={{ duration: 1.5}}
          >
            Next.Js
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"-25vw", y:"18vw"}}
            transition={{ duration: 1.5}}
          >
            Tailwind CSS
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"41vw", y:"7vw"}}
            transition={{ duration: 1.5}}
          >
            Ghost CMS
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full font-bold md:bg-[#ffff] text-gray-100 md:text-gray-900 md:py-3 md:px-6 shadow-dark absolute z-38 lg:py-2 lg:px-4 lg:text-lg text-sm py-1.5 px-3 bg-[#fff0]'
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:"18vw", y:"20vw"}}
            transition={{ duration: 1.5}}
          >
            Firebase
          </motion.div>
        </div>
    </div>
  )
}

export default Skills