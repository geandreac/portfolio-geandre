import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-20 px-6 lg:px-12 mx-auto max-w-[960px]">
      <SectionHeading id="about-me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-sm md:text-base text-muted leading-[1.85]">
          <p className="text-text font-semibold font-outfit text-lg">Olá, sou o Geandre!</p>
          <p>
            Sou desenvolvedor com experiência prática em ambientes corporativos reais. 
            Atuo na intersecção entre desenvolvimento de software e melhoria de processos.
          </p>
          <p>
            Tenho perfil analítico e orientado a resultados. Gosto de entender o 
            problema antes de escrever qualquer linha de código — garantindo que a 
            solução faça sentido pra quem vai usar.
          </p>
          <p>
            Trabalho com automações, arquitetura de dados, desenvolvimento web e 
            integração de sistemas. Sempre priorizando código limpo, escalabilidade 
            e consistência de dados.
          </p>
          <a href="#contacts" className="inline-flex items-center gap-2 text-purple font-bold hover:gap-4 transition-all duration-300 group">
            Falar comigo 
            <span className="group-hover:translate-x-1 transition-transform">{"->"}</span>
          </a>
        </div>

        <div className="hidden md:flex justify-center items-center relative h-[300px]">
          <div className="relative w-[220px] h-[220px]">
            {/* Decorative elements with subtle glow and movement */}
            <div className="absolute border-[1.5px] border-purple/30 w-32 h-32 -top-8 -left-8 opacity-40 rounded-sm" />
            <div className="absolute border-[1.5px] border-purple/20 w-24 h-24 top-12 left-12 opacity-30 rounded-sm" />
            <div className="absolute border-[1.5px] border-purple/10 w-20 h-20 bottom-0 right-0 opacity-20 rounded-sm" />
            
            {/* Dot grid decoration */}
            <div className="absolute -bottom-6 -left-6 grid grid-cols-5 gap-[6px] opacity-25">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-[3px] h-[3px] bg-purple rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
