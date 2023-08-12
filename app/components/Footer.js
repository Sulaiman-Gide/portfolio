import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
          Dev_Gide
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const defaultTheme = createTheme();

function Footer() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <img className='relative rounded-full h-10 w-10 mx-auto object-cover' src='/IMG_0490.JPG' alt='' />
        <Copyright className='text-gray-300 text-sm md:text-xl' sx={{ mt: 4, mb: 4 }} />
    </div>
  )
}

export default Footer