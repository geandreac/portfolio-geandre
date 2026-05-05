import React from 'react';
import { Database, CheckCircle2, Shield, Zap, Layers, Bot, BarChart3, ExternalLink, Lock, CreditCard } from 'lucide-react';

export default function Projects() {
  const otherProjects = [
    { 
      title: "Sistema Prisional", 
      icon: <Database />, 
      sub: "Modelagem de Dados & Compliance", 
      desc: "Engenharia de banco de dados acadêmico para sistema prisional. Foco absoluto em Normalização (3FN), integridade referencial e auditoria de registros.",
      tech: ["SQL Server", "Relational Modeling", "Joins", "Data Integrity"],
      detail: "Estruturação de consultas complexas e automação de fluxos via triggers/procedures."
    }
  ];

  return (
    <section id="projetos" data-aos="fade-up" className="py-20 bg-white dark:bg-[#1a1a1a] transition-colors border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-2 inline-block">Projetos de Tecnologia</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm leading-relaxed">
            Soluções desenvolvidas sob demanda com foco em performance, segurança e escalabilidade. Cada projeto reflete a aplicação de boas práticas de arquitetura e código limpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJETO DESTAQUE 1: LOGÍSTICA CORPORATIVA */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-[#121212] rounded-3xl border border-primary/20 overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary p-10 flex flex-col justify-center text-white relative">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={20} className="text-blue-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Enterprise Solution</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3 leading-tight">Gestão Logística & Expedição Automática</h3>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-8 opacity-80 italic">Power Platform + SQL Server Integrado</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {["OAuth 2.0", "SQL Server", "Python", "Graph API"].map(t => (
                      <div key={t} className="flex items-center text-[10px] bg-white/10 py-2 px-3 rounded-lg border border-white/5">
                        <Zap size={10} className="mr-2 text-blue-300" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-10 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-xl mb-4 dark:text-white flex items-center gap-2">
                    <Layers size={20} className="text-primary" /> Arquitetura de Integração
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Desenvolvimento de um ecossistema corporativo para o fluxo de expedição. A solução unifica Power Apps com SQL Server via camadas de integração em Python, eliminando silos de dados e garantindo rastreabilidade total em ambiente Windows Server.
                  </p>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Sincronização bidirecional de dados via scripts Python automatizados.",
                      "Autenticação segura utilizando Microsoft Authentication Library (MSAL).",
                      "Interface responsiva focada em eficiência operacional de campo."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-500 dark:text-gray-400">
                        <CheckCircle2 size={14} className="mr-2 text-primary flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-primary uppercase tracking-widest border-t border-gray-100 dark:border-gray-800 pt-6">
                  <span>Status: Em Produção</span>
                  <span className="text-gray-300">|</span>
                  <span>Ambiente: Corporativo (PJ)</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJETO DESTAQUE 2: CARDWISE SAAS */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-[#121212] rounded-3xl border border-violet-500/20 overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Painel esquerdo - identidade visual do CardWise */}
              <div className="lg:col-span-2 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 p-10 flex flex-col justify-center text-white relative overflow-hidden">
                {/* Efeito de brilho de fundo */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-400/10 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Bot size={18} className="text-violet-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">SaaS · IA Generativa</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard size={28} className="text-violet-200" />
                    <h3 className="text-3xl font-black leading-tight">CardWise</h3>
                  </div>
                  <p className="text-violet-200 text-xs font-semibold mb-6 leading-relaxed">
                    Controle financeiro com inteligência. IA que lê suas faturas, projeta gastos e coloca você no controle dos seus cartões.
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS"].map(t => (
                      <div key={t} className="flex items-center text-[10px] bg-white/10 py-2 px-3 rounded-lg border border-white/10 backdrop-blur-sm">
                        <Zap size={10} className="mr-2 text-violet-300 flex-shrink-0" /> {t}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://cardwise-eight.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 backdrop-blur-sm w-fit"
                    aria-label="Acessar CardWise em produção"
                  >
                    <ExternalLink size={13} />
                    cardwise-eight.vercel.app
                  </a>
                </div>
              </div>

              {/* Painel direito - features e detalhes */}
              <div className="lg:col-span-3 p-10 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-xl mb-4 dark:text-white flex items-center gap-2">
                    <BarChart3 size={20} className="text-violet-500" /> Gestão Inteligente de Cartões
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Plataforma web de gestão financeira pessoal com foco em cartões de crédito. O usuário acompanha gastos, visualiza projeções e obtém insights gerados por IA diretamente a partir de suas faturas.
                  </p>

                  <ul className="space-y-2 mb-8">
                    {[
                      "Dashboard personalizado com isolamento de dados via Row Level Security (RLS).",
                      "IA integrada para leitura, análise e categorização automática de faturas.",
                      "Autenticação com e-mail/senha e login social via Google OAuth.",
                      "Projeção de gastos e visão consolidada de múltiplos cartões.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-500 dark:text-gray-400">
                        <CheckCircle2 size={14} className="mr-2 text-violet-500 flex-shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags de tech adicional */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React Hook Form", "Zod", "Lucide React", "Vercel", "Google OAuth"].map(t => (
                      <span key={t} className="text-[9px] font-bold bg-violet-500/5 text-violet-500 px-2 py-1 rounded border border-violet-500/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest border-t border-gray-100 dark:border-gray-800 pt-6">
                  <span className="flex items-center gap-1.5 text-violet-500">
                    <Lock size={10} /> Segurança: RLS + OAuth 2.0
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-green-500">Status: Em Produção</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400">Deploy: Vercel</span>
                </div>
              </div>
            </div>
          </div>

          {/* DEMAIS PROJETOS */}
          {otherProjects.map((p, i) => (
            <div key={i} className="bg-gray-50 dark:bg-[#121212] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer">
               <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-lg leading-tight">{p.title}</h3>
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{p.sub}</p>
                  </div>
               </div>
               
               <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                 {p.desc}
               </p>

               <div className="space-y-4">
                  <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-800">
                    <p className="text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-widest">Stack Tecnológica</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="text-[9px] font-bold bg-primary/5 text-primary px-2 py-1 rounded border border-primary/10">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] italic text-gray-400 dark:text-gray-500">
                    📌 {p.detail}
                  </p>
               </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}