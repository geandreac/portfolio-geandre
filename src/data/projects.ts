export interface ProjectItem {
  name: string;
  stack: string[];
  desc: { pt: string; en: string };
  descLong?: { pt: string; en: string };
  note?: { pt: string; en: string };
  status?: string;
  link?: string;
  linkLabel?: { pt: string; en: string };
  youtubeId?: string;
  addedAt: string;
}

const LIVE = { pt: 'Live <~>', en: 'Live <~>' };
const GITHUB = { pt: 'Github <~>', en: 'Github <~>' };
const PRIVATE = { pt: 'Privado >=', en: 'Private >=' };

export const completeApps: ProjectItem[] = [
  {
    name: 'Sevenzin',
    stack: ['C#', '.NET 8', 'WPF', 'xUnit'],
    desc: {
      pt: 'Otimizador de PC para Windows que mede antes de otimizar: monitores ao vivo, ajustes reversíveis com backup e auditoria, e 101 testes automatizados.',
      en: 'Windows PC optimizer that measures before it optimizes: live monitors, reversible tweaks with backup and audit, and 101 automated tests.'
    },
    descLong: {
      pt: 'Aplicativo desktop em WPF (.NET 8) de diagnóstico e otimização do Windows, construído sobre um princípio simples: toda alteração tem explicação, confirmação explícita e reversão.\n\n• Monitores ao vivo de CPU, GPU, memória e latência com leituras reais ("—" quando a métrica não existe, nunca um valor inventado).\n• Motor de ajustes reversível: prévia, backup do estado anterior, desfazer e log de auditoria.\n• Perfis temporários por jogo (afinidade e prioridade revertidas ao fechar), diagnóstico de GPU somente leitura e instaladores verificados por assinatura/hash.\n• Login com bcrypt, papéis (admin × usuário) e proteção contra força bruta.\n\nArquitetura em camadas: biblioteca de diagnóstico sem UI (WMI, contadores de performance), app WPF com tema escuro desenhado no Figma e um runner de linha de comando que gera relatórios do PC.',
      en: 'WPF (.NET 8) desktop app for Windows diagnostics and optimization, built on one rule: every change comes with an explanation, explicit confirmation, and a way back.\n\n• Live CPU, GPU, memory, and latency monitors using real readings ("—" when a metric is unavailable, never a made-up value).\n• Reversible tweak engine: preview, backup of the previous state, undo, and an audit log.\n• Temporary per-game profiles (affinity and priority restored on exit), read-only GPU diagnostics, and installers verified by signature/hash.\n• bcrypt login, roles (admin × user), and brute-force protection.\n\nLayered architecture: a UI-free diagnostics library (WMI, performance counters), a WPF app with a dark theme designed in Figma, and a command-line runner that generates PC reports.'
    },
    note: { pt: 'App Desktop | Open Source', en: 'Desktop App | Open Source' },
    link: 'https://github.com/geandreac/sevenzinTwk',
    linkLabel: GITHUB,
    addedAt: '2026-11-12',
  },
  {
    name: 'Ponte',
    stack: ['Electron', 'WebRTC', 'Node.js', 'WebSocket', 'Playwright'],
    desc: {
      pt: 'Suporte remoto assistido com convite de uso único, aprovação explícita, permissões por recurso e criptografia ponta a ponta via WebRTC.',
      en: 'Assisted remote support with single-use invites, explicit approval, per-feature permissions, and end-to-end encryption via WebRTC.'
    },
    descLong: {
      pt: 'Aplicativo para uma pessoa compartilhar a tela com quem vai ajudá-la, pensado para evitar golpes de "suporte técnico". Roda como programa de computador (Windows, macOS e Linux, via Electron) e também no navegador.\n\n• Convite com ID de 9 dígitos + código de 8 caracteres, uso único e expiração em 10 minutos.\n• Permissões separadas (tela, arquivos, chat, gravação), todas desligadas por padrão e revogáveis a qualquer momento.\n• Tela, chat e arquivos via WebRTC ponta a ponta, com código de verificação contra interceptação e SHA-256 nos arquivos.\n• Controle remoto com consentimento, conexão em rede local sem servidor externo e atualização automática pelas Releases do GitHub.\n\nServidor de sinalização em Node.js + WebSocket, coberto por 81 testes de integração e testes E2E com dois navegadores reais conectados por WebRTC. Instaladores gerados por GitHub Actions.',
      en: 'An app for someone to share their screen with the person helping them, designed to prevent "tech support" scams. Runs as a desktop program (Windows, macOS, and Linux via Electron) and in the browser.\n\n• Invite with a 9-digit ID + 8-character code, single use, expiring in 10 minutes.\n• Separate permissions (screen, files, chat, recording), all off by default and revocable at any time.\n• Screen, chat, and files over end-to-end WebRTC, with a verification code against interception and SHA-256 file checks.\n• Consent-based remote control, LAN connections with no external server, and auto-update from GitHub Releases.\n\nSignaling server in Node.js + WebSocket, covered by 81 integration tests and E2E tests with two real browsers connected over WebRTC. Installers built by GitHub Actions.'
    },
    note: { pt: 'App Desktop + Web | MVP', en: 'Desktop + Web App | MVP' },
    link: 'https://github.com/geandreac/ponte-suporte-remoto',
    linkLabel: GITHUB,
    addedAt: '2026-11-10',
  },
  {
    name: 'PEI Vivo',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Vitest'],
    desc: {
      pt: 'Plataforma colaborativa entre escola, família e saúde que adapta materiais didáticos para estudantes com TEA, TDAH e dislexia. Meu TCC.',
      en: 'Collaborative platform linking school, family, and health professionals to adapt learning materials for students with autism, ADHD, and dyslexia. My thesis project.'
    },
    descLong: {
      pt: 'O Plano Educacional Individualizado (PEI) é obrigatório por lei, mas costuma virar um PDF na gaveta. O PEI Vivo transforma o plano em um ciclo contínuo: observar → validar → adaptar → retroalimentar.\n\n• Docente, família e profissional de saúde registram observações a cada 15 dias em seis dimensões.\n• Um motor de adaptação determinístico (TypeScript puro, sem IA) converte as observações em parâmetros; o profissional de saúde valida o ciclo.\n• A docente cola um texto e recebe o material adaptado (blocos curtos, enunciados em etapa única, contraste reforçado), revisa lado a lado e aprova.\n\nMonorepo com React + Vite, Supabase (Postgres, RLS, Auth, Edge Functions) e schemas Zod compartilhados. Mais de 100 testes de políticas de acesso (RLS), auditoria de acessibilidade com axe-core e CI no GitHub Actions.\n\nTCC de Sistemas de Informação (CEUNI FAMETRO, 2026), em dupla. ODS 3 e 4.',
      en: 'The Individualized Education Plan (IEP) is required by Brazilian law, but it usually ends up as a forgotten PDF. PEI Vivo turns the plan into a continuous cycle: observe → validate → adapt → feed back.\n\n• Teachers, families, and health professionals log observations every 15 days across six dimensions.\n• A deterministic adaptation engine (plain TypeScript, no AI) turns observations into parameters; the health professional validates each cycle.\n• The teacher pastes a text and gets an adapted version (short blocks, single-step instructions, stronger contrast), reviews it side by side, and approves.\n\nMonorepo with React + Vite, Supabase (Postgres, RLS, Auth, Edge Functions), and shared Zod schemas. Over 100 access-policy (RLS) tests, accessibility audits with axe-core, and CI on GitHub Actions.\n\nInformation Systems undergraduate thesis (CEUNI FAMETRO, 2026), built in a pair. UN SDGs 3 and 4.'
    },
    note: { pt: 'TCC | Sistemas de Informação', en: 'Thesis | Information Systems' },
    status: 'live',
    link: 'https://tcc-peivivo.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-10-28',
  },
  {
    name: 'MatchDay',
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mercado Pago'],
    desc: {
      pt: 'Plataforma para reservar campos de futebol e dividir o pagamento via PIX: cada amigo paga quanto quiser pelo link compartilhado.',
      en: 'Platform to book soccer fields and split the bill via PIX: each friend pays what they want through a shared link.'
    },
    descLong: {
      pt: 'MatchDay conecta jogadores a campos de futebol. O jogador reserva horários consecutivos, paga via PIX real (Mercado Pago, com QR Code) e compartilha um link para que cada amigo contribua com o valor que quiser.\n\n• Jogador: busca por cidade ou geolocalização, reserva, cancelamento, avaliação pós-partida e créditos com reembolso instantâneo.\n• Dono de campo: cadastro completo, dashboard de faturamento e cancelamento com reembolso automático via PIX.\n• Admin: relatórios financeiros e gestão de usuários e campos.\n\nNext.js 16 com API Routes, Prisma 7 sobre PostgreSQL (Neon), NextAuth, Supabase Storage para fotos, PWA instalável e modo claro/escuro. Testes E2E com Playwright e deploy na Vercel.',
      en: 'MatchDay connects players to soccer fields. Players book consecutive time slots, pay with real PIX (Mercado Pago, with QR code), and share a link so each friend chips in whatever they want.\n\n• Player: search by city or geolocation, booking, cancellation, post-match ratings, and credits with instant refunds.\n• Field owner: full field listing, revenue dashboard, and cancellation with automatic PIX refunds.\n• Admin: financial reports and user/field management.\n\nNext.js 16 with API Routes, Prisma 7 on PostgreSQL (Neon), NextAuth, Supabase Storage for photos, installable PWA, and light/dark mode. E2E tests with Playwright, deployed on Vercel.'
    },
    note: { pt: 'Projeto Pessoal de SaaS', en: 'Personal SaaS Project' },
    status: 'live',
    link: 'https://campo-reserva.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-05-31',
  },
  {
    name: 'CardWise',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Gemini', 'Groq'],
    desc: {
      pt: 'SaaS de gestão de cartões de crédito com IA: lê faturas em PDF, categoriza gastos e projeta parcelas em uma janela de 24 meses.',
      en: 'Credit card management SaaS with AI: reads PDF invoices, categorizes spending, and projects installments over a 24-month window.'
    },
    descLong: {
      pt: 'CardWise é um SaaS de gestão financeira focado em automação inteligente de faturas de cartão de crédito.\n\n• Leitura de faturas com IA em três camadas: o PDF vai direto ao Gemini; se falhar, o texto é extraído e processado pela Groq; e um parser por regex fica como última linha de defesa.\n• Smart Cycle Calendar: mostra quando cada fatura fecha e vence e calcula a "melhor data de compra" em tempo real.\n• Projeções rolling de 24 meses para parcelas e gastos recorrentes.\n\nNext.js 14 (App Router) com Supabase (Auth, Postgres e Row Level Security), SWR para cache e Framer Motion nas micro-interações. Mobile first e em produção na Vercel.',
      en: 'CardWise is a financial management SaaS focused on smart automation of credit card invoices.\n\n• Three-layer AI invoice reading: the PDF goes straight to Gemini; if that fails, the text is extracted and processed by Groq; a regex parser is the last line of defense.\n• Smart Cycle Calendar: shows when each statement closes and is due, and computes the "best purchase date" in real time.\n• Rolling 24-month projections for installments and recurring expenses.\n\nNext.js 14 (App Router) with Supabase (Auth, Postgres, and Row Level Security), SWR for caching, and Framer Motion for micro-interactions. Mobile first and live on Vercel.'
    },
    note: { pt: 'Projeto Pessoal de SaaS', en: 'Personal SaaS Project' },
    status: 'live',
    link: 'https://cardwise-eight.vercel.app/',
    linkLabel: LIVE,
    addedAt: '2026-08-17',
  },
  {
    name: 'Barbearia SaaS',
    stack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'Turborepo'],
    desc: {
      pt: 'SaaS multi-tenant de gestão para barbearias: agenda, ERP, CRM, financeiro e IA no WhatsApp. Desenvolvido em equipe.',
      en: 'Multi-tenant barbershop management SaaS: scheduling, ERP, CRM, finance, and WhatsApp AI. Built as a team.'
    },
    descLong: {
      pt: 'SaaS multi-tenant que vai além da agenda: ERP, CRM, financeiro, estoque, campanhas e fidelização, com uma IA integrada ao WhatsApp que agenda, remarca e recupera clientes inativos.\n\n• Cada barbearia tem ambiente isolado; um dono pode gerenciar várias unidades com painel consolidado.\n• Planos por assinatura liberam recursos via feature flags.\n• Papéis configuráveis: dono, sócio, atendente, barbeiro e cliente (com painel próprio).\n\nMonorepo com Turborepo: frontend em Next.js 14 + Tailwind, backend em FastAPI + SQLAlchemy 2.0, PostgreSQL (Supabase) + Redis, pagamentos via AsaaS e CI/CD com GitHub Actions. Projeto em andamento.',
      en: 'Multi-tenant SaaS that goes beyond scheduling: ERP, CRM, finance, inventory, campaigns, and loyalty, with a WhatsApp-integrated AI that books, reschedules, and wins back inactive clients.\n\n• Each barbershop has an isolated environment; an owner can manage several locations from a consolidated dashboard.\n• Subscription plans unlock features via feature flags.\n• Configurable roles: owner, partner, receptionist, barber, and client (with its own dashboard).\n\nTurborepo monorepo: Next.js 14 + Tailwind frontend, FastAPI + SQLAlchemy 2.0 backend, PostgreSQL (Supabase) + Redis, AsaaS payments, and CI/CD with GitHub Actions. Work in progress.'
    },
    note: { pt: 'Projeto em Equipe | Em Andamento', en: 'Team Project | Work in Progress' },
    status: 'development',
    linkLabel: { pt: 'Em breve <~>', en: 'Soon <~>' },
    addedAt: '2026-07-10',
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
    note: { pt: 'PJ Materiais de Construção | Projeto Privado', en: 'Construction Materials PJ | Private Project' },
    status: 'private',
    linkLabel: PRIVATE,
    addedAt: '2023-11-15',
  },
];

export const smallProjects: ProjectItem[] = [
  {
    name: 'Portfolio v2.0',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    desc: {
      pt: 'Minha vitrine pessoal. Design minimalista, bilíngue (PT/EN), animações fluidas e foco em UX/UI moderna.',
      en: 'My personal showcase. Minimalist design, bilingual (PT/EN), fluid animations, and a focus on modern UX/UI.'
    },
    descLong: {
      pt: 'O Portfolio v2.0 reúne minhas habilidades em front-end moderno. Construído com React, TypeScript, Tailwind CSS e Framer Motion, com estética minimalista, internacionalização PT/EN, modal de projetos e arquitetura single-page otimizada.',
      en: 'Portfolio v2.0 brings together my modern front-end skills. Built with React, TypeScript, Tailwind CSS, and Framer Motion, with a minimalist look, PT/EN internationalization, project modals, and an optimized single-page architecture.'
    },
    link: 'https://github.com/geandreac/portfolio-geandre',
    linkLabel: GITHUB,
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
    linkLabel: PRIVATE,
    addedAt: '2023-08-10',
  },
];
