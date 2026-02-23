import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Aliança Navegações",
      status: "Atual", 
      role: "Logística & Automação de Processos",
      tasks: [
        "Atuação em fluxos logísticos com foco em transição tecnológica",
        "Desenvolvimento de automações internas via Power Automate",
        "Estruturação de base de dados em SharePoint para controle operacional",
        "Otimização de processos administrativos utilizando o ecossistema Microsoft"
      ]
    },
    {
      company: "MLobato Engenharia",
      role: "Suporte & Tecnologia",
      tasks: ["Organização de informações técnicas", "Suporte a sistemas internos", "Manutenção básica de hardware"]
    },
    {
      company: "Metacon Construções",
      role: "Apoio Administrativo & TI",
      tasks: ["Suporte básico a hardware e estações de trabalho", "Controle de informações internas"]
    }
  ];

  return (
    <section id="experiencia" data-aos="fade-up" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white border-b-2 border-primary pb-2 inline-block">Trajetória Profissional</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(0,86,179,0.4)]"></div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold dark:text-white">{exp.company}</h3>
              
              {/* O AJUSTE ESTÁ AQUI: Cor verde, fonte maior e negrito extra */}
              {exp.status && (
                <span className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 text-xs md:text-sm font-black px-3 py-1 rounded-full border border-green-200 dark:border-green-800 animate-pulse">
                  {exp.status}
                </span>
              )}
            </div>
            
            <p className="text-primary font-medium text-sm mb-4">{exp.role}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              {exp.tasks.map((task, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary">▹</span> {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}