export interface SkillCategory {
  title: { pt: string; en: string };
  items: string[];
}

export const skills: SkillCategory[] = [
  { 
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['JavaScript', 'TypeScript', 'Python', 'C / C++'] 
  },
  { 
    title: { pt: 'Frontend', en: 'Frontend' },
    items: ['React.js', 'Next.js 14', 'TailwindCSS', 'HTML5 CSS3'] 
  },
  { 
    title: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express / JWT', 'Supabase'] 
  },
  { 
    title: { pt: 'Dados & BI', en: 'Data & BI' },
    items: ['Power BI', 'SQL Server', 'SQL'] 
  },
  { 
    title: { pt: 'Ferramentas', en: 'Tools' },
    items: ['Git / GitHub', 'Vercel', 'IA para Produtividade', 'Automação de Processos'] 
  },
  { 
    title: { pt: 'Microsoft', en: 'Microsoft' },
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Graph API'] 
  },
];
