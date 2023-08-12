import React from 'react'

function Experience() {
  return (
    <div className=' text-center py-5 px-2'>
        <h2 className='lg:text-5xl text-lg font-bold text-center mx-auto uppercase text-gray-300 lg:pb-5 pb-2 tracking-[15px]'>Experience</h2>
        <div className='flex pt-5 flex-row flex-wrap justify-center items-center w-full'>
            <div className='card m-2 flex flex-col justify-center items-center p-2 md:px-1'>
              <img className='rounded-full h-32 w-32 mx-auto object-cover mb-2 border-2 border-gray-700 bg-black p-0' src='/nextjs2.png' alt='' />
              <div>
                  <h1 className='font-semibold py-3 text-xl sm:text-lg'>Web Developer | Aretecom</h1>
                  <h2 className='pb-3 text-gray-200 text-md sm:text-sm'>2022 - Present | Kano, Nigeria</h2>
                  <p className='text-md sm:text-xs '>
                    I developed the company's website both front-end and back-end. I later got promoted to the role of lead developer.
                  </p>
              </div>
            </div>
            <div className='card m-2 flex flex-col justify-center items-center p-2 md:px-1'>
              <img className='rounded-full h-32 w-32 mx-auto object-cover mb-2 border-2 border-gray-700 bg-black p-5' src='/node.png' alt='' />
              <div>
                  <h1 className='font-semibold py-3 text-xl sm:text-lg'>Front-End Developer | Nories</h1>
                  <h2 className='pb-3 text-gray-200 text-md sm:text-sm'>2021 - 2022 | Abuja, Nigeria</h2>
                  <p className='text-md sm:text-xs '>
                    I developed a website for the restaurant where clients can order from the
                    website and get it delivered to them with the functionality of customer
                    support and live chat system.
                  </p>
              </div>
            </div>
            <div className='card m-2 flex flex-col justify-center items-center p-2 md:px-1'>
              <img className='rounded-full h-32 w-32 mx-auto object-cover mb-2 border-2 border-gray-700 bg-black p-5' src='/react.png' alt='' />
              <div>
                  <h1 className='font-semibold py-3 text-xl sm:text-lg'>Web Developer | Ecommerce</h1>
                  <h2 className='pb-3 text-gray-200 text-md sm:text-sm'>2021 - 2022 | Kaduna, Nigeria</h2>
                  <p className='text-md sm:text-xs '>
                    I developed an ecommerce website where the company keeps track of all products and payments on a database. 
                    Also the website has the functionality of administrator panel, customer support and payment gateway.
                  </p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Experience