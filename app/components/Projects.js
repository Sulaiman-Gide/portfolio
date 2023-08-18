import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link'

function Projects() {
  return (
    <div className='px-10 pt-10' id='projects'>
        <h1 className='font-bold text-gray-300 py-5 w-full text-center uppercase tracking-[15px] lg:text-5xl text-xl'>Projects</h1>
        <div className='flex justify-center xl:justify-between items-center flex-wrap mt-5 pb-5'>
          <figure className="hover-img">
            <img src="export.jpg"/>
            <figcaption>
              <Link target="_blank" href="https://www.aretecom.com/">
                <LaunchIcon  className="icon"/>
                <h1>Aretecom</h1>  
              </Link>
              <h2>2022-2023</h2>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src="export (4).jpg"/>
            <figcaption>
              <Link target="_blank" href="https://news-sulaiman-gide.vercel.app/">
                <LaunchIcon  className="icon"/>
                <h1>ALjazeera</h1>
              </Link>
              <h2>2021-2022</h2>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src="export5.jpg"/>
            <figcaption>
              <Link target="_blank" href="https://catering-sulaiman-gide.vercel.app/">
                <LaunchIcon  className="icon"/>
                <h1>Eatery</h1>
              </Link>
              <h2>2022-2023</h2>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src="export (1).jpg"/>
            <figcaption>
              <Link target="_blank" href="https://catering-sulaiman-gide.vercel.app/">
                <LaunchIcon  className="icon"/>
                <h1>Catering</h1>
              </Link>
              <h2>2021-2022</h2>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src="export (3).jpg"/>
            <figcaption>
              <Link target="_blank" href="https://movies-sulaiman-gide.vercel.app/">
                <LaunchIcon  className="icon"/>
                <h1>Movies</h1>
              </Link>
              <h2>2021-2022</h2>
            </figcaption>
          </figure>

          <figure className="hover-img">
            <img src="export7.jpg"/>
            <figcaption>
              <Link target="_blank" href="/">
                <LaunchIcon  className="icon"/>
                <h1>E-commerce</h1>
              </Link>
              <h2>2020-2021</h2>
            </figcaption>
          </figure>
        </div>
    </div>
  )
}

export default Projects