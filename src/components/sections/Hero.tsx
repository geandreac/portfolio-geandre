import React from 'react';
import { motion } from 'framer-motion';
import { DotGrid } from '../ui/DotGrid';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex flex-col justify-center relative overflow-hidden pt-24 pb-20 md:py-12 px-6 lg:px-12 max-w-none">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-[1100px] mx-auto w-full">
        {/* Title Content (Left on Desktop, Below Image on Mobile) */}
        <div className="z-10 flex flex-col items-center md:items-start justify-center order-2 md:order-1">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold leading-tight text-center md:text-left text-text font-outfit mb-6"
          >
            Geandre é um <br className="hidden lg:block" />
            <span className="text-purple">desenvolvedor</span> de sistemas <br className="hidden lg:block" />
            <span className="text-purple">full-stack</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text/80 text-base md:text-lg max-w-[480px] mb-10 leading-relaxed text-center md:text-left"
          >
            Transforma processos complexos em fluxos otimizados através de tecnologia.
            Arquitetura limpa, dados consistentes, código que funciona.
          </motion.p>
          
          <motion.a 
            href="#contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative inline-block w-[90%] md:w-auto px-10 py-4 border border-purple text-purple text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-white group overflow-hidden text-center"
          >
            <span className="relative z-10">Fale comigo!</span>
            <div className="absolute inset-0 bg-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.a>
        </div>

        {/* Hero Image (Right on Desktop, Above Title on Mobile) */}
        <div className="flex justify-center items-center relative order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="relative w-56 h-56 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] flex-shrink-0 group"
          >
            {/* Vibrante Purple Glow / Neon Effect */}
            <div className="absolute inset-0 rounded-full bg-purple/30 blur-[60px] animate-pulse group-hover:bg-purple/40 transition-colors duration-500" />
            
            <div className="relative w-full h-full rounded-full border-4 border-purple/20 p-2 backdrop-blur-sm bg-bg2/20 overflow-hidden shadow-[0_0_50px_rgba(192,132,252,0.3)]">
              <img 
                src="/avatar.jpg" 
                alt="Geandre Avatar" 
                className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Geometric accents floating around the image */}
            <DotGrid cols={5} rows={5} className="absolute -top-4 -right-4 opacity-40 hidden md:grid" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-purple/40 rounded-sm rotate-12 hidden md:block" />
          </motion.div>
        </div>
      </div>

      {/* Responsive Status Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 md:mt-0 md:absolute md:bottom-12 md:left-6 md:right-6 lg:left-12 lg:right-12 max-w-[1100px] mx-auto w-full z-20"
      >
        <div className="flex items-center gap-3 md:gap-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-5 py-3 md:px-6 md:py-4 rounded-lg md:rounded-sm shadow-2xl shadow-purple/10 w-fit mx-auto md:mx-0 group hover:border-purple/30 transition-colors">
          <div className="relative flex-shrink-0">
             <div className="w-3 h-3 bg-purple rounded-full" />
             <div className="absolute inset-0 w-3 h-3 bg-purple rounded-full animate-ping opacity-75" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="text-muted text-[11px] md:text-sm font-medium tracking-tight uppercase opacity-80">Currently working on</span>
            <span className="text-purple font-bold text-xs md:text-sm tracking-wide">CardWise — Projeto de SaaS com IA</span>
          </div>
        </div>
      </motion.div>

      {/* Background shapes */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-purple/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
