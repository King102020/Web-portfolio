import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";
import { Github, Mail, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'unset';
  }, [toggle]);

  const handleNavClick = (id) => {
    const wrapper = document.querySelector('.wrapper');
    const targetSection = document.getElementById(id);
    
    if (wrapper && targetSection) {
      wrapper.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
      setActive(id);
      setToggle(false);
    }
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 200
      }
    })
  };

  const socialLinks = [
    { Icon: Github, url: "#", label: "GitHub" },
    { Icon: Linkedin, url: "#", label: "LinkedIn" },
    { Icon: Mail, url: "#", label: "Email" }
  ];

  return (
    <nav className={`w-full fixed z-40 transition-all duration-500 
      ${scrolled ? 'bg-black/90 backdrop-blur-lg py-4' : 'bg-gradient-to-b from-black py-8'}
      sm:px-16`}
    >
      <div className='w-full flex justify-between items-start mx-auto px-8'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4"
        >
          <Link
            to='/'
            onClick={() => {
              document.querySelector('.wrapper').scrollTo({ top: 0, behavior: 'smooth' });
              setActive("hero");
            }}
            className="w-12 h-12 rounded-full bg-quaternary flex items-center justify-center
              text-white font-bold text-xl hover:scale-110 transition-transform"
          >
            PJ
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-col gap-5 pointer-events-auto'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold cursor-pointer`}
              onClick={() => handleNavClick(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <span>{nav.title}</span>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center z-50
              transition-all duration-300 fixed right-8 top-8
              ${toggle ? 'bg-white' : 'bg-quaternary hover:bg-quaternary/80'}`}
            onClick={() => setToggle(!toggle)}
          >
            <div className="relative w-6 h-6">
              <motion.span
                animate={{
                  rotate: toggle ? 45 : 0,
                  y: toggle ? 9 : 0,
                  backgroundColor: toggle ? "#000" : "#fff"
                }}
                className="absolute top-0 left-0 w-6 h-0.5 transition-colors"
              />
              <motion.span
                animate={{
                  opacity: toggle ? 0 : 1,
                  backgroundColor: toggle ? "#000" : "#fff"
                }}
                className="absolute top-2.5 left-0 w-6 h-0.5 transition-colors"
              />
              <motion.span
                animate={{
                  rotate: toggle ? -45 : 0,
                  y: toggle ? -9 : 0,
                  backgroundColor: toggle ? "#000" : "#fff"
                }}
                className="absolute bottom-0 left-0 w-6 h-0.5 transition-colors"
              />
            </div>
          </motion.button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col"
              >
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-md px-8">
                    <ul className='space-y-8'>
                      {navLinks.map((nav, i) => (
                        <motion.li
                          key={nav.id}
                          custom={i}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          onClick={() => handleNavClick(nav.id)}
                          className="relative group"
                        >
                          <motion.div 
                            className="flex items-center gap-6"
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className={`w-1.5 h-12 rounded-full transition-colors
                              ${active === nav.id ? "bg-quaternary" : "bg-transparent group-hover:bg-quaternary/50"}`} 
                            />
                            <div className="flex flex-col">
                              <span className={`text-3xl font-bold tracking-wide transition-colors
                                ${active === nav.id ? "text-quaternary" : "text-white/80 group-hover:text-white"}`}>
                                {nav.title}
                              </span>
                            </div>
                          </motion.div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="py-8 px-8"
                >
                  <div className="flex justify-center gap-6">
                    {socialLinks.map(({ Icon, url, label }, i) => (
                      <motion.a
                        key={label}
                        href={url}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                          hover:bg-quaternary transition-colors"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;