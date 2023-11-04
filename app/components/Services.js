import React from 'react'
import { MdComputer } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { GiAutoRepair } from 'react-icons/gi';

function Experience() {
  return (
    <div className='mt-12 md:mt-5 py-5 px-2 sm:px-5 lg:px-20 select-none'>
      <h1 className='lg:text-lg text-sm text-center mx-auto pb-2 text-teal-600'>What I am Expert In</h1>
      <h2 className='lg:text-5xl text-3xl font-bold text-center mx-auto lg:pb-5 pb-2 tracking-wider sm:tracking-[4px] text-gray-900 dark:text-white'>My Service</h2>
      <div className='flex md:flex-wrap flex-col sm:flex-row md:gap-4 p-5 px-0 sm:px-5 justify-center sm:justify-between items-center sm:items-stretch'>  

          <div className='md:flex-1 shadow-sm w-full sm:w-[300px] bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 py-5 px-2 sm:px-5 border dark:border-none rounded-md'>
            <MdComputer size={100} className="text-gray-900 dark:text-gray-50 text-center p-5 border dark:border-gray-500 rounded-full" />
            <div>
              <h1 className='font-semibold py-3 text-xl sm:text-lg text-center my-1'>Web Development</h1>
              <p className='text-sm tracking-wide text-center text-gray-800 dark:text-gray-50'>
                I am committed to crafting dynamic and innovative digital experiences. With an adept understanding of the latest technologies and design principles, I specialize in creating seamless, user-friendly websites that engage and inspire. I am ready to bring your digital vision to life.
              </p>
            </div>
          </div>

          <div className='md:flex-1 shadow-sm w-full sm:w-[300px] bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 py-5 px-2 sm:px-5 border dark:border-none rounded-md'>
            <FiSmartphone size={100} className="text-gray-900 dark:text-gray-50 text-center p-5 border dark:border-gray-500 rounded-full" />
            <div>
              <h1 className='font-semibold py-3 text-xl sm:text-lg text-center my-1'>Responsive Design</h1>
              <p className='text-sm tracking-wide text-center text-gray-800 dark:text-gray-50'>
                I prioritize responsive design to ensure seamless user experiences across various devices and screen sizes. By integrating fluid layouts, flexible images, and media queries. I aim to deliver a compelling and intuitive browsing experience for every visitor, regardless of their chosen device.
              </p>
            </div>
          </div>
          <div className='md:flex-1 shadow-sm w-full sm:w-[300px] bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 flex flex-col justify-start items-center m-2 md:m-0 py-5 px-2 sm:px-5 border dark:border-none rounded-md'>
            <GiAutoRepair size={100} className="text-gray-900 dark:text-gray-50 text-center p-5 border dark:border-gray-500 rounded-full" />
            <div>
              <h1 className='font-semibold py-3 text-xl sm:text-lg text-center my-1'>Upgrade Existing Websites</h1>
              <p className='text-sm tracking-wide text-center text-gray-800 dark:text-gray-50'>
                Proficient in website enhancement, I specialize in optimizing e-commerce platforms to elevate product and payment management. I seamlessly integrate robust admin panels, enhance customer support systems, and implement secure payment gateways to deliver a comprehensive and refined online experience, ultimately improving overall aesthetics and user engagement.              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Experience