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
    'hero.role2': 'full-stack &',
    'hero.role3': 'especialista em IA',
    'hero.description': 'Desenvolve SaaS com pagamentos via PIX, apps desktop em .NET e Electron e automações corporativas, usando IA como ferramenta de engenharia em todo o processo: da especificação ao código, aos testes e à revisão. Entrega mais rápido sem abrir mão de qualidade e segurança.',
    'hero.cta': 'Fale comigo!',
    'hero.status': 'Atualmente trabalhando em',
    'projects.title': 'projetos',
    'projects.subtitle': 'Produtos em produção, apps desktop open source e automações corporativas. Cada projeto mostra o problema, o que foi construído, a arquitetura e como foi testado.',
    'projects.featured': 'destaques',
    'projects.more': 'todos-os-projetos',
    'projects.category': 'filtrados',
    'projects.filter': 'Filtrar projetos por categoria',
    'projects.all': 'Ver todos',
    'skills.title': 'habilidades',
    'about.title': 'sobre-mim',
    'about.greeting': 'Olá, sou o Geandre!',
    'about.p1': 'Sou estudante de Sistemas de Informação e trabalho no meio do caminho entre o desenvolvimento full-stack e a IA. Minha especialidade em IA está no uso: Claude Code, ChatGPT, Gemini, DeepSeek e Grok fazem parte de como eu planejo, escrevo, testo, reviso e documento cada produto, do banco à interface.',
    'about.p2': 'A IA acelera, mas não substitui engenharia: eu decido a arquitetura, reviso tudo o que ela produz e levo a sério o que não aparece na tela, como testes automatizados, permissões no banco (RLS), acessibilidade e consentimento do usuário. No dia a dia, também automatizo processos com Power Apps e Power Automate.',
    'about.services': 'O que posso desenvolver para você',
    'about.s1.title': 'SaaS e aplicações web',
    'about.s1.desc': 'Do login ao pagamento: autenticação, PIX, banco com permissões por papel (RLS), PWA e deploy. Ex.: MatchDay, CardWise, Juntaê.',
    'about.s2.title': 'Desenvolvimento com IA',
    'about.s2.desc': 'Agentes de código e LLMs no ciclo inteiro (especificação, implementação, testes, revisão e documentação) para tirar um produto do papel mais rápido, com o código revisado por mim.',
    'about.s3.title': 'Aplicativos desktop',
    'about.s3.desc': 'Apps para Windows em .NET/WPF e multiplataforma em Electron, com WebRTC e instaladores automatizados. Ex.: Sevenzin, Ponte.',
    'about.s4.title': 'Automação de processos',
    'about.s4.desc': 'Power Apps, Power Automate, SharePoint e integrações em Python com Microsoft Graph para tirar planilhas e retrabalho do caminho.',
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
    'footer.role': 'Desenvolvedor Full-Stack & Especialista em IA',
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
    'hero.role2': 'developer &',
    'hero.role3': 'AI specialist',
    'hero.description': 'Builds SaaS with PIX payments, desktop apps in .NET and Electron, and corporate automations, using AI as an engineering tool throughout the process: from spec to code, tests, and review. Ships faster without giving up quality or security.',
    'hero.cta': 'Get in touch!',
    'hero.status': 'Currently working on',
    'projects.title': 'projects',
    'projects.subtitle': 'Products in production, open-source desktop apps, and corporate automations. Each project shows the problem, what was built, the architecture, and how it was tested.',
    'projects.featured': 'featured',
    'projects.more': 'all-projects',
    'projects.category': 'filtered',
    'projects.filter': 'Filter projects by category',
    'projects.all': 'View all',
    'skills.title': 'skills',
    'about.title': 'about-me',
    'about.greeting': "Hi, I'm Geandre!",
    'about.p1': "I'm an Information Systems student working right between full-stack development and AI. My AI expertise is in how I use it: Claude Code, ChatGPT, Gemini, DeepSeek, and Grok are part of how I plan, write, test, review, and document every product, from database to interface.",
    'about.p2': "AI speeds things up, but it doesn't replace engineering: I make the architecture decisions, review everything it produces, and take what you don't see on screen seriously, like automated tests, database-level permissions (RLS), accessibility, and user consent. At work, I also automate processes with Power Apps and Power Automate.",
    'about.services': 'What I can build for you',
    'about.s1.title': 'SaaS & web apps',
    'about.s1.desc': 'From login to payment: authentication, PIX, role-based database permissions (RLS), PWA, and deployment. E.g. MatchDay, CardWise, Juntaê.',
    'about.s2.title': 'AI-assisted development',
    'about.s2.desc': 'Coding agents and LLMs across the whole cycle (spec, implementation, tests, review, and documentation) to get a product off the ground faster, with every line reviewed by me.',
    'about.s3.title': 'Desktop apps',
    'about.s3.desc': 'Windows apps in .NET/WPF and cross-platform Electron apps, with WebRTC and automated installers. E.g. Sevenzin, Ponte.',
    'about.s4.title': 'Process automation',
    'about.s4.desc': 'Power Apps, Power Automate, SharePoint, and Python integrations with Microsoft Graph to remove spreadsheets and rework.',
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
    'footer.role': 'Full-Stack Developer & AI Specialist',
    'footer.copy': '© Copyright 2026. Designed & Developed by Geandre',
  }
};
