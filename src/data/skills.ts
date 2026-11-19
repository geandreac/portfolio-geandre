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
    title: { pt: 'IA & LLMs', en: 'AI & LLMs' },
    items: ['Claude Code', 'ChatGPT', 'Gemini', 'DeepSeek', 'Grok', 'LLM APIs (Gemini / Groq)', 'AI Agents']
  },
  {
    title: { pt: 'Frontend & Desktop', en: 'Frontend & Desktop' },
    items: ['React.js', 'Next.js', 'TailwindCSS', 'PWA', '.NET 8 / WPF', 'Electron']
  },
  {
    title: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js', 'FastAPI', 'Express', 'WebSocket / WebRTC', 'Prisma', 'Drizzle', 'Zod']
  },
  {
    title: { pt: 'Dados & BI', en: 'Data & BI' },
    items: ['PostgreSQL', 'Supabase (RLS)', 'SQLite / Turso', 'SQL Server', 'Power BI']
  },
  {
    title: { pt: 'Ferramentas & Testes', en: 'Tools & Testing' },
    items: ['Git / GitHub Actions', 'Vercel', 'Docker', 'Playwright', 'Vitest', 'xUnit']
  },
  {
    title: { pt: 'Microsoft', en: 'Microsoft' },
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Graph API']
  },
];
