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
    'hero.description': 'Constrói de SaaS com IA e pagamentos via PIX a apps desktop e automações corporativas. Arquitetura limpa, dados consistentes, segurança desde o início e código que funciona.',
    'hero.cta': 'Fale comigo!',
    'hero.status': 'Atualmente trabalhando em',
    'projects.title': 'projetos',
    'projects.subtitle': 'Do web ao desktop: SaaS em produção, apps com criptografia ponta a ponta, ferramentas de acessibilidade e automações. Clique em um projeto para ver os detalhes.',
    'projects.all': 'Ver todos',
    'skills.title': 'habilidades',
    'about.title': 'sobre-mim',
    'about.greeting': 'Olá, sou o Geandre!',
    'about.p1': 'Sou estudante de Sistemas de Informação e desenvolvedor full-stack focado em resolver problemas reais com software. No dia a dia, automatizo processos com Power Apps e Power Automate; nos projetos pessoais, construo de SaaS em Next.js e Supabase a apps desktop em .NET e Electron.',
    'about.p2': 'Levo a sério o que não aparece na tela: testes automatizados, permissões no banco (RLS), acessibilidade e consentimento do usuário. Meu TCC, o PEI Vivo, usa tecnologia para adaptar materiais didáticos a estudantes com TEA, TDAH e dislexia.',
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
    'hero.description': 'Builds everything from AI-powered SaaS with PIX payments to desktop apps and corporate automations. Clean architecture, consistent data, security from day one, and code that works.',
    'hero.cta': 'Get in touch!',
    'hero.status': 'Currently working on',
    'projects.title': 'projects',
    'projects.subtitle': 'From web to desktop: SaaS in production, end-to-end encrypted apps, accessibility tools, and automations. Click a project to see the details.',
    'projects.all': 'View all',
    'skills.title': 'skills',
    'about.title': 'about-me',
    'about.greeting': "Hi, I'm Geandre!",
    'about.p1': "I'm an Information Systems student and full-stack developer focused on solving real problems with software. At work, I automate processes with Power Apps and Power Automate; in personal projects, I build everything from Next.js + Supabase SaaS to .NET and Electron desktop apps.",
    'about.p2': "I take what you don't see on screen seriously: automated tests, database-level permissions (RLS), accessibility, and user consent. My thesis project, PEI Vivo, uses technology to adapt learning materials for students with autism, ADHD, and dyslexia.",
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
