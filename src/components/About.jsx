import React from 'react';

export default function About() {
  return (
    <section id="sobre" data-aos="fade-up" className="py-20 bg-white dark:bg-[#1a1a1a] transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b-2 border-primary pb-2 inline-block">Sobre Mim</h2>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Sou estudante de Sistemas de Informação (7º período) com experiência prática em desenvolvimento de sistemas, organização de dados e estruturação de processos empresariais.
          </p>
          <p>
            Minha trajetória combina vivência em ambientes corporativos reais com desenvolvimento de soluções tecnológicas aplicadas. Possuo perfil analítico, pensamento lógico estruturado e foco em transformar demandas operacionais em soluções organizadas, escaláveis e eficientes.
          </p>
          <p className="font-semibold text-primary">
            Atuo com mentalidade orientada à arquitetura, consistência de dados e melhoria contínua.
          </p>
        </div>
      </div>
    </section>
  );
}