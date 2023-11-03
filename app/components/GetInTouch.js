import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillTelephoneFill, BsGlobeAmericas } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';


function GetInTouch() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs.sendForm('service_7nrjujv', 'template_4nqcalh', form.current, 'f9W8uTslwTazQAdkD')
      .then((result) => {
        console.log(result.text);
        toast.success('Email successfully sent.');
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.text);
          toast.error(error.text);
          setLoading(false);
        });
      };
  return (
    <>
      <ToastContainer hideProgressBar={true} />
      <div className='flex justify-center items-center my-12 md:mt-5 py-5  px-1 sm:px-5 lg:px-20 select-none'>
        <div className='flex-grow w-60 px-2 lg:px-8 py-9 flex flex-col'>
          <h1 className='lg:text-5xl sm:text-3xl text-2xl font-bold text-center mx-auto lg:pb-3 pb-2 tracking-wider sm:tracking-[4px] text-gray-900 dark:text-white'>Contact Me</h1>
          <h1 className='text-lg sm:text-2xl text-center mb-2'>I have got what you need. Lets Talk More.</h1>
            <form className="w-full sm:w-4/5 mx-auto" ref={form} onSubmit={sendEmail}>
                <span className='flex flex-col w-full my-3'>
                    <label className='font-bold'>Full Name:</label>
                    <input type="text" name="user_name" className='border-2 p-2 mt-2 rounded-md' placeholder="Name"/>
                </span>

                <span className='flex flex-col w-full my-3'>
                    <label htmlFor="emailFrom" className='font-bold'>Email Address:</label>
                    <input type="email" className="border-2 p-2 mt-2 rounded-md" placeholder="person@example.com" name="user_email" />
                </span>

                <span className='flex flex-col w-full my-3'>
                    <label htmlFor="message" className='font-bold'>Message:</label>
                    <textarea className="border-2 p-2 mt-2 rounded-md" placeholder="message" name="message" />
                </span>

                <div className='w-full flex justify-start items-center'>
                    <button
                        type="submit"
                        className={`w-full text-white text-xs sm:text-base bg-teal-600 hover:bg-teal-800 mt-5 py-3 px-4 sm:px-8 rounded-md shadow-md dark:border-none`}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  </>
  )
}

export default GetInTouch