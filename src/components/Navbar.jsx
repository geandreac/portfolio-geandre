import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './themetoggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter dark:text-white">
          GEANDRE<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
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
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}