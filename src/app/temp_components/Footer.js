'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    color: '#34D399', // Tailwind green-400
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.footer
      className="relative py-8 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
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

      {/* Foreground content with higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-sm md:text-base mb-4 md:mb-0">
          © {currentYear} Adarsh Kr Tiwari. All rights reserved.
        </p>

        <div className="flex space-x-6 md:space-x-8">
          {[
            { name: 'GitHub', url: 'https://github.com/Adarshkrtiwar' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adarsh-kr-tiwari-381002218/' },
            { name: 'X', url: 'https://twitter.com/adarshkrtiwari' },
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm md:text-base hover:text-customGreen transition-colors"
              whileHover="hover"
              variants={linkVariants}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
