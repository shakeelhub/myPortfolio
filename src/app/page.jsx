"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import AnimatedHeading from "@/components/animatedHeader";

const RevealingText = () => {
  return (
    <p className="md:text-xl reveal-text">
      Skilled web developer creating responsive, user-friendly websites. Expert in front-end 
      and back-end technologies, committed to transforming ideas into high-quality digital solutions
      that enhance user engagement and experience.
    </p>
  );
};



const Homepage = () => {
  return (
    <motion.div
     className="h-full"
     initial={{y:"-200vh"}}
     animate={{y:"0%"}}
     transition={{duration:1}}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row" style={{marginBottom:"50px"}}>
      {/* IMAGE CONTAINER*/}
      <div className="h-1/2 relative lg:h-full lg:w-1/2" style={{zIndex:"0"}}>
      <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>

       {/* TEXT CONTAINER*/}
       <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 pb-10">
       {/* TITLE */}
     
       <AnimatedHeading/>
       {/* DESC */}
       <RevealingText/>
       <div className="flex gap-4 w-full">

       <Link href="/portfolio" passHref>
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-transparent hover:text-black  transition-colors duration-300">View My Work</button>
        </Link>



        <Link href="/contact" passHref>
        <button className="p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white transition-colors duration-300">Contact Me</button>
        </Link>

       </div>
       </div>
  </div>
    </motion.div>
  
  )
};

export default Homepage;
