type L = { pt: string; en: string };
type LL = { pt: string[]; en: string[] };

export type ProjectCategory = 'web' | 'desktop' | 'automation';
export type ProjectStage = 'released' | 'production' | 'mvp' | 'development' | 'internal';

export interface ProjectItem {
  name: string;
  category: ProjectCategory;
  stage: ProjectStage;
  featured?: boolean;
  stack: string[];
  desc: L;
  note?: L;
  overview?: L;
  role?: L;
  features?: LL;
  architecture?: L;
  highlights?: LL;
  status?: 'live';
  link?: string;
  linkLabel?: L;
  youtubeId?: string;
  addedAt: string;
}

export const categories: { id: ProjectCategory | 'all'; label: L }[] = [
  { id: 'all', label: { pt: 'Todos', en: 'All' } },
  { id: 'web', label: { pt: 'Web & SaaS', en: 'Web & SaaS' } },
  { id: 'desktop', label: { pt: 'Desktop & Sistemas', en: 'Desktop & Systems' } },
  { id: 'automation', label: { pt: 'Automação Corporativa', en: 'Corporate Automation' } },
];

export const stageLabels: Record<ProjectStage, L> = {
  released: { pt: 'Versão publicada', en: 'Released' },
  production: { pt: 'Em produção', en: 'In production' },
  mvp: { pt: 'MVP', en: 'MVP' },
  development: { pt: 'Em desenvolvimento', en: 'In development' },
  internal: { pt: 'Uso interno', en: 'Internal use' },
};

const LIVE = { pt: 'Acessar <~>', en: 'Open <~>' };
const GITHUB = { pt: 'Github <~>', en: 'Github <~>' };
const PRIVATE = { pt: 'Privado >=', en: 'Private >=' };
const SOLO = {
  pt: 'Projeto individual: produto, arquitetura, implementação, testes e deploy.',
  en: 'Solo project: product, architecture, implementation, testing, and deployment.',
};

// Ordem = ordem de exibição. Destaques primeiro.
export const projects: ProjectItem[] = [
  {
    name: 'PEI Vivo',
    category: 'web',
    stage: 'production',
    featured: true,
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL (RLS)', 'Zod', 'Vitest'],
    desc: {
      pt: 'Plataforma que conecta escola, família e saúde para adaptar materiais didáticos a estudantes com TEA, TDAH e dislexia. Meu TCC.',
      en: 'Platform linking school, family, and health professionals to adapt learning materials for students with autism, ADHD, and dyslexia. My thesis.'
    },
    note: { pt: 'TCC · Sistemas de Informação', en: 'Thesis · Information Systems' },
    overview: {
      pt: 'O Plano Educacional Individualizado (PEI) é obrigatório por lei, mas costuma virar um PDF esquecido. O PEI Vivo transforma o plano em um ciclo contínuo: observar → validar → adaptar → retroalimentar.',
      en: 'The Individualized Education Plan (IEP) is required by Brazilian law, but it usually ends up as a forgotten PDF. PEI Vivo turns it into a continuous cycle: observe → validate → adapt → feed back.'
    },
    role: {
      pt: 'TCC desenvolvido em dupla (CEUNI FAMETRO, 2026). Fui responsável pela implementação do sistema: todos os commits do repositório são meus.',
      en: 'Thesis built in a pair (CEUNI FAMETRO, 2026). I was responsible for implementing the system: every commit in the repository is mine.'
    },
    features: {
      pt: [
        'Docente, família e profissional de saúde registram observações a cada 15 dias em seis dimensões.',
        'O profissional de saúde valida cada ciclo antes de ele alterar o perfil do estudante.',
        'A docente cola um texto e recebe o material adaptado (blocos curtos, enunciados em etapa única, contraste reforçado), compara lado a lado e aprova.',
        'Consentimento em linguagem simples, granular e revogável, com trilha de auditoria.',
      ],
      en: [
        'Teachers, families, and health professionals log observations every 15 days across six dimensions.',
        'The health professional validates each cycle before it changes the student profile.',
        'The teacher pastes a text and gets an adapted version (short blocks, single-step instructions, stronger contrast), compares side by side, and approves.',
        'Plain-language, granular, revocable consent with an audit trail.',
      ]
    },
    architecture: {
      pt: 'Monorepo com React + Vite e Supabase (Postgres, Row Level Security, Auth e Edge Functions). Schemas Zod compartilhados entre front e back. O motor de adaptação é TypeScript puro e determinístico: as observações viram parâmetros previsíveis e auditáveis.',
      en: 'Monorepo with React + Vite and Supabase (Postgres, Row Level Security, Auth, and Edge Functions). Zod schemas shared between front and back end. The adaptation engine is plain, deterministic TypeScript: observations become predictable, auditable parameters.'
    },
    highlights: {
      pt: [
        'Mais de 100 testes das políticas de acesso no banco (RLS): o próprio Postgres nega o que o papel não pode ver.',
        'Auditoria de acessibilidade com axe-core e CI no GitHub Actions.',
        'Alinhado aos ODS 3 e 4 da ONU.',
      ],
      en: [
        'Over 100 database access-policy (RLS) tests: Postgres itself denies what a role must not see.',
        'Accessibility audits with axe-core and CI on GitHub Actions.',
        'Aligned with UN SDGs 3 and 4.',
      ]
    },
    status: 'live',
    link: 'https://tcc-peivivo.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-10-28',
  },
  {
    name: 'Ponte',
    category: 'desktop',
    stage: 'mvp',
    featured: true,
    stack: ['Electron', 'WebRTC', 'Node.js', 'WebSocket', 'Playwright'],
    desc: {
      pt: 'Suporte remoto assistido com convite de uso único, aprovação explícita, permissões por recurso e criptografia ponta a ponta via WebRTC.',
      en: 'Assisted remote support with single-use invites, explicit approval, per-feature permissions, and end-to-end encryption via WebRTC.'
    },
    note: { pt: 'App Desktop + Web · Open Source', en: 'Desktop + Web App · Open Source' },
    overview: {
      pt: 'Aplicativo para uma pessoa compartilhar a tela com quem vai ajudá-la, desenhado para dificultar golpes de "suporte técnico": nada acontece sem o consentimento de quem está sendo ajudado.',
      en: 'An app for someone to share their screen with the person helping them, designed to make "tech support" scams harder: nothing happens without the consent of the person being helped.'
    },
    role: SOLO,
    features: {
      pt: [
        'Convite com ID de 9 dígitos + código de 8 caracteres, de uso único e com expiração em 10 minutos.',
        'Permissões separadas (tela, arquivos, chat, gravação), desligadas por padrão e revogáveis a qualquer momento.',
        'Controle remoto com consentimento e conexão em rede local sem servidor externo.',
        'Roda no Windows, macOS e Linux (Electron) e também no navegador, com atualização automática pelas Releases do GitHub.',
      ],
      en: [
        'Invite with a 9-digit ID + 8-character code, single use, expiring in 10 minutes.',
        'Separate permissions (screen, files, chat, recording), off by default and revocable at any time.',
        'Consent-based remote control and LAN connections with no external server.',
        'Runs on Windows, macOS, and Linux (Electron) and in the browser, with auto-update from GitHub Releases.',
      ]
    },
    architecture: {
      pt: 'Tela, chat e arquivos trafegam ponta a ponta via WebRTC. Um servidor de sinalização em Node.js + WebSocket só aproxima os dois lados. Código de verificação contra interceptação e SHA-256 na transferência de arquivos.',
      en: 'Screen, chat, and files travel end to end over WebRTC. A Node.js + WebSocket signaling server only introduces the two peers. A verification code guards against interception, and file transfers are checked with SHA-256.'
    },
    highlights: {
      pt: [
        'Mais de 80 testes de integração no servidor de sinalização.',
        'Testes E2E com dois navegadores reais conectados por WebRTC (Playwright).',
        'Instaladores gerados automaticamente por GitHub Actions.',
      ],
      en: [
        'Over 80 integration tests on the signaling server.',
        'E2E tests with two real browsers connected over WebRTC (Playwright).',
        'Installers built automatically by GitHub Actions.',
      ]
    },
    link: 'https://github.com/geandreac/ponte-suporte-remoto',
    linkLabel: GITHUB,
    addedAt: '2026-11-10',
  },
  {
    name: 'Sevenzin',
    category: 'desktop',
    stage: 'released',
    featured: true,
    stack: ['C#', '.NET 8', 'WPF', 'WMI', 'xUnit'],
    desc: {
      pt: 'Otimizador de PC para Windows que mede antes de otimizar: monitores ao vivo e ajustes reversíveis, com backup e auditoria.',
      en: 'Windows PC optimizer that measures before it optimizes: live monitors and reversible tweaks with backup and audit.'
    },
    note: { pt: 'App Desktop · Open Source', en: 'Desktop App · Open Source' },
    overview: {
      pt: 'Aplicativo desktop de diagnóstico e otimização do Windows construído sobre uma regra: toda alteração vem com explicação, confirmação explícita e caminho de volta.',
      en: 'Windows diagnostics and optimization desktop app built on one rule: every change comes with an explanation, explicit confirmation, and a way back.'
    },
    role: SOLO,
    features: {
      pt: [
        'Monitores ao vivo de CPU, GPU, memória e latência com leituras reais ("—" quando a métrica não existe, nunca um valor inventado).',
        'Motor de ajustes reversível: prévia, backup do estado anterior, desfazer e log de auditoria.',
        'Perfis temporários por jogo (afinidade e prioridade revertidas ao fechar) e diagnóstico de GPU somente leitura.',
        'Instaladores verificados por assinatura/hash; login com bcrypt, papéis (admin × usuário) e proteção contra força bruta.',
      ],
      en: [
        'Live CPU, GPU, memory, and latency monitors with real readings ("—" when a metric is unavailable, never a made-up value).',
        'Reversible tweak engine: preview, backup of the previous state, undo, and an audit log.',
        'Temporary per-game profiles (affinity and priority restored on exit) and read-only GPU diagnostics.',
        'Installers verified by signature/hash; bcrypt login, roles (admin × user), and brute-force protection.',
      ]
    },
    architecture: {
      pt: 'Arquitetura em camadas: biblioteca de diagnóstico sem UI (WMI e contadores de performance), app WPF com tema escuro desenhado no Figma e um runner de linha de comando que gera relatórios do PC.',
      en: 'Layered architecture: a UI-free diagnostics library (WMI and performance counters), a WPF app with a dark theme designed in Figma, and a command-line runner that generates PC reports.'
    },
    highlights: {
      pt: [
        'Mais de 100 testes automatizados com xUnit.',
        'Versões publicadas no GitHub (v2.0.x).',
      ],
      en: [
        'Over 100 automated tests with xUnit.',
        'Versions published on GitHub (v2.0.x).',
      ]
    },
    link: 'https://github.com/geandreac/sevenzinTwk',
    linkLabel: GITHUB,
    addedAt: '2026-11-12',
  },
  {
    name: 'Juntaê',
    category: 'web',
    stage: 'production',
    stack: ['React', 'TypeScript', 'Express 5', 'Drizzle', 'Turso (SQLite)', 'PWA'],
    desc: {
      pt: 'PWA gratuito de calendário e tarefas compartilhadas: um grupo entra por código e passa a ver a mesma agenda, as mesmas listas e o mesmo mural.',
      en: 'Free PWA for shared calendars and tasks: a group joins with a code and sees the same schedule, lists, and board.'
    },
    note: { pt: 'Produto Web · PWA', en: 'Web Product · PWA' },
    overview: {
      pt: 'Famílias, grupos de amigos e equipes costumam combinar tudo em conversas que se perdem. No Juntaê, alguém cria uma "bolha", compartilha um código de 6 caracteres e a bolha vira a fonte única da verdade para eventos, tarefas e avisos.',
      en: 'Families, friend groups, and teams usually plan everything in chats that get lost. In Juntaê, someone creates a "bubble", shares a 6-character code, and the bubble becomes the single source of truth for events, tasks, and announcements.'
    },
    role: SOLO,
    features: {
      pt: [
        'Calendário em mês, semana e agenda, com eventos recorrentes, exportação .ics e link de assinatura para o Google Agenda.',
        'Tarefas com responsável, prioridade, prazo, repetição e tarefas "para todo mundo" (cada um marca a sua parte).',
        'Presença em eventos, "quem leva o quê", mural com confirmação de leitura, enquetes e escala com rodízio automático.',
        'Lembretes por push no celular, integração com WhatsApp e página pública opcional para quem não tem conta.',
        'Login sem senha por link de e-mail e exclusão de conta conforme a LGPD.',
      ],
      en: [
        'Month, week, and agenda views, with recurring events, .ics export, and a subscription link for Google Calendar.',
        'Tasks with assignee, priority, due date, repetition, and "everyone" tasks (each person checks off their part).',
        'Event RSVPs, "who brings what", a board with read receipts, polls, and rotas with automatic rotation.',
        'Push reminders on the phone, WhatsApp sharing, and an optional public page for people without an account.',
        'Passwordless login via email link and LGPD-compliant account deletion.',
      ]
    },
    architecture: {
      pt: 'Monorepo com npm workspaces (client, server, shared). API em Express 5 organizada em routes → controllers → services → repositories, com schemas Zod compartilhados com o front. Sessão com access token de 15 min e refresh token rotativo em cookie httpOnly. Banco libSQL (Turso) via Drizzle ORM. Todo o stack roda em planos gratuitos da Vercel e da Turso.',
      en: 'npm-workspaces monorepo (client, server, shared). Express 5 API layered as routes → controllers → services → repositories, with Zod schemas shared with the front end. Sessions use a 15-minute access token and a rotating refresh token in an httpOnly cookie. libSQL (Turso) database via Drizzle ORM. The whole stack runs on Vercel and Turso free tiers.'
    },
    highlights: {
      pt: [
        'Mais de 100 testes de services e rotas com Vitest e Supertest.',
        'Segurança na API: bcrypt, helmet, CORS restrito e rate limit.',
        'PWA instalável com leitura offline, áreas de toque de 44px e animações que respeitam "reduzir movimento".',
      ],
      en: [
        'Over 100 service and route tests with Vitest and Supertest.',
        'API security: bcrypt, helmet, strict CORS, and rate limiting.',
        'Installable PWA with offline reading, 44px touch targets, and animations that respect "reduce motion".',
      ]
    },
    status: 'live',
    link: 'https://juntae-three.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-11-18',
  },
  {
    name: 'MatchDay',
    category: 'web',
    stage: 'production',
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mercado Pago'],
    desc: {
      pt: 'Plataforma para reservar campos de futebol e dividir o pagamento via PIX: cada amigo paga a sua parte pelo link compartilhado.',
      en: 'Platform to book soccer fields and split the bill via PIX: each friend pays their share through a shared link.'
    },
    note: { pt: 'SaaS · Pagamentos', en: 'SaaS · Payments' },
    overview: {
      pt: 'Conecta jogadores a donos de campos. O jogador reserva horários consecutivos, paga via PIX real (Mercado Pago, com QR Code) e compartilha um link para que cada amigo contribua com o valor que quiser.',
      en: 'Connects players to field owners. Players book consecutive slots, pay with real PIX (Mercado Pago, with a QR code), and share a link so each friend chips in whatever they want.'
    },
    role: SOLO,
    features: {
      pt: [
        'Jogador: busca por cidade ou geolocalização, reserva, cancelamento, avaliação pós-partida e créditos com reembolso instantâneo.',
        'Dono de campo: cadastro completo, dashboard de faturamento e cancelamento com reembolso automático via PIX.',
        'Admin: relatórios financeiros e gestão de usuários e campos.',
      ],
      en: [
        'Player: search by city or geolocation, booking, cancellation, post-match ratings, and credits with instant refunds.',
        'Field owner: full listing, revenue dashboard, and cancellation with automatic PIX refunds.',
        'Admin: financial reports and user/field management.',
      ]
    },
    architecture: {
      pt: 'Next.js 16 com API Routes, Prisma 7 sobre PostgreSQL (Neon), NextAuth e Supabase Storage para fotos. PWA instalável com modo claro/escuro e deploy na Vercel.',
      en: 'Next.js 16 with API Routes, Prisma 7 on PostgreSQL (Neon), NextAuth, and Supabase Storage for photos. Installable PWA with light/dark mode, deployed on Vercel.'
    },
    highlights: {
      pt: ['Integração de pagamento real (PIX) com reembolso automático.', 'Testes E2E com Playwright.'],
      en: ['Real payment integration (PIX) with automatic refunds.', 'E2E tests with Playwright.']
    },
    status: 'live',
    link: 'https://campo-reserva.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-05-31',
  },
  {
    name: 'CardWise',
    category: 'web',
    stage: 'production',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Gemini', 'Groq'],
    desc: {
      pt: 'SaaS de gestão de cartões de crédito com IA: lê faturas em PDF, categoriza gastos e projeta parcelas em uma janela de 24 meses.',
      en: 'Credit card management SaaS with AI: reads PDF statements, categorizes spending, and projects installments over 24 months.'
    },
    note: { pt: 'SaaS · IA aplicada', en: 'SaaS · Applied AI' },
    overview: {
      pt: 'Automatiza a parte chata do controle de cartões: em vez de digitar a fatura, o usuário envia o PDF e recebe os gastos categorizados e as parcelas futuras.',
      en: 'Automates the tedious part of tracking credit cards: instead of typing the statement, users upload the PDF and get categorized spending and future installments.'
    },
    role: SOLO,
    features: {
      pt: [
        'Leitura de faturas em PDF com categorização automática.',
        'Smart Cycle Calendar: mostra quando cada fatura fecha e vence e calcula a "melhor data de compra" em tempo real.',
        'Projeções de 24 meses para parcelas e gastos recorrentes.',
      ],
      en: [
        'PDF statement reading with automatic categorization.',
        'Smart Cycle Calendar: shows when each statement closes and is due, and computes the "best purchase date" in real time.',
        '24-month projections for installments and recurring expenses.',
      ]
    },
    architecture: {
      pt: 'Leitura com IA em três camadas: o PDF vai direto ao Gemini; se falhar, o texto é extraído e processado pela Groq; um parser por regex fica como última linha de defesa. Next.js 14 (App Router) com Supabase (Auth, Postgres e RLS), SWR para cache e Framer Motion nas micro-interações.',
      en: 'Three-layer AI reading: the PDF goes straight to Gemini; if that fails, the text is extracted and processed by Groq; a regex parser is the last line of defense. Next.js 14 (App Router) with Supabase (Auth, Postgres, and RLS), SWR for caching, and Framer Motion for micro-interactions.'
    },
    highlights: {
      pt: ['Fallback entre dois provedores de IA e um parser determinístico: a leitura não depende de um único serviço.'],
      en: ['Fallback across two AI providers and a deterministic parser: reading never depends on a single service.']
    },
    status: 'live',
    link: 'https://cardwise-eight.vercel.app/',
    linkLabel: LIVE,
    addedAt: '2026-08-17',
  },
  {
    name: 'Barbearia SaaS',
    category: 'web',
    stage: 'development',
    stack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'Turborepo'],
    desc: {
      pt: 'SaaS multi-tenant de gestão para barbearias: agenda, ERP, CRM e financeiro, com atendente de IA no WhatsApp no roadmap. Desenvolvido em equipe.',
      en: 'Multi-tenant barbershop management SaaS: scheduling, ERP, CRM, and finance, with a WhatsApp AI assistant on the roadmap. Built as a team.'
    },
    note: { pt: 'Projeto em equipe', en: 'Team project' },
    overview: {
      pt: 'Sistema de gestão que vai além da agenda: ERP, CRM, financeiro, estoque, campanhas e fidelização. O roadmap inclui uma IA no WhatsApp que agenda, remarca e recupera clientes inativos.',
      en: 'Management system that goes beyond scheduling: ERP, CRM, finance, inventory, campaigns, and loyalty. The roadmap includes a WhatsApp AI that books, reschedules, and wins back inactive clients.'
    },
    role: {
      pt: 'Projeto em equipe de duas pessoas; sou autor da maior parte dos commits do repositório.',
      en: 'Two-person team project; I authored most of the commits in the repository.'
    },
    features: {
      pt: [
        'Ambiente isolado por barbearia; um dono pode gerenciar várias unidades em um painel consolidado.',
        'Planos por assinatura liberam recursos via feature flags.',
        'Papéis configuráveis: dono, sócio, atendente, barbeiro e cliente (com painel próprio).',
      ],
      en: [
        'Isolated environment per barbershop; an owner can manage several locations from a consolidated dashboard.',
        'Subscription plans unlock features via feature flags.',
        'Configurable roles: owner, partner, receptionist, barber, and client (with its own dashboard).',
      ]
    },
    architecture: {
      pt: 'Monorepo com Turborepo: frontend em Next.js 14 + Tailwind, backend em FastAPI + SQLAlchemy 2.0, PostgreSQL (Supabase) + Redis, pagamentos via AsaaS e CI/CD com GitHub Actions.',
      en: 'Turborepo monorepo: Next.js 14 + Tailwind front end, FastAPI + SQLAlchemy 2.0 back end, PostgreSQL (Supabase) + Redis, AsaaS payments, and CI/CD with GitHub Actions.'
    },
    linkLabel: { pt: 'Em breve <~>', en: 'Soon <~>' },
    addedAt: '2026-07-10',
  },
  {
    name: 'Controle de Entregas',
    category: 'automation',
    stage: 'internal',
    stack: ['Power Apps', 'SQL Server', 'Python', 'Graph API'],
    desc: {
      pt: 'Sistema corporativo para o fluxo de expedição logística, com app de campo em Power Apps sincronizado com SQL Server via Python.',
      en: 'Corporate system for the logistics dispatch flow, with a Power Apps field app synced with SQL Server via Python.'
    },
    note: { pt: 'PJ Materiais de Construção', en: 'PJ Materiais de Construção' },
    overview: {
      pt: 'Solução desenvolvida para organizar o fluxo de entregas da PJ Materiais de Construção, da separação à expedição.',
      en: 'Solution built to organize the delivery flow at PJ Materiais de Construção, from picking to dispatch.'
    },
    architecture: {
      pt: 'Interface de campo em Power Apps, dados em SQL Server e sincronização bidirecional feita por scripts Python autenticados via MSAL (Microsoft Graph API).',
      en: 'Power Apps field interface, SQL Server data, and bidirectional sync done by Python scripts authenticated via MSAL (Microsoft Graph API).'
    },
    linkLabel: PRIVATE,
    addedAt: '2023-11-15',
  },
  {
    name: 'Scripts de Automação',
    category: 'automation',
    stage: 'internal',
    stack: ['Python', 'MSAL', 'OAuth 2.0'],
    desc: {
      pt: 'Scripts Python de integração com APIs REST e processamento em lote de dados corporativos, complementando os sistemas acima.',
      en: 'Python scripts for REST API integration and batch processing of corporate data, complementing the systems above.'
    },
    overview: {
      pt: 'Coleção de ferramentas de automação e integração de dados que alimentam dashboards e sistemas satélites a partir de APIs autenticadas com OAuth 2.0.',
      en: 'Collection of automation and data integration tools that feed dashboards and satellite systems from OAuth 2.0-authenticated APIs.'
    },
    linkLabel: PRIVATE,
    addedAt: '2023-08-10',
  },
  {
    name: 'Portfolio v2.0',
    category: 'web',
    stage: 'production',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    desc: {
      pt: 'Este site: single-page bilíngue (PT/EN), com filtro de projetos, modal acessível e animações que respeitam "reduzir movimento".',
      en: 'This site: a bilingual (PT/EN) single page with project filters, an accessible modal, and animations that respect "reduce motion".'
    },
    role: SOLO,
    link: 'https://github.com/geandreac/portfolio-geandre',
    linkLabel: GITHUB,
    addedAt: '2024-04-20',
  },
];
