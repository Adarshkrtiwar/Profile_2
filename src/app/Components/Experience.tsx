'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Doodhvale Farms Pvt. Ltd., New Delhi",
    duration: "May 2024 – Present",
    points: [
      "Promoted to full-time role after successful internship based on performance and contribution.",
      "Built and deployed 15+ responsive web applications using React.js, Next.js, and Tailwind CSS with emphasis on performance and UI/UX (Spotify-like experience).",
      "Managed API integrations and state handling via Redux Toolkit and React Query.",
      "Implemented features like authentication, server-side rendering, and dynamic routing using Next.js.",
      "Deployed projects using Vercel, collaborated on designs via Figma, and followed clean code practices.",
      "Contributed to GitHub-based open source and internal team projects with agile methodology.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Doodhvale Farms Pvt. Ltd., Remote",
    duration: "March 2024 – May 2024",
    points: [
      "Developed core modules of internal customer dashboard using React and Tailwind CSS.",
      "Participated in sprint planning, code reviews, and collaborated closely with senior developers.",
      "Learned production-level coding practices including Git workflows, testing, and component reusability.",
      "Built reusable components for the product catalogue and customer profile pages.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Technex IIT BHU, Remote",
    duration: "June 2022 – July 2022",
    points: [
      "Worked on Real Estate Price Prediction model achieving 0.818 accuracy.",
      "Applied GridSearchCV, Linear Regression, and data preprocessing for model optimization.",
    ],
  },
  {
    title: "Web Development Trainee",
    company: "NIELIT, Remote",
    duration: "May 2021 – June 2021",
    points: [
      "Developed a responsive web music player with core playback functionality using HTML, CSS, and JavaScript.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Professional <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-600 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:w-full`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-5 h-5 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-white dark:border-gray-800 z-10"></div>

              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                <div className={`p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'}`}>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {exp.duration}
                  </p>
                  
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        {index % 2 === 0 ? (
                          <>
                            <span className="mr-2 mt-1 text-indigo-500 dark:text-indigo-400">
                              <FiArrowRight className="inline-block" />
                            </span>
                            {point}
                          </>
                        ) : (
                          <>
                            {point}
                            <span className="ml-2 mt-1 text-indigo-500 dark:text-indigo-400">
                              <FiArrowRight className="inline-block transform rotate-180" />
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;