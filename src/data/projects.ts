type L = { pt: string; en: string };
type LL = { pt: string[]; en: string[] };

export type ProjectCategory = 'web' | 'desktop' | 'automation';
export type ProjectStage = 'released' | 'production' | 'mvp' | 'development' | 'internal';

// Textos de card e modal em linguagem de cliente; "architecture" e "highlights" guardam o detalhe técnico.
export interface ProjectItem {
  name: string;
  category: ProjectCategory;
  stage: ProjectStage;
  featured?: boolean;
  stack: string[];
  desc: L;            // card: o que o sistema resolve, em uma frase
  note?: L;           // para quem / tipo de solução
  overview?: L;       // o problema
  features?: LL;      // o que foi entregue
  role?: L;           // meu papel
  architecture?: L;   // como funciona por dentro
  highlights?: LL;    // qualidade e segurança
  status?: 'live';
  link?: string;
  linkLabel?: L;
  youtubeId?: string;
  addedAt: string;
}

export const categories: { id: ProjectCategory | 'all'; label: L }[] = [
  { id: 'all', label: { pt: 'Todos', en: 'All' } },
  { id: 'web', label: { pt: 'Sistemas e Apps Web', en: 'Web Systems & Apps' } },
  { id: 'automation', label: { pt: 'Automação de Processos', en: 'Process Automation' } },
  { id: 'desktop', label: { pt: 'Programas para Computador', en: 'Desktop Software' } },
];

export const stageLabels: Record<ProjectStage, L> = {
  released: { pt: 'Versão publicada', en: 'Released' },
  production: { pt: 'Em uso', en: 'In use' },
  mvp: { pt: 'Versão inicial', en: 'Early version' },
  development: { pt: 'Em desenvolvimento', en: 'In development' },
  internal: { pt: 'Uso interno', en: 'Internal use' },
};

const LIVE = { pt: 'Ver funcionando <~>', en: 'See it live <~>' };
const GITHUB = { pt: 'Ver código <~>', en: 'View code <~>' };
const PRIVATE = { pt: 'Sistema privado >=', en: 'Private system >=' };
const SOLO = {
  pt: 'Fiz o projeto inteiro sozinho: planejamento, telas, sistema, testes e publicação.',
  en: 'I built the whole project on my own: planning, screens, system, testing, and launch.',
};

// Ordem = ordem de exibição. Destaques primeiro.
export const projects: ProjectItem[] = [
  {
    name: 'MatchDay',
    category: 'web',
    stage: 'production',
    featured: true,
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mercado Pago'],
    desc: {
      pt: 'Reserva de campos de futebol pela internet, com pagamento por PIX dividido entre os amigos: cada um paga a sua parte pelo link.',
      en: 'Online soccer field booking with PIX payment split among friends: each one pays their share through a link.'
    },
    note: { pt: 'Agendamento + pagamento online', en: 'Booking + online payment' },
    overview: {
      pt: 'Reservar um campo costuma depender de ligação, mensagem e de alguém cobrando o grupo depois. O MatchDay coloca tudo isso num lugar só: o jogador escolhe o horário, paga por PIX e manda um link para os amigos completarem o valor.',
      en: 'Booking a field usually means phone calls, messages, and someone chasing the group for money afterwards. MatchDay puts it all in one place: the player picks a slot, pays with PIX, and sends a link for friends to chip in.'
    },
    features: {
      pt: [
        'Para o jogador: busca de campos por cidade ou localização, reserva de vários horários seguidos, cancelamento e avaliação depois da partida.',
        'Pagamento por PIX real (Mercado Pago, com QR Code), divisão por link e crédito com reembolso na hora.',
        'Para o dono do campo: cadastro do espaço, painel de faturamento e reembolso automático quando precisa cancelar.',
        'Para o administrador: relatórios financeiros e gestão de usuários e campos.',
        'Pode ser instalado no celular como aplicativo, com modo claro e escuro.',
      ],
      en: [
        'For players: search fields by city or location, book consecutive slots, cancel, and rate after the match.',
        'Real PIX payments (Mercado Pago, with QR code), link-based splitting, and credit with instant refunds.',
        'For field owners: space listing, revenue dashboard, and automatic refunds when they need to cancel.',
        'For admins: financial reports and user/field management.',
        'Installable on the phone like an app, with light and dark mode.',
      ]
    },
    role: SOLO,
    architecture: {
      pt: 'Next.js 16 com API Routes, Prisma 7 sobre PostgreSQL (Neon), NextAuth e Supabase Storage para as fotos. PWA publicado na Vercel.',
      en: 'Next.js 16 with API Routes, Prisma 7 on PostgreSQL (Neon), NextAuth, and Supabase Storage for photos. PWA deployed on Vercel.'
    },
    highlights: {
      pt: ['Pagamento real integrado, com reembolso automático.', 'Testes de ponta a ponta com Playwright simulando o uso real.'],
      en: ['Real payment integration with automatic refunds.', 'End-to-end tests with Playwright simulating real use.']
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
    featured: true,
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Gemini', 'Groq'],
    desc: {
      pt: 'Controle de cartões de crédito com inteligência artificial: você envia a fatura em PDF e o sistema separa os gastos e mostra as parcelas dos próximos 24 meses.',
      en: 'Credit card tracking with artificial intelligence: upload the PDF statement and the system sorts your spending and shows installments for the next 24 months.'
    },
    note: { pt: 'Inteligência artificial aplicada', en: 'Applied AI' },
    overview: {
      pt: 'Organizar cartões de crédito dá trabalho: copiar fatura para planilha, lembrar de parcelas, saber quando cada cartão fecha. O CardWise faz a parte chata sozinho a partir do PDF da fatura.',
      en: 'Keeping track of credit cards is tedious: copying statements into spreadsheets, remembering installments, knowing when each card closes. CardWise does the tedious part on its own from the PDF statement.'
    },
    features: {
      pt: [
        'Leitura automática da fatura em PDF, com os gastos já separados por categoria.',
        'Calendário que mostra quando cada fatura fecha e vence e indica o melhor dia para comprar.',
        'Projeção de parcelas e gastos fixos para os próximos 24 meses.',
      ],
      en: [
        'Automatic PDF statement reading, with spending already sorted by category.',
        'Calendar showing when each statement closes and is due, and the best day to buy.',
        'Projection of installments and fixed expenses for the next 24 months.',
      ]
    },
    role: SOLO,
    architecture: {
      pt: 'A leitura usa IA em três camadas: o PDF vai direto ao Gemini; se falhar, o texto é extraído e enviado à Groq; um leitor por regras fica como última garantia. Next.js 14 (App Router), Supabase (Auth, Postgres e RLS) e SWR para cache.',
      en: 'Reading uses AI in three layers: the PDF goes straight to Gemini; if that fails, the text is extracted and sent to Groq; a rule-based parser is the last safeguard. Next.js 14 (App Router), Supabase (Auth, Postgres, and RLS), and SWR for caching.'
    },
    highlights: {
      pt: ['Não depende de um único serviço de IA: se um falhar, o próximo assume.', 'Cada usuário só enxerga os próprios dados, com a regra garantida pelo banco.'],
      en: ['Never depends on a single AI service: if one fails, the next takes over.', 'Each user only sees their own data, enforced by the database.']
    },
    status: 'live',
    link: 'https://cardwise-eight.vercel.app/',
    linkLabel: LIVE,
    addedAt: '2026-08-17',
  },
  {
    name: 'PEI Vivo',
    category: 'web',
    stage: 'production',
    featured: true,
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL (RLS)', 'Zod', 'Vitest'],
    desc: {
      pt: 'Plataforma que une escola, família e profissionais de saúde para adaptar materiais de aula a estudantes com autismo, TDAH e dislexia.',
      en: 'Platform that brings school, family, and health professionals together to adapt class materials for students with autism, ADHD, and dyslexia.'
    },
    note: { pt: 'Educação inclusiva · TCC', en: 'Inclusive education · Thesis' },
    overview: {
      pt: 'Toda escola precisa ter um Plano Educacional Individualizado (PEI) para esses estudantes, mas ele costuma virar um documento esquecido. O PEI Vivo transforma o plano em acompanhamento contínuo, com quem convive com o estudante participando.',
      en: 'Brazilian schools must have an Individualized Education Plan (IEP) for these students, but it usually becomes a forgotten document. PEI Vivo turns the plan into ongoing follow-up, with everyone around the student taking part.'
    },
    features: {
      pt: [
        'Professora, família e profissional de saúde registram observações a cada 15 dias.',
        'O profissional de saúde valida cada ciclo antes de qualquer mudança no perfil do estudante.',
        'A professora cola um texto e recebe uma versão adaptada (blocos curtos, instruções de uma etapa, mais contraste), compara lado a lado e aprova.',
        'Consentimento da família em linguagem simples, que pode ser revogado a qualquer momento.',
      ],
      en: [
        'Teacher, family, and health professional log observations every 15 days.',
        'The health professional validates each cycle before anything changes in the student profile.',
        'The teacher pastes a text and gets an adapted version (short blocks, single-step instructions, more contrast), compares side by side, and approves.',
        'Plain-language family consent that can be revoked at any time.',
      ]
    },
    role: {
      pt: 'TCC de Sistemas de Informação feito em dupla (CEUNI FAMETRO, 2026). Fui responsável por desenvolver o sistema: todo o código do repositório é meu.',
      en: 'Information Systems thesis built in a pair (CEUNI FAMETRO, 2026). I was responsible for building the system: all the code in the repository is mine.'
    },
    architecture: {
      pt: 'React + Vite e Supabase (Postgres, Row Level Security, Auth e Edge Functions), com validação Zod compartilhada. A adaptação dos textos segue regras fixas e auditáveis em TypeScript, sem depender de IA.',
      en: 'React + Vite and Supabase (Postgres, Row Level Security, Auth, and Edge Functions), with shared Zod validation. Text adaptation follows fixed, auditable rules in TypeScript, without relying on AI.'
    },
    highlights: {
      pt: [
        'Mais de 100 testes garantindo que cada pessoa só vê o que o seu papel permite.',
        'Acessibilidade verificada com axe-core e testes automáticos a cada mudança (GitHub Actions).',
      ],
      en: [
        'Over 100 tests ensuring each person only sees what their role allows.',
        'Accessibility checked with axe-core and automatic tests on every change (GitHub Actions).',
      ]
    },
    status: 'live',
    link: 'https://tcc-peivivo.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-10-28',
  },
  {
    name: 'Juntaê',
    category: 'web',
    stage: 'production',
    stack: ['React', 'TypeScript', 'Express 5', 'Drizzle', 'Turso (SQLite)', 'PWA'],
    desc: {
      pt: 'Agenda e lista de tarefas compartilhadas para famílias, amigos e equipes: o grupo entra com um código e todo mundo vê as mesmas informações.',
      en: 'Shared calendar and task list for families, friends, and teams: the group joins with a code and everyone sees the same information.'
    },
    note: { pt: 'Aplicativo para grupos', en: 'App for groups' },
    overview: {
      pt: 'Grupos combinam tudo em conversas que se perdem: quem vai, quem leva o quê, quem ficou com qual tarefa. No Juntaê, alguém cria um grupo, compartilha um código de 6 letras e passa a existir um lugar único para eventos, tarefas e avisos.',
      en: 'Groups plan everything in chats that get lost: who is coming, who brings what, who took which task. In Juntaê, someone creates a group, shares a 6-letter code, and there is now a single place for events, tasks, and announcements.'
    },
    features: {
      pt: [
        'Calendário com eventos que se repetem e link para acompanhar pelo Google Agenda.',
        'Tarefas com responsável, prazo e prioridade, inclusive tarefas que cada pessoa marca a sua parte.',
        'Confirmação de presença, "quem leva o quê", mural de avisos com confirmação de leitura, enquetes e escala com revezamento automático.',
        'Lembretes no celular, compartilhamento pelo WhatsApp e página pública opcional para quem não tem conta.',
        'Entrar sem senha, por link no e-mail, e exclusão de conta conforme a LGPD.',
      ],
      en: [
        'Calendar with recurring events and a link to follow it in Google Calendar.',
        'Tasks with assignee, due date, and priority, including tasks where each person checks off their part.',
        'RSVPs, "who brings what", an announcement board with read receipts, polls, and rotas with automatic rotation.',
        'Phone reminders, WhatsApp sharing, and an optional public page for people without an account.',
        'Passwordless sign-in via email link and LGPD-compliant account deletion.',
      ]
    },
    role: SOLO,
    architecture: {
      pt: 'Monorepo (client, server, shared). API em Express 5 em camadas (rotas, controladores, serviços, repositórios) com validação Zod compartilhada. Sessão com token curto e renovação em cookie seguro. Banco libSQL (Turso) via Drizzle. Roda inteiro em planos gratuitos da Vercel e da Turso.',
      en: 'Monorepo (client, server, shared). Layered Express 5 API (routes, controllers, services, repositories) with shared Zod validation. Short-lived sessions renewed through a secure cookie. libSQL (Turso) database via Drizzle. Runs entirely on Vercel and Turso free tiers.'
    },
    highlights: {
      pt: [
        'Mais de 100 testes automatizados cobrindo regras e rotas.',
        'Proteções contra abuso: senhas guardadas de forma segura, limite de tentativas e acesso restrito ao próprio app.',
        'Funciona offline para consulta e respeita quem prefere menos animação.',
      ],
      en: [
        'Over 100 automated tests covering rules and routes.',
        'Abuse protection: securely stored passwords, rate limiting, and access restricted to the app itself.',
        'Works offline for reading and respects users who prefer less motion.',
      ]
    },
    status: 'live',
    link: 'https://juntae-three.vercel.app',
    linkLabel: LIVE,
    addedAt: '2026-11-18',
  },
  {
    name: 'Controle de Entregas',
    category: 'automation',
    stage: 'internal',
    stack: ['Power Apps', 'SQL Server', 'Python', 'Graph API'],
    desc: {
      pt: 'Sistema que organiza as entregas de uma loja de materiais de construção, da separação à saída do pedido, com os dados sincronizados ao banco da empresa.',
      en: 'System that organizes deliveries for a building supplies store, from picking to dispatch, with data synced to the company database.'
    },
    note: { pt: 'PJ Materiais de Construção', en: 'PJ Materiais de Construção' },
    overview: {
      pt: 'A expedição de uma loja envolve várias etapas e pessoas. O sistema dá à equipe um aplicativo para registrar cada etapa, e essas informações chegam ao banco de dados da empresa sem digitação dupla.',
      en: 'Dispatch at a store involves several steps and people. The system gives the team an app to log each step, and the information reaches the company database without double entry.'
    },
    features: {
      pt: [
        'Aplicativo para a equipe acompanhar e registrar o andamento das entregas.',
        'Sincronização nos dois sentidos entre o aplicativo e o banco de dados da empresa.',
        'Acesso protegido pela conta Microsoft da empresa.',
      ],
      en: [
        'App for the team to track and log delivery progress.',
        'Two-way sync between the app and the company database.',
        "Access protected by the company's Microsoft account.",
      ]
    },
    architecture: {
      pt: 'Interface em Power Apps, dados em SQL Server e sincronização feita por scripts Python autenticados via MSAL (Microsoft Graph API).',
      en: 'Power Apps interface, SQL Server data, and sync done by Python scripts authenticated via MSAL (Microsoft Graph API).'
    },
    linkLabel: PRIVATE,
    addedAt: '2023-11-15',
  },
  {
    name: 'Barbearia SaaS',
    category: 'web',
    stage: 'development',
    stack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'Turborepo'],
    desc: {
      pt: 'Sistema de gestão para barbearias com agenda, clientes, financeiro e estoque, pronto para várias unidades e planos de assinatura. Feito em equipe.',
      en: 'Management system for barbershops with scheduling, clients, finance, and inventory, ready for multiple locations and subscription plans. Built as a team.'
    },
    note: { pt: 'Gestão de negócio · Em equipe', en: 'Business management · Team' },
    overview: {
      pt: 'Barbearias costumam usar um app para agenda, um caderno para o caixa e o WhatsApp para os clientes. Este sistema reúne agenda, cadastro de clientes, financeiro, estoque, campanhas e fidelização em um painel só. O roadmap inclui um atendente com IA no WhatsApp.',
      en: 'Barbershops often use one app for scheduling, a notebook for cash, and WhatsApp for clients. This system brings scheduling, clients, finance, inventory, campaigns, and loyalty into one dashboard. The roadmap includes an AI assistant on WhatsApp.'
    },
    features: {
      pt: [
        'Cada barbearia tem seu próprio espaço, e um dono pode acompanhar várias unidades em um painel único.',
        'Planos de assinatura liberam recursos conforme o plano contratado.',
        'Acesso por papel: dono, sócio, atendente, barbeiro e cliente, cada um com o seu painel.',
      ],
      en: [
        'Each barbershop has its own space, and an owner can follow several locations from one dashboard.',
        'Subscription plans unlock features according to the plan.',
        'Role-based access: owner, partner, receptionist, barber, and client, each with their own dashboard.',
      ]
    },
    role: {
      pt: 'Projeto em equipe de duas pessoas; sou autor da maior parte do código.',
      en: 'Two-person team project; I wrote most of the code.'
    },
    architecture: {
      pt: 'Monorepo com Turborepo: frontend em Next.js 14 + Tailwind, backend em FastAPI + SQLAlchemy 2.0, PostgreSQL (Supabase) + Redis, pagamentos via AsaaS e CI/CD com GitHub Actions.',
      en: 'Turborepo monorepo: Next.js 14 + Tailwind front end, FastAPI + SQLAlchemy 2.0 back end, PostgreSQL (Supabase) + Redis, AsaaS payments, and CI/CD with GitHub Actions.'
    },
    linkLabel: { pt: 'Em breve <~>', en: 'Soon <~>' },
    addedAt: '2026-07-10',
  },
  {
    name: 'Ponte',
    category: 'desktop',
    stage: 'mvp',
    stack: ['Electron', 'WebRTC', 'Node.js', 'WebSocket', 'Playwright'],
    desc: {
      pt: 'Programa de acesso remoto para ajudar alguém no computador com segurança: nada acontece sem a autorização de quem está sendo ajudado.',
      en: "Remote access software to help someone on their computer safely: nothing happens without the permission of the person being helped."
    },
    note: { pt: 'Suporte remoto seguro · Código aberto', en: 'Secure remote support · Open source' },
    overview: {
      pt: 'Golpes de "suporte técnico" usam programas de acesso remoto para tomar o controle do computador da vítima. O Ponte foi pensado ao contrário: quem recebe ajuda vê e aprova cada permissão, e pode cortar o acesso a qualquer momento.',
      en: '"Tech support" scams use remote access tools to take over the victim\'s computer. Ponte was designed the other way around: the person being helped sees and approves each permission, and can cut access at any time.'
    },
    features: {
      pt: [
        'Convite de uso único que expira em 10 minutos.',
        'Permissões separadas para tela, arquivos, chat e gravação, todas desligadas até a pessoa liberar.',
        'Controle remoto só com consentimento, e conexão direta na mesma rede, sem passar por servidor externo.',
        'Funciona no Windows, macOS, Linux e no navegador, e se atualiza sozinho.',
      ],
      en: [
        'Single-use invite that expires in 10 minutes.',
        'Separate permissions for screen, files, chat, and recording, all off until the person allows them.',
        'Remote control only with consent, and direct connection on the same network, without an external server.',
        'Works on Windows, macOS, Linux, and in the browser, and updates itself.',
      ]
    },
    role: SOLO,
    architecture: {
      pt: 'Tela, chat e arquivos trafegam com criptografia de ponta a ponta via WebRTC; um servidor Node.js + WebSocket só aproxima os dois lados. Código de verificação contra interceptação e checagem SHA-256 nos arquivos.',
      en: 'Screen, chat, and files travel end-to-end encrypted over WebRTC; a Node.js + WebSocket server only introduces the two sides. A verification code guards against interception, and files are checked with SHA-256.'
    },
    highlights: {
      pt: [
        'Mais de 80 testes de integração no servidor.',
        'Testes de ponta a ponta com dois navegadores reais conectados entre si.',
        'Instaladores gerados automaticamente a cada versão.',
      ],
      en: [
        'Over 80 integration tests on the server.',
        'End-to-end tests with two real browsers connected to each other.',
        'Installers built automatically for every release.',
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
    stack: ['C#', '.NET 8', 'WPF', 'WMI', 'xUnit'],
    desc: {
      pt: 'Programa para Windows que analisa o desempenho do computador e aplica otimizações que sempre podem ser desfeitas.',
      en: 'Windows program that analyzes computer performance and applies optimizations that can always be undone.'
    },
    note: { pt: 'Programa para Windows · Código aberto', en: 'Windows software · Open source' },
    overview: {
      pt: 'Muitos "otimizadores" mexem no sistema sem explicar o que fazem e sem caminho de volta. O Sevenzin mede antes de mexer, explica cada ajuste, pede confirmação e guarda o estado anterior.',
      en: 'Many "optimizers" change the system without explaining what they do and with no way back. Sevenzin measures before changing anything, explains each tweak, asks for confirmation, and keeps the previous state.'
    },
    features: {
      pt: [
        'Monitores em tempo real de processador, placa de vídeo, memória e latência, só com leituras reais.',
        'Cada ajuste tem prévia, cópia de segurança, opção de desfazer e registro do que foi feito.',
        'Perfis temporários para jogos, desfeitos automaticamente ao fechar o jogo.',
        'Login com senha protegida e níveis de acesso (administrador e usuário).',
      ],
      en: [
        'Real-time CPU, GPU, memory, and latency monitors, using real readings only.',
        'Every tweak has a preview, backup, undo, and a log of what was done.',
        'Temporary gaming profiles, automatically undone when the game closes.',
        'Login with protected passwords and access levels (admin and user).',
      ]
    },
    role: SOLO,
    architecture: {
      pt: 'Arquitetura em camadas: biblioteca de diagnóstico sem interface (WMI e contadores de performance), aplicativo WPF com tema escuro desenhado no Figma e uma versão de linha de comando que gera relatórios.',
      en: 'Layered architecture: a UI-free diagnostics library (WMI and performance counters), a WPF app with a dark theme designed in Figma, and a command-line version that generates reports.'
    },
    highlights: {
      pt: ['Mais de 100 testes automatizados (xUnit).', 'Versões publicadas no GitHub (v2.0.x).'],
      en: ['Over 100 automated tests (xUnit).', 'Versions published on GitHub (v2.0.x).']
    },
    link: 'https://github.com/geandreac/sevenzinTwk',
    linkLabel: GITHUB,
    addedAt: '2026-11-12',
  },
  {
    name: 'Scripts de Automação',
    category: 'automation',
    stage: 'internal',
    stack: ['Python', 'MSAL', 'OAuth 2.0'],
    desc: {
      pt: 'Rotinas em Python que buscam dados de outros sistemas e atualizam relatórios sozinhas, sem copiar e colar.',
      en: 'Python routines that pull data from other systems and update reports on their own, with no copy and paste.'
    },
    note: { pt: 'Automação de dados', en: 'Data automation' },
    overview: {
      pt: 'Conjunto de automações que conectam sistemas da empresa e processam dados em lote para alimentar painéis e outros sistemas.',
      en: 'Set of automations that connect company systems and batch-process data to feed dashboards and other systems.'
    },
    architecture: {
      pt: 'Scripts Python integrados a APIs REST com autenticação OAuth 2.0 via MSAL.',
      en: 'Python scripts integrated with REST APIs using OAuth 2.0 authentication via MSAL.'
    },
    linkLabel: PRIVATE,
    addedAt: '2023-08-10',
  },
  {
    name: 'Este portfólio',
    category: 'web',
    stage: 'production',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    desc: {
      pt: 'O site que você está vendo: em português e inglês, funciona bem no celular e pode ser navegado só pelo teclado.',
      en: "The site you're on: in Portuguese and English, works well on phones, and can be navigated with the keyboard alone."
    },
    role: SOLO,
    link: 'https://github.com/geandreac/portfolio-geandre',
    linkLabel: GITHUB,
    addedAt: '2024-04-20',
  },
];
