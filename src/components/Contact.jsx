import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Github, Linkedin, Mail, Twitter, FileDown, ExternalLink } from 'lucide-react';
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/parag--jain/',
      color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/King102020',
      color: 'hover:text-[#2DBA4E] hover:bg-[#2DBA4E]/10',
      description: 'Check out my projects'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/Bubble_Trouper',
      color: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10',
      description: 'Follow me for updates'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:paragjain102020@gmail.com',
      color: 'hover:text-[#EA4335] hover:bg-[#EA4335]/10',
      description: 'Drop me a message'
    }
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <footer ref={containerRef} className="relative overflow-hidden pt-20 pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0a1f35] to-[#050816]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
        {/* Animated stars/particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random()
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            animate={isInView ? { scale: [0.5, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always excited to collaborate on interesting projects and explore new opportunities.
              Let's create something amazing together!
            </p>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            animate={floatingAnimation}
            className="w-full max-w-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                     backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16
                     hover:border-white/20 transition-colors duration-300 group"
          >
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-semibold text-white">Get My Resume</h3>
              <p className="text-gray-400 text-center">
                Download my resume to learn more about my experience and skills
              </p>
              <motion.a
                href="/resume.pdf"
                download="Parag_Jain_Resume.pdf"
                className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 
                         text-blue-400 px-8 py-4 rounded-xl transition-all duration-300
                         border border-blue-500/30 hover:border-blue-500/50 group
                         hover:scale-105 active:scale-95"
                whileHover={{ y: -3 }}
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-medium">Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex flex-col items-center p-6 rounded-xl
                           bg-white/5 backdrop-blur-sm border border-white/10
                           ${link.color} transition-all duration-300
                           hover:border-white/20 hover:-translate-y-2`}
              >
                <div className="p-4 rounded-full bg-white/5 mb-4">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-4">{link.description}</p>
                <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="relative text-center space-y-4"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-8"></div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Parag Jain. All rights reserved.
          </p>
      
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Contact, "contact");