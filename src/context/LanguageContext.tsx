import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  }, [language]);

  // Função simples de tradução para textos fixos
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'home',
    'nav.works': 'trabalhos',
    'nav.skills': 'habilidades',
    'nav.about': 'sobre',
    'nav.contact': 'contato',
    'hero.greeting': 'Geandre é um',
    'hero.role1': 'desenvolvedor',
    'hero.role2': 'de sistemas',
    'hero.role3': 'full-stack',
    'hero.description': 'Transforma processos complexos em fluxos otimizados através de tecnologia. Arquitetura limpa, dados consistentes, código que funciona.',
    'hero.cta': 'Fale comigo!',
    'hero.status': 'Atualmente trabalhando em',
    'projects.title': 'projetos',
    'projects.subtitle': 'Soluções desenvolvidas com foco em performance, segurança e escalabilidade.',
    'projects.all': 'Ver todos',
    'skills.title': 'habilidades',
    'about.title': 'sobre-mim',
    'about.greeting': 'Olá, sou o Geandre!',
    'about.p1': 'Sou um entusiasta de tecnologia focado em resolver problemas reais através de software. Com experiência no ecossistema Microsoft e desenvolvimento Full-stack, busco sempre a melhor arquitetura para cada desafio.',
    'about.p2': 'Minha jornada é guiada pela curiosidade e pela busca constante por eficiência, transformando ideias em soluções escaláveis e seguras.',
    'exp.title': 'experiência',
    'exp.current': 'Atual',
    'contact.title': 'contato',
    'contact.direct': 'Mensagem direta',
    'contact.social': 'Redes profissionais',
    'contact.form_title': 'envie-uma-mensagem',
    'contact.form.name': 'Nome',
    'contact.form.name_placeholder': 'Ex: João Silva',
    'contact.form.email': 'E-mail',
    'contact.form.email_placeholder': 'joao@exemplo.com',
    'contact.form.message': 'Mensagem',
    'contact.form.message_placeholder': 'Como posso te ajudar?',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Obrigado! Sua mensagem foi enviada com sucesso. ✨',
    'contact.form.error': 'Ops! Algo deu errado. Tente novamente mais tarde.',
    'footer.role': 'Desenvolvedor de Sistemas Full-stack',
    'footer.copy': '© Copyright 2026. Desenhado e Desenvolvido por Geandre',
  },
  en: {
    'nav.home': 'home',
    'nav.works': 'works',
    'nav.skills': 'skills',
    'nav.about': 'about',
    'nav.contact': 'contact',
    'hero.greeting': 'Geandre is a',
    'hero.role1': 'full-stack',
    'hero.role2': 'systems',
    'hero.role3': 'developer',
    'hero.description': 'Transforming complex processes into optimized workflows through technology. Clean architecture, consistent data, code that works.',
    'hero.cta': 'Get in touch!',
    'hero.status': 'Currently working on',
    'projects.title': 'projects',
    'projects.subtitle': 'Solutions developed with a focus on performance, security, and scalability.',
    'projects.all': 'View all',
    'skills.title': 'skills',
    'about.title': 'about-me',
    'about.greeting': "Hi, I'm Geandre!",
    'about.p1': "I'm a technology enthusiast focused on solving real-world problems through software. With experience in the Microsoft ecosystem and Full-stack development, I always seek the best architecture for each challenge.",
    'about.p2': 'My journey is guided by curiosity and a constant search for efficiency, transforming ideas into scalable and secure solutions.',
    'exp.title': 'experience',
    'exp.current': 'Present',
    'contact.title': 'contact',
    'contact.direct': 'Direct message',
    'contact.social': 'Professional networks',
    'contact.form_title': 'send-a-message',
    'contact.form.name': 'Name',
    'contact.form.name_placeholder': 'e.g. John Doe',
    'contact.form.email': 'Email',
    'contact.form.email_placeholder': 'john@example.com',
    'contact.form.message': 'Message',
    'contact.form.message_placeholder': 'How can I help you?',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you! Your message has been sent successfully. ✨',
    'contact.form.error': 'Oops! Something went wrong. Please try again later.',
    'footer.role': 'Full-stack Systems Developer',
    'footer.copy': '© Copyright 2026. Designed & Developed by Geandre',
  }
};
