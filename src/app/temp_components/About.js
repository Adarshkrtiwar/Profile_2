'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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

      {/* About Content */}
      <motion.div
        className="w-full max-w-3xl text-center space-y-8 z-10"
        variants={textVariants}
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight text-white"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          About Me
        </motion.h2>

       <motion.p
  className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed"
  variants={textVariants}
>
  Hi there! I&apos;m a seasoned Front-End Developer with expertise in UI/UX design, staying updated on industry trends. I&apos;m passionate about crafting exceptional web experiences and proficient in Front-End Technologies. Additionally, I can handle MERN stack technologies. I thrive on challenges, love collaborative projects, and invite you to explore my portfolio. Let&apos;s connect for exciting web development opportunities!
</motion.p>


       <Link href="/contact">
  <motion.button
    className="relative px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-xl overflow-hidden group"
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <span className="relative z-10">Let&apos;s Connect</span>
    <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </motion.button>
</Link>
      </motion.div>
    </motion.section>
  );
};

export default About;