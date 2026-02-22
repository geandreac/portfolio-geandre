import React from 'react';

export default function ProfessionalProfile() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Perfil Profissional</h2>
        <div className="space-y-6 text-lg md:text-xl font-medium opacity-90">
          <p>
            Profissional em formação no 7º período de Sistemas de Informação, com experiência aplicada e visão estruturada de tecnologia.
          </p>
          <p>
            Possuo facilidade em compreender fluxos complexos, organizar dados com consistência e estruturar soluções voltadas para eficiência operacional. Meu diferencial está na combinação de experiência prática real, capacidade analítica e foco em organização sistêmica.
          </p>
          <p className="bg-white/10 p-6 rounded-xl mt-8">
            Busco evoluir como desenvolvedor ou analista, contribuindo com soluções bem estruturadas e impacto tecnológico mensurável.
          </p>
        </div>
      </div>
    </section>
  );
}