import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { pixelPeep, newsApp, streamlitDashboard } from "../assets";

const projects = [
  {
    name: "Pixel Peep",
    description: "A 2D Pixel Art Platformer game with beautiful visuals and engaging gameplay mechanics.",
    image: pixelPeep,
    githubLink: "https://github.com/King102020/Pixel-Peep",
    features: [
      "Smooth 2D platformer mechanics",
      "Pixel art graphics",
      "Multiple levels",
      "State management integration"
    ],
    techStack: ["Flutter", "Flame", "Dart", "Provider", "Bloc"]
  },
  {
    name: "News App",
    description: "A feature-rich Kotlin-based Android news application that keeps users informed with the latest headlines.",
    image: newsApp,
    githubLink: "https://github.com/King102020/News_App",
    features: [
      "Categorized news display",
      "Dark mode support",
      "News sharing functionality",
      "Bookmark system",
      "Text-to-Speech integration"
    ],
    techStack: ["Kotlin", "MVVM", "Room Database", "Retrofit", "Picasso", "XML"]
  },
  {
    name: "Streamlit Data Dashboard",
    description: "A comprehensive data visualization dashboard built using Streamlit and Python.",
    image: streamlitDashboard,
    githubLink: "#",
    features: [
      "Interactive data visualizations",
      "Form components",
      "Real-time data updates",
      "Responsive design",
      "Advanced filtering options"
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"]
  }
];

const ProjectCard = ({
  index,
  name,
  description,
  image,
  githubLink,
  techStack,
  features
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        animate={{
          background: ["rgba(59, 130, 246, 0.1)", "rgba(147, 51, 234, 0.1)"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left side - Project details */}
        <motion.div 
          className="lg:w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <motion.h3 
              className="text-white font-bold text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              whileHover={{ scale: 1.05 }}
            >
              {name}
            </motion.h3>
            
            <motion.p 
              className="text-secondary text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-white font-medium text-xl mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-white font-medium text-xl mb-4">Tech Stack:</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <motion.span 
                    key={idx}
                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium text-lg
                         hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Right side - Project image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='px-4 md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400`}>
          Portfolio
        </h2>
      </motion.div>

      <div className='flex flex-col gap-20'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");