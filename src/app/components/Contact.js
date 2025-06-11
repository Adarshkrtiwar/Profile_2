'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
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

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    color: '#34D399', // customGreen
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section
      id="contact"
      className="relative py-12 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
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
      </div>

      <div className="max-w-lg mx-auto px-6 text-center z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight text-white mb-8"
          variants={titleVariants}
        >
          Let’s Build Something Amazing
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          variants={contentVariants}
        >
          I’m a Front-End Developer with expertise in crafting scalable, user-centric web applications using technologies like React, Next.js, and the MERN stack. With a strong focus on UI/UX design, performance optimization, and agile collaboration, I’m eager to contribute to innovative projects and deliver impactful solutions. Let’s connect to discuss opportunities, potential collaborations, or how I can help your team achieve its goals!
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="space-y-4"
          variants={contentVariants}
        >
          <p className="text-lg md:text-xl text-white">
            📧 <strong>Email:</strong>{' '}
            <motion.a
              href="mailto:adarsh7576061625@gmail.com"
              className="text-teal-400 hover:text-customGreen"
              whileHover="hover"
              variants={contentVariants}
            >
              adarsh7576061625@gmail.com
            </motion.a>
          </p>
          <p className="text-lg md:text-xl text-white">
            📞 <strong>Contact No:</strong>{' '}
            <motion.a
              href="tel:+916377544705"
              className="text-teal-400 hover:text-customGreen"
              whileHover="hover"
              variants={contentVariants}
            >
              +91 6377544705
            </motion.a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;