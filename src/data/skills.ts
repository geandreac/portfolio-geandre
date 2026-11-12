export interface SkillCategory {
  title: { pt: string; en: string };
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL']
  },
  {
    title: { pt: 'Frontend & Desktop', en: 'Frontend & Desktop' },
    items: ['React.js', 'Next.js', 'TailwindCSS', 'PWA', '.NET 8 / WPF', 'Electron']
  },
  {
    title: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js / Express', 'FastAPI', 'WebSocket / WebRTC', 'Prisma']
  },
  {
    title: { pt: 'Dados & BI', en: 'Data & BI' },
    items: ['PostgreSQL', 'Supabase (RLS)', 'SQL Server', 'Power BI']
  },
  {
    title: { pt: 'Ferramentas & Testes', en: 'Tools & Testing' },
    items: ['Git / GitHub Actions', 'Vercel', 'Docker', 'Playwright', 'Vitest', 'IA (Gemini / Groq)']
  },
  {
    title: { pt: 'Microsoft', en: 'Microsoft' },
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Graph API']
  },
];
