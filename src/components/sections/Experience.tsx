import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { experience } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 mx-auto max-w-[960px]">
      <SectionHeading id="experience" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="mt-8"
      >
        {experience.map((item, i) => (
          <TimelineItem key={i} {...item} />
        ))}
      </motion.div>
    </section>
  );
};
