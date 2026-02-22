import React from 'react';

const ContactForm = () => {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-[#121212] transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tem um projeto em mente ou quer automatizar sua logística? Mande uma mensagem!
          </p>
        </div>

        {/* 1. Alterado: Adicionado action e method para conexão com Formspree // Conecta o form ao serviço de envio */}
        <form 
          action="https://formspree.io/f/xojnpaow" // URL única que processa os dados e envia para seu e-mail
          method="POST" // Método padrão para envio de dados sensíveis e formulários
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium">Nome</label>
            {/* 2. Alterado: Adicionado atributo name="name" // O Formspree usa o 'name' para identificar o campo no e-mail */}
            <input
              type="text"
              id="name"
              name="name" // Essencial para o Formspree saber que este é o nome do remetente
              required
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a] focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">E-mail</label>
            {/* 3. Alterado: Adicionado atributo name="email" // Permite que você responda o e-mail diretamente do seu Gmail */}
            <input
              type="email"
              id="email"
              name="email" // Identifica o e-mail para que o serviço valide o formato e te informe quem enviou
              required
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a] focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="subject" className="mb-2 text-sm font-medium">Assunto</label>
            {/* 4. Alterado: Adicionado atributo name="subject" // Define o título do e-mail que você vai receber */}
            <input
              type="text"
              id="subject"
              name="subject" // Ajuda a organizar sua caixa de entrada por tipo de contato
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a] focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Ex: Consultoria em Logística"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 text-sm font-medium">Mensagem</label>
            {/* 5. Alterado: Adicionado atributo name="message" // Captura o conteúdo principal do texto enviado */}
            <textarea
              id="message"
              name="message" // Onde o cliente descreve o projeto ou a dúvida
              required
              rows="5"
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a] focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Como posso te ajudar?"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            {/* 6. Alterado: Botão com type="submit" // Aciona o envio automático dos dados para a URL do action */}
            <button
              type="submit" // Transforma o clique no botão em uma ordem de disparo do formulário
              className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Enviar Mensagem Agora
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;