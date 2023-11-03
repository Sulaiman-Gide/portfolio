import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2, 2, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 1.3,
        }}
        className='absolute flex justify-center items-center'>
        <div className='absolute border border-[#333333]/60 rounded-full h-[200px] w-[200px]  animate-ping'/>
        <div className='absolute border border-[#333333]/60 rounded-full h-[300px] w-[300px]  animate-ping ' />
        <div className='absolute border-2 border-teal-600 ocpacity-10 rounded-full h-[600px] w-[600px] '/>
        <div className='absolute border border-[#333333] rounded-full h-[750px] w-[750px] '/>
    </motion.div>
  )
}