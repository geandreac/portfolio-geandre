export interface ExperienceItem {
  period: string;
  periodEnd: string;
  isCurrent: boolean;
  company: string;
  role: { pt: string; en: string };
  points: { pt: string[]; en: string[] };
}

export const experience: ExperienceItem[] = [
  {
    period: 'Mar/2026',
    periodEnd: 'Atual',
    isCurrent: true,
    company: 'Aliança Navegação e Transportes',
    role: {
      pt: 'Jovem Aprendiz · Backoffice',
      en: 'Apprentice · Backoffice'
    },
    points: {
      pt: [
        'Gestão de confirmação de bookings via e-Cargo',
        'Criação de Aplicativos via Power Apps & Sharepoint Online',
        'Criação de fluxos de automação via Power Automate',
      ],
      en: [
        'Booking confirmation management via e-Cargo',
        'App development via Power Apps & Sharepoint Online',
        'Automation workflows via Power Automate',
      ]
    },
  },
  {
    period: 'Mai/2025',
    periodEnd: 'Nov/2025',
    isCurrent: false,
    company: 'Metacon Construções',
    role: {
      pt: 'Jovem Aprendiz · Gestão de Informações',
      en: 'Apprentice · Information Management'
    },
    points: {
      pt: [
        'Estruturação de registros corporativos entre RH, Compras e Financeiro',
        'Padronização de dados e melhoria de processos internos',
      ],
      en: [
        'Structuring corporate records across HR, Procurement, and Finance',
        'Data standardization and internal process improvement',
      ]
    },
  },
  {
    period: 'Jan/2024',
    periodEnd: 'Abr/2025',
    isCurrent: false,
    company: 'MLobato Engenharia',
    role: {
      pt: 'Estagiário · Suporte & TI',
      en: 'IT Support Intern'
    },
    points: {
      pt: [
        'Suporte a sistemas internos para eficiência operacional',
        'Apoio técnico a setores de RH, Compras e Financeiro',
        'Organização e padronização de informações',
      ],
      en: [
        'Internal systems support for operational efficiency',
        'Technical support for HR, Procurement, and Finance sectors',
        'Information organization and standardization',
      ]
    },
  },
];
