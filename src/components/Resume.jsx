import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <h2 className={`${styles.sectionText} text-center mb-8`}>
          Resume
        </h2>
      </motion.div>

      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <div className="bg-tertiary rounded-2xl p-10 text-center">
            <p className="text-white text-lg mb-8">
              Download my resume to learn more about my professional experience, skills, and qualifications.
            </p>
            <a
              href="/resume.pdf"
              download="Parag_Jain_Resume.pdf"
              className="inline-flex items-center gap-2 bg-quaternary py-4 px-8 
                       text-white font-bold rounded-xl hover:bg-opacity-80 
                       transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-lg">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume", "py-16"); 