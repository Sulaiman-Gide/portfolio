import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function Footer() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <img className='relative rounded-full h-10 w-10 mx-auto object-cover' src='/IMG_0490.JPG' alt='' />
        <h1 className="pt-3 pb-4 font-medium text-gray-200">Copyright © Dev_Gide 2023</h1>
    </div>
  )
}

export default Footer