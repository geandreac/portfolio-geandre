import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
    </button>
  );
}