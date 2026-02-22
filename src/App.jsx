import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    /* Ajuste: flex e flex-col garantem que o conteúdo preencha a tela e o footer fique no fim */
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-[#121212] dark:text-gray-100 font-sans transition-colors duration-300">
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Ajuste: flex-grow faz o main ocupar o espaço disponível, empurrando o footer */}
      <main className="pt-20 flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
      </main>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5592992610077" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 z-50 flex items-center justify-center"
        aria-label="Fale comigo no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Seu Footer original com ajustes de padding para o mobile */}
      <footer id="contato" className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/geandreac" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:text-primary transition-all">
              <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1.02-1.42 2.25-1.5 3.5 0 3.5 3 5.5 6 5.5-.97.94-1.24 2.36-1 3.5V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/geandreac/" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:text-primary transition-all">
              <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:geandreac.dev@gmail.com" className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:text-primary transition-all">
              <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="https://wa.me/5592992610077" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:text-primary transition-all">
              <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm italic mb-2">Construído com React + Tailwind CSS</p>
          <p className="text-gray-400 text-xs">&copy; 2026 Geandre Alfaia Colares. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;