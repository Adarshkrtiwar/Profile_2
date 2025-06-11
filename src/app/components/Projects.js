'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Project data (same as before)
const projectsDetails = [
  {
    id: 1,
    title: "YouTube Clone",
    description: "A YouTube clone with video streaming, search, and playlists.",
    description1: "Built with React, Next.js, TypeScript, and Tailwind CSS.",
    description2: "Integrated YouTube API for video data and playback.",
    githubLink: "https://github.com/Adarshkrtiwar/you_tube",
  },
  {
    id: 2,
    title: "Job Board Platform",
    description: "A modern job board with search, filters, and job applications.",
    description1: "Developed using Next.js, React, TypeScript, and Tailwind CSS.",
    description2: "Backend powered by Supabase for job data management.",
    githubLink: "https://github.com/Adarshkrtiwar/job-board",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce site with product filtering.",
    description1: "Built with Next.js, MERN stack, and Stripe for payments.",
    description2: "Deployed on Vercel with a focus on performance and UI/UX.",
    githubLink: "https://github.com/Adarshkrtiwar/e-commerce-platform",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecasting app with real-time updates.",
    description1: "Developed using React, TypeScript, and OpenWeather API.",
    description2: "Styled with Tailwind CSS for a clean, responsive UI.",
    githubLink: "https://github.com/Adarshkrtiwar/weather-app",
  },
  {
    id: 5,
    title: "Chat Application",
    description: "A real-time chat app with user authentication.",
    description1: "Built with React, Firebase, and Tailwind CSS.",
    description2: "Supports messaging with real-time updates.",
    githubLink: "https://github.com/Adarshkrtiwar/chat-app",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "A financial app to track expenses and generate reports.",
    description1: "Developed with Next.js, React, TypeScript, and Chart.js.",
    description2: "Uses LocalStorage for data persistence.",
    githubLink: "https://github.com/Adarshkrtiwar/expense-tracker",
  },
];

// Animation variants (unchanged)
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.section
      id="projects"
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
          My Awesome Work
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsDetails.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#222f30] dark:bg-[#222f30] bg-opacity-80 rounded-lg p-6 border border-customGreen hover:border-transparent transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => openModal(project)}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 text-sm md:text-base font-medium cursor-pointer"
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking the link
              >
                View Details →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative hidden md:block w-[90%] md:w-[50%] max-h-[400px] bg-[#222f30] text-white rounded-lg p-6 overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="leading-[25px] text-[16px] mb-2">{selectedProject.description}</p>
              {selectedProject.description1 && (
                <p className="leading-[25px] text-[16px] mb-2">{selectedProject.description1}</p>
              )}
              {selectedProject.description2 && (
                <p className="leading-[25px] text-[16px] mb-2">{selectedProject.description2}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;