"use client"

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Reach Out ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm(
      "service_l2645ng", 
      "template_6nx8fui", 
      form.current, 
      {
        publicKey: 'LiOBJZog2uoRR5h4g',
      } 
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
    }, (error) => {
      console.error('Failed to send email:', error);
      setError(true);
    });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-20'>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            💥
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
           className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-20 lg:p-24'
          ref={form}
          onSubmit={sendEmail}

        >
          <span>Dear Md Shakeel,</span>
          <input
            placeholder='Say me About Your Project 😇...'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none p-2'
            name='user_message'
            required
          />
          <span>Your Contact Details:</span>
          <input
          placeholder='How can i contact you 🤩'
            type='email'
            className='bg-transparent border-b-2 border-b-black outline-none p-2'
            name='user_email'
            required
          />
          <span>Regards✨</span>
          <button
            type="submit"
            className="bg-purple-200 hover:bg-purple-300 transition-colors duration-300 rounded font-semibold text-gray-600 p-4"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully✅!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong❌!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
