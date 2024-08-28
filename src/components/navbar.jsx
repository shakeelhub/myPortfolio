"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './navLink'
import '../styles/navbar.css'
import useSound from 'use-sound'
import { motion, stagger } from 'framer-motion'
import SoundButton from './soundButton'


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('music.mp3');

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleDivClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    }
  };
  

  const buttonStyles = {
    padding: '12px 24px',
    fontSize: '18px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s, transform 0.2s',
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }


  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>

      {/* LINKS */}
      <div className='hidden md:flex gap-4' style={{ marginLeft: '-90px' }}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center lg:-ml-[70px] md:ml-0 ml-0'>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>MD</span>
          <span className='w-13 h-8 rounded bg-white text-black flex items-center justify-center p-2'>Shakeel</span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className='hidden md:flex gap-7 justify-center align-middle'>
        <Link href="https://github.com/shakeelhub" className='mt-3'>
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/md-shakeel-71b415265" className='mt-3'>
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/shakeel_stagram" className='mt-3'>
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://facebook.com/" className='mt-3'>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>

        <SoundButton />

      </div>

      {/* <div> <button onClick={togglePlay}  className="flex items-center gap-2 p-3 text-lg bg-black-500 text-white rounded shadow transition duration-200 ease-in-out transform hover:bg-black-600 focus:outline-none">
        <img  src={isPlaying ? 'stop.svg' : 'play.svg'}   className="w-6 h-6"/>
        </button></div> */}

      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col justify-between z-90 relative'
          onClick={(() => setOpen((prev) => !prev))}
          style={{ zIndex: 60 }}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-12 text-4xl z-50'
            style={{ zIndex: 50 }}
          >
            {links.map(link => (
              <motion.div
                key={link.title}
                className='transition-transform duration-300'
                whileHover={{ y: -10 }}  // Moves the link 10px up on hover
                initial={{ y: 0 }}      // Ensures initial position is set
              >
                <Link href={link.url}>
                  <span className='text-white hover:text-gray-300'>{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
