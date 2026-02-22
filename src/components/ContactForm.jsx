import React from 'react';

export default function ContactForm() {
  return (
    <section id="contato" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white border-b-2 border-primary pb-2 inline-block w-auto mx-auto table">Vamos trabalhar juntos?</h2>
      <form className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Nome</label>
          <input type="text" required className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">E-mail</label>
          <input type="email" required className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Mensagem</label>
          <textarea rows="4" required className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"></textarea>
        </div>
        <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}