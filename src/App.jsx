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