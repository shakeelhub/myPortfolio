import React from 'react';
import { motion } from 'framer-motion';

const Anim = () => {
  const text = "ABOUT ME ✨";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hover: { scale: 1.2, color: "#fffff", transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.h1
      className="text-2xl font-bold md:text-4xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-2"
          whileHover="hover"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Anim;
