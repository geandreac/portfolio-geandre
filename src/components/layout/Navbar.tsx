import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const activeSection = useScrollSpy(['home', 'works', 'skills', 'about-me', 'experience', 'contacts']);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'works', label: t('nav.works') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'about-me', label: t('nav.about') },
    { id: 'experience', label: t('exp.title') },
    { id: 'contacts', label: t('nav.contact') }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 lg:left-[48px] right-0 h-[64px] bg-bg3/90 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-5 md:px-10 lg:px-16 z-[1000]">
        <a href="#home" className="flex items-center gap-3 text-text font-bold text-sm group relative z-[1001]">
          <div className="w-[24px] h-[24px] relative flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
            <div className="absolute w-[16px] h-[16px] top-0 left-0 border-2 border-purple" />
            <div className="absolute w-[16px] h-[16px] bottom-0 right-0 border-2 border-purple" />
          </div>
          <span className=" tracking-wider uppercase text-xs">Geandre</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className={`text-[12px] uppercase tracking-widest font-bold transition-all duration-300 hover:text-purple relative group ${activeSection === link.id ? 'text-purple' : 'text-muted'}`}
                >
                  <span className="text-purple mr-1 opacity-50 group-hover:opacity-100 transition-opacity">#</span>
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-purple" 
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-sm hover:border-purple/50 transition-all duration-300 group"
          >
            <span className={`text-[10px] font-bold uppercase tracking-wider ${language === 'en' ? 'text-purple' : 'text-muted'}`}>EN</span>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${language === 'pt' ? 'text-purple' : 'text-muted'}`}>PT</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4 relative z-[1001]">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-2 py-1 border border-white/10 rounded-sm hover:border-purple/50 transition-all duration-300"
          >
            <span className={`text-[10px] font-bold uppercase tracking-wider ${language === 'en' ? 'text-purple' : 'text-muted'}`}>EN</span>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${language === 'pt' ? 'text-purple' : 'text-muted'}`}>PT</span>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-text block"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-text block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-text block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg/98 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col gap-10 items-center">
              {navLinks.map((link, i) => (
                <motion.li 
                   key={link.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeSection === link.id ? 'text-purple' : 'text-text/60'}`}
                  >
                    <span className="text-purple mr-2 opacity-50">#</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Social Icons in Mobile Menu */}
            <div className="absolute bottom-12 flex gap-8">
               <a href="https://github.com/geandreac" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-purple transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
               </a>
               <a href="https://linkedin.com/in/geandreac" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-purple transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
