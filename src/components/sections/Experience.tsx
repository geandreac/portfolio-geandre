import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../ui/TimelineItem';
import { experience } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 px-5 md:px-10 lg:px-16 mx-auto max-w-[1100px]">
      <SectionHeading id="experience" title={t('exp.title')} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-l-2 border-purple/20 ml-3 py-4 space-y-12"
      >
        {experience.map((item, idx) => (
          <TimelineItem key={idx} {...item} language={language} />
        ))}
      </motion.div>
    </section>
  );
};
