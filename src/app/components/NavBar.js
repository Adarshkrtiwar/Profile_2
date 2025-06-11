'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -50 },
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
    y: -2,
    color: '#34D399', // customGreen
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const iconVariants = {
  hover: {
    rotate: 90,
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };

    if (mounted) {
      handleSmoothScroll();
    }
  }, [mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#222f30] dark:bg-[#222f30] bg-opacity-90 backdrop-blur-md z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold font-inter text-white">Adarsh</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover="hover" variants={linkVariants}>
              <Link
                href={link.href}
                className="text-white text-sm md:text-base font-medium hover:text-customGreen transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {/* Theme Toggle */}
          <motion.div whileHover="hover" variants={iconVariants}>
            {theme === 'dark' ? (
              <MdOutlineLightMode
                className="text-xl text-white hover:text-yellow-400 cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <MdOutlineDarkMode
                className="text-xl text-white hover:text-blue-800 cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.div whileHover="hover" variants={iconVariants}>
            {theme === 'dark' ? (
              <MdOutlineLightMode
                className="text-xl text-white hover:text-yellow-400 cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <MdOutlineDarkMode
                className="text-xl text-white hover:text-blue-800 cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </motion.div>
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-[#222f30] dark:bg-[#222f30] bg-opacity-90 backdrop-blur-md px-6"
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col space-y-4 py-4">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover="hover" variants={linkVariants}>
              <Link
                href={link.href}
                className="text-white text-base font-medium hover:text-customGreen transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}