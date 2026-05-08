import React from 'react';
import { motion } from 'framer-motion';
import { DotGrid } from '../ui/DotGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useLatestProject } from '../../hooks/useLatestProject';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const latestProject = useLatestProject();

  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex flex-col justify-center relative overflow-hidden pt-24 pb-20 md:py-12 px-5 md:px-10 lg:px-16 max-w-none">
      <div className="max-w-[1100px] mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
          {/* Title Content (Left on Desktop, Below Image on Mobile) */}
          <div className="z-10 flex flex-col items-center md:items-start justify-center order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left text-text mb-6"
            >
              {t('hero.greeting')} <br className="hidden lg:block" />
              <span className="text-purple">{t('hero.role1')}</span> {t('hero.role2')} <br className="hidden lg:block" />
              <span className="text-purple">{t('hero.role3')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted leading-relaxed max-w-[480px] mb-10 text-center md:text-left"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.a 
              href="#contacts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative inline-block w-[90%] md:w-auto px-10 py-4 border border-purple text-purple text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-white group overflow-hidden text-center"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.a>
          </div>

          {/* Hero Image / Decoration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2 flex justify-center items-center"
          >
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] group">
              <div className="absolute inset-0 border-2 border-purple/30 group-hover:border-purple transition-colors duration-500" />
              <div className="absolute inset-4 bg-bg2 overflow-hidden border border-purple/30 rounded-none">
                 <img 
                   src="/avatar.jpg" 
                   alt="Geandre" 
                   className="w-full h-full object-cover rounded-none transition-all duration-700 hover:scale-110"
                 />
              </div>
              {/* Decorative boxes */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-purple bg-bg" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-purple bg-bg" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-16 lg:mt-24 flex items-center gap-4 group cursor-default"
        >
          <div className="w-4 h-4 bg-purple animate-pulse" />
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted group-hover:text-purple transition-colors">
            {t('hero.status')} <span className="text-text">{latestProject ? latestProject.name : 'Aliança Navegação'}</span>
          </p>
        </motion.div>
      </div>
      
      <div className="absolute top-[10%] right-[-5%] opacity-20 pointer-events-none">
        <DotGrid cols={20} rows={20} />
      </div>
    </section>
  );
};
