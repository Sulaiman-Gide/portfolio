import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex top-0 py-5 px-5 items-start justify-between sticky mx-auto max-w-7xl z-50 xl:items-center navbar'>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.2,
          }}
          className='flex flex-row items-center'>
            <SocialIcon target="_blank" url="https://www.youtube.com/" network="youtube" fgColor="gray" bgColor="transparent" />
            <SocialIcon target="_blank" url="https://twitter.com/Dev_Gide" network="twitter" fgColor="gray" bgColor="transparent" />
            <SocialIcon target="_blank" url="https://www.instagram.com/sulaiman_gide/" network="instagram" fgColor="gray" bgColor="transparent" />
            <SocialIcon target="_blank" url="https://web.facebook.com/" network="facebook" fgColor="gray" bgColor="transparent" />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.2,
          }}
          className='flex flex-row items-center cursor-pointer'>
            <SocialIcon url="#contact" network="email" fgColor="gray" bgColor="transparent" />
            <Link href="#contact" >
              <button className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</button>
            </Link>
        </motion.div>
    </div>
  )
}

export default Navbar