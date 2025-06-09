'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';

// Mock data (replace with your actual whatIOffer data)
const whatIOffer = [
  { id: 1, icon: "🖥️", title: "Front-End Development", desc: "Building responsive and modern web interfaces." },
  { id: 2, icon: "🎨", title: "UI/UX Design", desc: "Crafting intuitive and visually appealing designs." },
  { id: 3, icon: "⚙️", title: "MERN Stack", desc: "Full-stack development with MongoDB, Express, React, and Node.js." },
  { id: 4, icon: "🚀", title: "Performance Optimization", desc: "Ensuring fast and efficient web applications." },
  { id: 5, icon: "🤝", title: "Collaborative Projects", desc: "Working seamlessly in team environments." },
];

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

const cardVariants = {
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
    y: -5,
    boxShadow: '0 15px 30px -5px rgba(74, 222, 128, 0.3)',
    borderColor: 'rgba(74, 222, 128, 0.5)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const WhatIOffer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mounted, setMounted] = useState(false); // Track if component is mounted on client
  const sliderRef = useRef(null);
  const controls = useAnimation();
  const { theme } = useTheme();

  // Set mounted state after component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const scrollSlider = () => {
      if (!isHovered && sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth / 2; // Divided by 2 because we duplicated the items
        const clientWidth = sliderRef.current.clientWidth;

        setScrollPosition((prevPosition) => {
          if (prevPosition >= scrollWidth - clientWidth) {
            return 0; // Reset to start for infinite loop
          }
          return prevPosition + 1; // Adjust speed by changing this value
        });
      }
    };

    const interval = setInterval(scrollSlider, 15); // Smooth scrolling speed
    return () => clearInterval(interval);
  }, [isHovered]);

  // Trigger animation on mount
  useEffect(() => {
    if (mounted) {
      controls.start('visible');
    }
  }, [controls, mounted]);

  // Don't render theme-dependent styles until mounted
  if (!mounted) {
    return null; // Avoid rendering on server to prevent hydration mismatch
  }

  return (
    <motion.section
      id="what-i-offer"
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

      {/* Header Title */}
      <motion.div
        className="text-center mb-8 md:mb-12 z-10"
        variants={titleVariants}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight text-white">
          What I Offer
        </h2>
      </motion.div>

      {/* Slider Container */}
      <div className="overflow-hidden relative z-10">
        <motion.div
          ref={sliderRef}
          className="flex gap-x-6 md:gap-x-8 select-none"
          animate={{ x: -scrollPosition }}
          transition={{ ease: 'linear', duration: 0.015 }}
        >
          {/* Duplicate items for infinite scroll */}
          {[...whatIOffer, ...whatIOffer].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className={`flex-none w-[90%] sm:w-[350px] md:w-[400px] px-6 py-6 md:px-8 md:py-8 rounded-lg cursor-pointer border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#222f30] border-customGreen hover:border-transparent'
                  : 'bg-indigo-100 border-indigo-300 hover:border-indigo-400'
              }`}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatIOffer;