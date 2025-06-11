'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock data (replace with your actual imports from utils/constants)
const frontEndSkills = [
  { id: 1, name: "React", level: 90, icon: "⚛️" },
  { id: 2, name: "Next.js", level: 85, icon: "⏭️" },
  { id: 3, name: "Tailwind CSS", level: 80, icon: "🎨" },
  { id: 4, name: "TypeScript", level: 75, icon: "📝" },
  { id: 5, name: "JavaScript", level: 85, icon: "📜" },
];

const backEndSkills = [
  { id: 1, name: "Node.js", level: 75, icon: "🟢" },
  { id: 2, name: "Express", level: 70, icon: "🚂" },
  { id: 3, name: "MongoDB", level: 65, icon: "🍃" },
  { id: 4, name: "PostgreSQL", level: 60, icon: "🐘" },
  { id: 5, name: "GraphQL", level: 55, icon: "📊" },
];

const otherDevTools = [
  { id: 1, name: "Docker", level: 60, icon: "🐳" },
  { id: 2, name: "Webpack", level: 55, icon: "📦" },
  { id: 3, name: "Figma", level: 70, icon: "✏️" },
  { id: 4, name: "Jest", level: 65, icon: "🧪" },
  { id: 5, name: "Cypress", level: 50, icon: "🧭" },
];

const versionControl = [
  { 
    id: 1, 
    title: "Git", 
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" 
  },
  { 
    id: 2, 
    title: "GitHub", 
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
  },
  { 
    id: 3, 
    title: "GitLab", 
    image: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" 
  },
  { 
    id: 4, 
    title: "Jira", 
    image: "https://cdn.worldvectorlogo.com/logos/jira-3.svg" 
  },
  { 
    id: 5, 
    title: "Bitbucket", 
    image: "https://cdn.worldvectorlogo.com/logos/bitbucket.svg" 
  },
];
const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{skill.name}</h4>
      
      {/* Radial progress indicator */}
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#334155"
            strokeWidth="3"
            strokeDasharray="100, 100"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4ade80"
            strokeWidth="3"
            strokeDasharray={`${skill.level}, 100`}
            strokeLinecap="round"
          />
          <text
            x="18"
            y="20.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8"
            fontWeight="bold"
            dy=".3em"
          >
            {skill.level}%
          </text>
        </svg>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

const SkillsRepresentation = ({ data }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {data.map((skill) => (
      <SkillCard key={skill.id} skill={skill} />
    ))}
  </div>
);

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section
      id="skills"
      className="relative py-16 lg:py-28 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Main Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight text-white">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        {/* Skills Subsections */}
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Frontend Development
              </span>
            </h3>
            <motion.div variants={itemVariants}>
              <SkillsRepresentation data={frontEndSkills} />
            </motion.div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Backend Development
              </span>
            </h3>
            <motion.div variants={itemVariants}>
              <SkillsRepresentation data={backEndSkills} />
            </motion.div>
          </motion.div>

          {/* Other Tools */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Development Tools
              </span>
            </h3>
            <motion.div variants={itemVariants}>
              <SkillsRepresentation data={otherDevTools} />
            </motion.div>
          </motion.div>

          {/* Version Control */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-white">
              <span className="bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
                Version Control & Collaboration
              </span>
            </h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 md:gap-10"
              variants={containerVariants}
            >
             {versionControl.map((item) => (
  <motion.div
    key={item.id}
    className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-green-400/50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    variants={itemVariants}
  >
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mb-3">
      <Image
        src={item.image}
        alt={item.title}
        width={48}  // Adjust these values as needed
        height={48} // Adjust these values as needed
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    </div>
    <h4 className="text-center text-base md:text-lg font-medium text-white">
      {item.title}
    </h4>
  </motion.div>
))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;