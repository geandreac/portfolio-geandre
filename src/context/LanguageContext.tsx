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
    'hero.greeting': 'Sou o Geandre,',
    'hero.role1': 'desenvolvedor',
    'hero.role2': 'full-stack &',
    'hero.role3': 'especialista em IA',
    'hero.description': 'Transformo processos manuais em sistemas que trabalham por você: automatizo tarefas repetitivas e desenvolvo aplicações sob medida para simplificar a operação do seu negócio. Do sistema web ao aplicativo, da automação de processos à integração com inteligência artificial, cada solução nasce das necessidades da sua empresa, com atenção aos detalhes e qualidade em cada entrega.',
    'hero.cta': 'Fale comigo!',
    'hero.status': 'Atualmente trabalhando em',
    'projects.title': 'projetos',
    'projects.subtitle': 'Sistemas que já estão funcionando: agendamento com pagamento, controle financeiro com inteligência artificial, organização de grupos, automação de rotinas e programas para computador. Clique em um projeto para ver o problema, o que foi entregue e como funciona.',
    'projects.cta.text': 'Tem um processo manual, uma planilha ou uma ideia que poderia virar sistema?',
    'projects.cta.button': 'Vamos conversar',
    'projects.featured': 'destaques',
    'projects.more': 'todos-os-projetos',
    'projects.category': 'filtrados',
    'projects.filter': 'Filtrar projetos por categoria',
    'projects.all': 'Mais no GitHub',
    'skills.title': 'habilidades',
    'about.title': 'sobre-mim',
    'about.greeting': 'Olá, sou o Geandre!',
    'about.p1': 'Sou desenvolvedor full-stack e estudante de Sistemas de Informação em Manaus. Desenvolvo o sistema inteiro, das telas que o seu cliente usa ao banco de dados por trás delas, e uso inteligência artificial (Claude Code, ChatGPT, Gemini, DeepSeek e Grok) em todas as etapas para entregar mais rápido.',
    'about.p2': 'A IA acelera, mas quem decide e revisa sou eu. Cuido do que não aparece na tela e faz diferença no dia a dia: testes automáticos, dados protegidos, o acesso certo para cada pessoa e um sistema fácil de usar. No trabalho, também automatizo processos com Power Apps e Power Automate.',
    'about.services': 'O que posso desenvolver para você',
    'about.s1.title': 'Sistemas e aplicativos web',
    'about.s1.desc': 'Agendamento, pagamento por PIX, área do cliente, painéis de gestão e aplicativos que podem ser instalados no celular. Ex.: MatchDay, Juntaê.',
    'about.s2.title': 'Desenvolvimento acelerado com IA',
    'about.s2.desc': 'Uso agentes de IA em todas as etapas para colocar o seu sistema no ar mais rápido, com cada linha revisada por mim. Quando faz sentido, a IA também entra no produto, como na leitura de faturas do CardWise.',
    'about.s3.title': 'Automação de processos',
    'about.s3.desc': 'Troco planilhas, papel e retrabalho por aplicativos e rotinas automáticas com Power Apps, Power Automate, SharePoint e Python. Ex.: Controle de Entregas.',
    'about.s4.title': 'Programas para computador',
    'about.s4.desc': 'Programas para Windows, macOS e Linux, com instalador e atualização automática. Ex.: Sevenzin, Ponte.',
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
    'hero.greeting': "I'm Geandre, a",
    'hero.role1': 'full-stack',
    'hero.role2': 'developer &',
    'hero.role3': 'AI specialist',
    'hero.description': "I turn manual processes into systems that work for you: I automate repetitive tasks and build custom applications that simplify how your business runs. From web systems and apps to process automation and AI integration, every solution starts from your company's needs, with attention to detail and quality in every delivery.",
    'hero.cta': 'Get in touch!',
    'hero.status': 'Currently working on',
    'projects.title': 'projects',
    'projects.subtitle': 'Systems that are already running: booking with payments, AI-powered finance tracking, group organization, routine automation, and desktop software. Click a project to see the problem, what was delivered, and how it works.',
    'projects.cta.text': 'Have a manual process, a spreadsheet, or an idea that could become a system?',
    'projects.cta.button': "Let's talk",
    'projects.featured': 'featured',
    'projects.more': 'all-projects',
    'projects.category': 'filtered',
    'projects.filter': 'Filter projects by category',
    'projects.all': 'More on GitHub',
    'skills.title': 'skills',
    'about.title': 'about-me',
    'about.greeting': "Hi, I'm Geandre!",
    'about.p1': "I'm a full-stack developer and Information Systems student in Manaus, Brazil. I build the whole system, from the screens your customers use to the database behind them, and I use artificial intelligence (Claude Code, ChatGPT, Gemini, DeepSeek, and Grok) at every step to deliver faster.",
    'about.p2': "AI speeds things up, but I'm the one who decides and reviews. I take care of what you don't see on screen but feel every day: automated tests, protected data, the right access for each person, and a system that's easy to use. At work, I also automate processes with Power Apps and Power Automate.",
    'about.services': 'What I can build for you',
    'about.s1.title': 'Web systems & apps',
    'about.s1.desc': 'Booking, online payments, customer areas, management dashboards, and apps that can be installed on the phone. E.g. MatchDay, Juntaê.',
    'about.s2.title': 'AI-accelerated development',
    'about.s2.desc': 'I use AI agents at every step to get your system live faster, with every line reviewed by me. When it makes sense, AI also goes into the product, like CardWise’s statement reading.',
    'about.s3.title': 'Process automation',
    'about.s3.desc': 'I replace spreadsheets, paperwork, and rework with apps and automatic routines using Power Apps, Power Automate, SharePoint, and Python. E.g. Controle de Entregas (delivery control).',
    'about.s4.title': 'Desktop software',
    'about.s4.desc': 'Programs for Windows, macOS, and Linux, with installers and automatic updates. E.g. Sevenzin, Ponte.',
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
