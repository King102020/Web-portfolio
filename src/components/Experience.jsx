import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BriefcaseIcon, ChevronRightIcon } from "lucide-react";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        cursor-pointer mb-6 p-6 max-w-2xl relative rounded-xl
        bg-gradient-to-br from-slate-800/50 to-slate-900/50
        border border-slate-700/30 backdrop-blur-sm
        transition-all duration-300
        ${isActive ? "shadow-xl shadow-blue-500/10" : ""}
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isActive ? "bg-blue-500/20" : "bg-slate-700/20"}`}>
          <BriefcaseIcon className={`w-6 h-6 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
        </div>

        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${isActive ? "text-blue-400" : "text-slate-400"}`}>
            {experience.title}
          </h3>
          <p className={`text-base ${isActive ? "text-slate-200" : "text-slate-400"}`}>
            {experience.company_name}
          </p>
          <p className="text-sm text-slate-500 mt-1">{experience.date}</p>
        </div>

        <ChevronRightIcon 
          className={`w-5 h-5 mt-2 transition-transform duration-300 
          ${isActive ? "text-blue-400 rotate-90" : "text-slate-600"}`}
        />
      </div>

      {/* Mobile Details */}
      {isMobile && isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 pt-6 border-t border-slate-700/30"
        >
          <ul className="space-y-4">
            {experience.details.map((detail, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500/50 flex-shrink-0" />
                <p 
                  className="text-slate-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: detail }}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-5 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 backdrop-blur-sm"
    >
      <ul className="space-y-6">
        {experience.details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 group"
          >
            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
            <p 
              className="flex-1 text-slate-300 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pb-20">
      <motion.div
        variants={textVariant()}
        className="text-center mb-16"
      >
        <h2 className={`${styles.sectionText} relative inline-block`}>
          Experience
          <motion.div
            className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
          />
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`relative grid ${isMobile ? "grid-cols-1" : "grid-cols-[1fr,1.5fr]"} gap-8`}>
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                onClick={() => setSelectedJob(experience)}
                isActive={selectedJob === experience}
                isMobile={isMobile}
              />
            ))}
          </div>

          {!isMobile && (
            <div className="relative">
              <div className="sticky top-32">
                <ExperienceDetails experience={selectedJob} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");