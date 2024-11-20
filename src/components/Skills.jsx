import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import {
  Code2,
  Cog,
  Smartphone,
  Globe,
  Database,
} from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, index }) => {
  return (
    <motion.div
      className="shrink-0 w-[340px] h-[420px] relative group"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f35] to-[#0d3b5c] rounded-2xl" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-2xl" />
      
    
      <div className="relative h-full p-6 flex flex-col">
        
        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#1a4b6d]/50 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

       
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            
            <div className="p-3 bg-gradient-to-br from-[#1a4b6d] to-[#0d3b5c] rounded-xl
              shadow-lg shadow-black/20 border border-white/5 group-hover:border-white/10 
              transition-colors duration-300">
              <Icon className="w-7 h-7 text-[#4a9eff]" />
            </div>
           
            <h3 className="text-white text-2xl font-bold tracking-wide">
              {title}
            </h3>
          </div>
          
          <div className="h-[1px] w-full bg-gradient-to-r from-[#1a4b6d] via-[#4a9eff]/20 to-transparent
            mb-6" />
        </div>
        <div className="grid grid-cols-2 gap-3 flex-grow">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: skillIndex * 0.1 }}
              className="group/skill relative"
            >
              <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-3 h-full
                border border-white/5 hover:border-white/20 transition-colors duration-300
                overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a4b6d]/0 via-[#4a9eff]/5 to-[#1a4b6d]/0
                  opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                
                <span className="relative text-white/80 text-sm font-medium leading-snug
                  group-hover/skill:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ScrollingSkills = ({ skillsData }) => {
  const scrollRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = async () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      if (scrollWidth <= clientWidth) return;

      while (true) {
        await controls.start({
          x: [0, -(scrollWidth - clientWidth)],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    };

    scroll();

    const handleMouseEnter = () => controls.stop();
    const handleMouseLeave = () => scroll();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [controls]);

  return (
    <div className="relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-40 z-10
        bg-gradient-to-r from-[#001524] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 z-10
        bg-gradient-to-l from-[#001524] to-transparent pointer-events-none" />

      {/* Scrolling Container */}
      <div ref={scrollRef} className="overflow-hidden py-10">
        <motion.div 
          animate={controls}
          className="flex gap-8 w-fit px-4"
        >
          {skillsData.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
          {skillsData.map((category, index) => (
            <SkillCard 
              key={`duplicate-${index}`} 
              {...category} 
              index={skillsData.length + index} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Hard Skills",
      icon: Cog,
      skills: [
        "Data Structures",
        "Algorithm Design",
        "Object-Oriented Programming",
        "SOLID Principles",
        "Operating System",
        "Networking",
      ]
    },
    {
      title: "Programming",
      icon: Code2,
      skills: [
        "Java",
        "Dart",
        "Kotlin",
        "Python",
        "TypeScript",
        "JavaScript"
      ]
    },
    {
      title: "App Dev",
      icon: Smartphone,
      skills: [
        "Flutter",
        "Android",
        "Widget Testing",
        "API Integration",
        "State Management",
        "Klint"
      ]
    },
    {
      title: "Web Dev",
      icon: Globe,
      skills: [
        "React.js",
        "Node.js",
        "Astro",
        "RESTful APIs",
        "Tailwind CSS",
        "HTML 5"
      ]
    },
    {
      title: "Technologies",
      icon: Database,
      skills: [
        "Microsoft Azure",
        "MySQL",
        "Firebase",
        "Streamlit",
        "Hive",
        "GitHub"
      ]
    }
  ];

  return (
    <div className="relative pb-20"> 
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 
          via-[#0d3b5c]/5 to-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center relative mb-20"
      >
        <h2 className={`${styles.sectionText}`}>Skills</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="h-1 w-20 bg-gradient-to-r from-transparent via-[#4a9eff] to-transparent 
            mx-auto mt-4"
        />
      </motion.div>

      <ScrollingSkills skillsData={skillsData} />
    </div>
  );
};

export default SectionWrapper(Skills, "skills");