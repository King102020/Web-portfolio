import { motion } from "framer-motion";
import React, { useState } from "react";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="relative bg-tertiary/80 backdrop-blur-sm rounded-xl border border-slate-700/30 
                 hover:border-blue-500/40 transition-all duration-300 overflow-hidden group"
    >
      {/* Header - Always Visible */}
      <div 
        className="p-4 sm:p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 
                               transition-colors duration-300 mb-1">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-400 font-medium text-sm sm:text-base mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.company_name}</span>
                </div>
              </div>
              
              {/* Toggle Icon */}
              <div className="ml-4 p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
                              transition-colors duration-200 sm:hidden">
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-blue-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-blue-400" />
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{experience.date}</span>
              {experience.date.includes('Present') && (
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs 
                               rounded-full border border-green-500/30">
                  Current
                </span>
              )}
            </div>
          </div>

          {/* Desktop Toggle */}
          <div className="hidden sm:block p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
                          transition-colors duration-200">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            )}
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-700/30">
          <ul className="space-y-3 mt-4">
            {experience.details.map((detail, detailIndex) => (
              <motion.li
                key={detailIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: detailIndex * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p 
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: detail }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState(new Set([0])); // First card expanded by default

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div>
      {/* Header */}
      <motion.div 
        variants={textVariant()}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className={`${styles.sectionText} mb-4`}>
          Experience
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
          My professional journey in software development
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
              isExpanded={expandedCards.has(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">2+</div>
              <div className="text-slate-400 text-sm sm:text-base mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-slate-400 text-sm sm:text-base mt-1">Users Impacted</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">3</div>
              <div className="text-slate-400 text-sm sm:text-base mt-1">Companies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");