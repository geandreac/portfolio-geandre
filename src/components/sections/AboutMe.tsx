import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

export const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-24 px-5 md:px-10 lg:px-16 mx-auto max-w-[1100px]">
      <SectionHeading id="about-me" title={t('about.title')} />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-3 space-y-8">
          <h3 className="text-2xl font-bold text-text leading-tight">
            {t('about.greeting')}
          </h3>
          <div className="space-y-6 text-sm text-muted leading-relaxed">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple">{t('about.services')}</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(n => (
                <li key={n} className="border border-white/5 bg-bg2/40 p-5 space-y-2">
                  <p className="text-sm font-bold text-text">{t(`about.s${n}.title`)}</p>
                  <p className="text-xs text-muted leading-relaxed">{t(`about.s${n}.desc`)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
             <a 
               href="#contacts" 
               className="px-8 py-3 bg-purple text-bg font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 text-xs"
             >
                {t('hero.cta')}
             </a>
          </div>
        </div>

        <div className="lg:col-span-2 relative group hidden lg:block">
           <div className="absolute -inset-4 border-2 border-purple/30 group-hover:border-purple transition-all duration-500" />
           <div className="relative bg-bg3 overflow-hidden border border-purple/30 rounded-none">
              <img 
                src="/avatar.jpg" 
                alt="Geandre" 
                className="w-full aspect-square object-cover rounded-none transition-all duration-700 hover:scale-105"
              />
           </div>
        </div>
      </div>
    </section>
  );
};
