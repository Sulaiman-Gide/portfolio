import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function GetInTouch() {

  const form = useRef();

  const [notif, setNotify] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5ol7x7', 'template_d88pdck', form.current, 'f9W8uTslwTazQAdkD')
      .then((result) => {
          console.log(result.text);
          setNotify(toast("Successfully sent"))
      }, (error) => {
          console.log(error.text);
          setNotify(toast("Something went wrong"))
      });
  };
 
  return (
    <div className='h-screen flex items-center justify-center flex-col px-5 py-5'>
      <h1 className='font-bold text-gray-300 py-5 w-full text-center uppercase tracking-[15px] lg:text-5xl text-2xl'>Contact</h1>
      <div className='felx items-start justify-center'>
          <h2 className='text-xl md:text-3xl text-center font-extralight '>I have got what you need. Lets Talk More.</h2>
      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label htmlFor="emailFrom">Email:</label>
        <input type="email" className="emailFrom" placeholder="person@example.com" name="user_email" />
        <label htmlFor="message">Message:</label>
        <textarea className="messageBox" name="message" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="submitBtn" style={{marginTop: "5px"}}>
          Send
        </Button>
         <ToastContainer hideProgressBar={true}/>
      </form>
    </div>
  )
}

export default GetInTouch