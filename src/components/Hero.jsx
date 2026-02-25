import React from 'react';
import perfilImg from '../assets/perfil.jpg';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTO E CONTEÚDO */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight dark:text-white">
            Geandre Alfaia Colares
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            Estudante de Sistemas de Informação | Desenvolvimento e Estruturação de Sistemas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Focado em arquitetura de sistemas, organização de dados e eficiência operacional. Transformo processos complexos em fluxos otimizados através de tecnologia.
          </p>

          {/* ÍCONES DE CONTATO RÁPIDO */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start py-2">
            <a href="https://github.com/geandreac" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group">
               <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               GitHub
            </a>
            <a href="https://www.linkedin.com/in/geandreac/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group">
               <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               LinkedIn
            </a>
            <a href="https://api.whatsapp.com/send?phone=5592992610077&text=Bom+dia%2C+tudo+bem%3F+Gostaria+de+fazer+um+%2Aor%C3%A7amento%2A.+%F0%9F%98%81" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors group">
               <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.899 3.013 1.374 4.781 1.375 5.234 0 9.492-4.259 9.494-9.493.001-2.536-.987-4.92-2.783-6.717-1.797-1.798-4.183-2.787-6.721-2.788-5.235 0-9.493 4.258-9.495 9.493-.001 1.905.518 3.519 1.503 5.038l-.993 3.628 3.714-.974zm10.744-6.495c-.295-.148-1.745-.86-2.02-.959-.275-.099-.475-.148-.675.148-.2.297-.775.959-.95 1.157-.175.198-.35.223-.645.074-.295-.148-1.246-.459-2.373-1.464-.877-.782-1.47-1.747-1.642-2.044-.175-.297-.019-.458.129-.606.133-.133.295-.347.443-.52.148-.173.197-.297.295-.495.099-.198.05-.371-.025-.52-.075-.148-.675-1.632-.925-2.234-.242-.588-.487-.51-.67-.52l-.57-.011c-.198 0-.52.074-.792.371-.272.297-1.04 1.015-1.04 2.475 0 1.459 1.065 2.87 1.213 3.07.148.197 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.745-.713 1.995-1.402.25-.689.25-1.281.175-1.402-.075-.121-.275-.198-.57-.346z"/></svg>
               WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projetos" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all text-center shadow-lg shadow-primary/20">
              Ver Projetos
            </a>
            <a href="mailto:geandreac.dev@gmail.com" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-all text-center">
              Enviar E-mail
            </a>
          </div>
        </div>

        {/* IMAGEM DE PERFIL */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full animate-pulse"></div>
            <img 
              src={perfilImg} 
              alt="Geandre Alfaia Colares" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-dashed border-primary p-2 bg-white dark:bg-[#1e1e1e] animate-float"
            />
          </div>
        </div>

      </div>
    </section>
  );
}