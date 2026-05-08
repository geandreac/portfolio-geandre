export interface ProjectItem {
  name: string;
  stack: string[];
  desc: { pt: string; en: string };
  descLong?: { pt: string; en: string };
  note?: { pt: string; en: string };
  status?: string;
  link?: string;
  linkLabel?: string;
  youtubeId?: string;
  addedAt: string;
}

export const completeApps: ProjectItem[] = [
  {
    name: 'CardWise',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind'],
    desc: {
      pt: 'SaaS de gestão financeira com IA generativa. Lê faturas, projeta gastos e categoriza automaticamente por cartão de crédito.',
      en: 'Financial management SaaS with generative AI. Reads invoices, projects expenses, and automatically categorizes by credit card.'
    },
    descLong: {
      pt: 'CardWise é um SaaS completo de gestão financeira focado em automação inteligente. Utilizando IA generativa da Groq e Llama 3, o sistema lê PDFs de faturas de cartão de crédito e extrai, categoriza e projeta os gastos de forma autônoma. O backend é construído com Next.js 14 e Supabase, garantindo alta performance e segurança de dados, enquanto o frontend oferece uma experiência premium e intuitiva.',
      en: 'CardWise is a complete financial management SaaS focused on intelligent automation. Utilizing Groq generative AI and Llama 3, the system reads credit card invoice PDFs, extracting, categorizing, and projecting expenses autonomously. The backend is built with Next.js 14 and Supabase, ensuring high performance and data security, while the frontend delivers a premium and intuitive experience.'
    },
    note: {
      pt: 'Projeto Pessoal de SaaS',
      en: 'Personal SaaS Project'
    },
    status: 'live',
    link: 'https://cardwise-eight.vercel.app/',
    linkLabel: 'Live <~>',
    addedAt: '2024-05-01',
  },
  {
    name: 'Controle de Entregas',
    stack: ['Power Apps', 'SQL Server', 'Python', 'Graph API'],
    desc: {
      pt: 'Ecossistema corporativo para fluxo completo de expedição logística. Sincronização bidirecional com SQL Server via Python + autenticação MSAL.',
      en: 'Corporate ecosystem for full logistics dispatch flow. Bidirectional synchronization with SQL Server via Python + MSAL authentication.'
    },
    descLong: {
      pt: 'Uma solução end-to-end desenvolvida para otimizar o fluxo logístico da PJ Materiais de Construção. O sistema integra Power Apps para a interface de campo com um backend robusto em SQL Server, sincronizado via scripts Python e protegido por autenticação MSAL (Graph API). A arquitetura permitiu uma redução drástica no tempo de processamento de entregas.',
      en: 'An end-to-end solution developed to optimize the logistics flow for PJ Materiais de Construção. The system integrates Power Apps for the field interface with a robust SQL Server backend, synchronized via Python scripts and secured by MSAL authentication (Graph API). The architecture enabled a drastic reduction in delivery processing time.'
    },
    note: {
      pt: 'PJ Materiais de Construção | Projeto Privado',
      en: 'Construction Materials PJ | Private Project'
    },
    status: 'private',
    linkLabel: 'Privado >=',
    addedAt: '2023-11-15',
  },
];

export const smallProjects: ProjectItem[] = [
  {
    name: 'Portfolio v2.0',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    desc: {
      pt: 'Minha vitrine pessoal atualizada. Design premium com glassmorphism, performance extrema e foco total em UX/UI moderna.',
      en: 'My updated personal showcase. Premium design with glassmorphism, extreme performance, and total focus on modern UX/UI.'
    },
    descLong: {
      pt: 'O Portfolio v2.0 é a consolidação das minhas habilidades em front-end moderno. Construído com React, TypeScript, Tailwind CSS e Framer Motion, o projeto foca em uma estética minimalista e premium (Elias-style). Inclui internacionalização, animações fluidas e arquitetura single-page altamente otimizada.',
      en: 'Portfolio v2.0 is the consolidation of my modern front-end skills. Built with React, TypeScript, Tailwind CSS, and Framer Motion, the project focuses on a minimalist and premium aesthetic (Elias-style). It includes internationalization, fluid animations, and a highly optimized single-page architecture.'
    },
    link: 'https://github.com/geandreac/portfolio-geandre',
    linkLabel: 'Github <~>',
    addedAt: '2024-04-20',
  },
  {
    name: 'Scripts de Automação',
    stack: ['Python', 'MSAL', 'OAuth 2.0'],
    desc: {
      pt: 'Conjunto de scripts Python para sincronização e automação de dados corporativos. Funcionam como complemento direto aos projetos principais.',
      en: 'Set of Python scripts for corporate data synchronization and automation. Works as a direct complement to main projects.'
    },
    descLong: {
      pt: 'Coleção de ferramentas de automação e integração de dados desenvolvidas em Python. Estes scripts gerenciam desde integrações com APIs RESTful até o processamento em lote de dados corporativos para alimentar dashboards e sistemas satélites.',
      en: 'Collection of automation and data integration tools developed in Python. These scripts manage everything from RESTful API integrations to batch processing of corporate data to feed dashboards and satellite systems.'
    },
    status: 'private',
    linkLabel: 'Privado >=',
    addedAt: '2023-08-10',
  },
];
