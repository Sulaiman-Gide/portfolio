import React from 'react'

function SkillsResp() {
  return (
    <div className='skillsResp py-5 px-5'>
        <h1 className='font-bold text-gray-300 py-5 w-full text-center uppercase tracking-[15px] lg:text-5xl text-xl'>Skills</h1>
        <div className='flex pt-5 flex-row flex-wrap justify-center items-center w-full'>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-5 bg-white' src='/next.png' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-5 bg-white' src='/node.png' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-5 bg-white' src='/react.png' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-0 bg-white' src='/php2.png' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-3 bg-white' src='/sql.jfif' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-5 bg-white' src='/tailwind.png' alt='' />
            </div>
            <div className='p-2 md:px-1'>
              <img className='rounded-full h-28 w-28 object-cover m-2 border p-5 bg-white' src='/firebase.png' alt='' />
            </div>
        </div>
    </div>
  )
}

export default SkillsResp