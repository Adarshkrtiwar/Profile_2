'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
      type: 'spring',
      stiffness: 100,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      type: 'spring',
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(74, 222, 128, 0.4)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const aboutRef = useRef(null); // Remove HTMLDivElement type to avoid SSR issues
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    if (!hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, hasAnimated]);

  const handleScrollTo = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.hash = 'about';
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-24 py-12 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 6,
          }}
        />
      </div>

      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 text-center space-y-6 z-10"
        variants={textVariants}
      >
        <div className="flex flex-col items-center gap-y-2">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Hello , I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 animate-text-shimmer bg-[length:200%_100%]">
              Adarsh
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200 mt-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Software Developer from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              New Delhi
            </span>
          </motion.h2>
        </div>

        <motion.p
          className="text-lg text-gray-300 max-w-xl mx-auto"
          variants={textVariants}
        >
          Crafting digital experiences with modern web technologies
        </motion.p>

        <motion.button
          onClick={handleScrollTo}
          className="relative px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-xl overflow-hidden group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative z-10">Know More</span>
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center z-10"
        variants={imageVariants}
        whileHover="hover"
      >
        <div className="relative w-[80%] sm:w-[60%] lg:w-[75%] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 hover:border-white/20 transition-all duration-300">
          <Image
            src="/Adarsh's Profile.png"
            alt="Adarsh"
            width={600}
            height={600}
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 mix-blend-overlay" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center cursor-pointer hover:border-teal-300 transition-colors"
          onClick={handleScrollTo}
        >
          <motion.div
            className="w-1 h-2 bg-teal-400 rounded-full mt-1"
            animate={{
              y: [0, 5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Dummy About Section for Scroll Reference */}
      <div
        ref={(node) => {
          aboutRef.current = node;
        }}
        className="absolute bottom-0 h-px w-px"
      />
    </motion.section>
  );
};

export default Hero;