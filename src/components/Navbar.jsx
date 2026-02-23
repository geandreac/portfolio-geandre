import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' }, // Ajustado para o seu ID!
    { name: 'Contato', href: '#contato' },
  ];

  // Função de Animação Forçada (À prova de falhas)
  const handleScroll = (e, href) => {
    e.preventDefault();
    
    let targetPosition = 0;

    // Descobre para onde ir
    if (href !== '#' && href !== '') {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      } else {
        return; // Se a seção não existir, não faz nada
      }
    }

    // Criando o scroll suave na "mão" para ignorar bloqueios
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 600; // Duração em milissegundos (0.6s)
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      // Efeito de aceleração e desaceleração (easeInOutCubic)
      const percent = Math.min(progress / duration, 1);
      const ease = percent < 0.5 
        ? 4 * percent * percent * percent 
        : 1 - Math.pow(-2 * percent + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < duration) {
        window.requestAnimationFrame(step); // Continua animando
      } else {
        window.scrollTo(0, targetPosition); // Garante que cravou no pixel certo no final
      }
    });

    setIsOpen(false); // Fecha o menu mobile
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, '#')} 
          className="text-2xl font-bold tracking-tighter dark:text-white"
        >
          GEANDRE<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)} 
              className="block px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}