import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Importação da biblioteca de animação
import 'aos/dist/aos.css'; // Importação do CSS da animação
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  // Efeito 1: Gerencia o Tema Claro/Escuro
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Efeito 2: Inicializa as Animações de Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 800, // Tempo da animação (0.8 segundos)
      once: true,    // A animação acontece apenas uma vez (melhor performance)
      easing: 'ease-out-cubic', // Deixa o final da animação bem suave
      offset: 100,   // O item começa a aparecer quando estiver 100px dentro da tela
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-[#121212] dark:text-gray-100 font-sans transition-colors duration-300">
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
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

      <footer id="contato" className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
        {/* ... seu rodapé atual ... */}
      </footer>
    </div>
  );
}

export default App;