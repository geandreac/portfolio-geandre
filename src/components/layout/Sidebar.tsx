import React from 'react';
import { motion } from 'framer-motion';

export const Sidebar: React.FC = () => {
  return (
    <motion.aside 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-[200] py-8 px-3 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-full shadow-2xl shadow-purple/5"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple/30 to-transparent mb-2" />
      
      <a 
        href="https://github.com/geandreac" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="GitHub"
        className="text-muted hover:text-purple transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/geandreac/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LinkedIn"
        className="text-muted hover:text-purple transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      
      <a 
        href="mailto:geandreac.dev@gmail.com" 
        title="E-mail"
        className="text-muted hover:text-purple transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>

      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent via-purple/30 to-transparent mt-2" />
    </motion.aside>
  );
};
