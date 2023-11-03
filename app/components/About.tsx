import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5 }}
        className='flex justify-center lg:justify-between items-center flex-col lg:flex-row w-full px-2 sm:px-5 lg:px-20 select-none'>
            
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
            className='mb-5 sm:mb-10 lg:mb-0 w-56 h-56 lg:w-2/5 lg:h-[400px] rounded-full lg:rounded-md object-cover '
        />
        <div className='lg:w-3/5 lg:pl-5 px-1'>
            <h1 className='font-bold text-gray-900 dark:text-white mb-2 w-full tracking-wider sm:text-2xl text-xl'>Professional Background:</h1>
            <div>
                <p className='text-sm sm:text-base text-gray-800 dark:text-gray-50 sm:px-1 tracking-wide'>
                     I am Sulaiman Ibrahim Gide, a dedicated Front-End Developer with a passion for delivering innovative digital solutions. Throughout my career, I have collaborated with startups and large corporations, playing a pivotal role in the design and development of impactful websites. With an extensive understanding of HTML, CSS, JavaScript, SQL, and PHP, I have contributed to the creation of tailored solutions that align with diverse business needs.
                </p>
                <p className='text-sm sm:text-base text-gray-800 dark:text-gray-50 sm:px-1 tracking-wide mt-2'>
                    In addition to my technical capabilities, I have a strong command of Tailwind CSS and Material-UI, allowing me to design and develop visually striking and user-friendly interfaces. My commitment to staying abreast of the latest industry trends and technologies enables me to consistently deliver cutting-edge solutions. Combined with effective communication and problem-solving skills, I strive to create seamless and engaging digital experiences that drive user engagement and elevate brand presence.
                </p>
            </div>
        </div>
    </motion.div>
  )
}