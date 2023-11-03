import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
function Projects() {
  return (
    <div className='px-1 sm:px-2 xl:px-10 pt-10' id='projects'>
        <h1 className='lg:text-5xl sm:text-3xl text-2xl font-bold text-center mx-auto lg:pb-5 pb-2 tracking-wider sm:tracking-[4px] text-gray-900 dark:text-white'>Projects</h1>
        <div className='flex sm:flex-wrap flex-col sm:flex-row sm:gap-4 py-5 justify-center items-center sm:items-stretch'>
          <div className="w-full sm:w-[410px] mx-auto shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo1.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Full Stack Developer</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
              The restaurant website offers convenient online ordering, table reservations, and a comprehensive menu view. Leveraging cutting-edge technologies, including Next.js, Google Firebase, Tailwind CSS, Swiper JS, and Material UI, the site delivers an immersive and seamless user experience.              </h1>
            </div>
          </div>

          <div className="w-full sm:w-[410px] shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo3.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Full Stack Developer</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
                I developed a robust Point-of-Sale (POS) system that empowers managers to oversee all transactions across multiple sectors of the organization. This comprehensive system includes user management and permission control features, ensuring a fully secured environment for the company's operations.              </h1>
            </div>
          </div>

          <div className="w-full sm:w-[410px] shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo5.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Full Stack Developer</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
                I single-handedly orchestrated the comprehensive development of the entire website, leveraging cutting-edge technologies such as Next.js, Google Firebase, Tailwind CSS, and Material UI.
              </h1>
            </div>
          </div>

          <div className="w-full sm:w-[410px] shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo6.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Front-End Developer</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
                I led the comprehensive development of the entire website, leveraging cutting-edge technologies such as Next.js, Google Firebase, Tailwind CSS, and Material UI.
              </h1>
            </div>
          </div>

          <div className="w-full sm:w-[410px] shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo7.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Website Development</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
                I led the comprehensive development of the entire website, leveraging cutting-edge technologies such as Next.js, Google Firebase, Tailwind CSS, and Material UI.
              </h1>
            </div>
          </div>

          <div className="w-full sm:w-[410px] shadow-sm shadow-blue-500/20 border border-gray-50/95 dark:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 transition duration-300 transform hover:-translate-y-2">
            <img src="photo8.png" className='h-52 sm:h-60 w-full border'/>
            <div className='mt-3 w-full px-3 pb-2'>
              <div className="flex justify-between items-center mt-2 mb-3">
                <h1 className='font-bold text-base'>Website Development</h1>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-center">
                  <BsBoxArrowUpRight size={24} className="m-2 sm:m-3" />
                </a>
              </div>
              <h1 className='text-sm sm:text-base text-gray-700 w-full'>    
                I led the comprehensive development of the entire website, leveraging cutting-edge technologies such as Next.js, Google Firebase, Tailwind CSS, and Material UI.
              </h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects