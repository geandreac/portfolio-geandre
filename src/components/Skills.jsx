import React from 'react';

export default function Skills() {
  const categories = [
    { title: "Linguagens & Web", skills: ["JavaScript", "Python", "C / C++", "HTML5", "CSS3", "React.js"] },
    { title: "Ecossistema Microsoft", skills: ["Power Apps", "Power Automate", "SharePoint Online", "Microsoft Graph API", "MSAL Autenticação"] },
    { title: "Dados & Backend", skills: ["SQL Server", "Node.js", "Express", "JWT (Auth)", "Modelagem Relacional"] },
    { title: "Ferramentas", skills: ["Git / GitHub", "Vite", "TailwindCSS", "Postman", "Pacote Office"] }
  ];

  return (
    <section id="habilidades" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white border-b-2 border-primary pb-2 inline-block">Competências Técnicas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-sm font-bold mb-4 text-primary uppercase tracking-tighter">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-50 dark:bg-[#242424] text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}