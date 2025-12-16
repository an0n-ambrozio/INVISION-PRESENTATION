import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { Percent, Ban, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Solution: React.FC = () => {
  const points = [
    {
      icon: Percent,
      title: "Retornos Contratuais",
      subtitle: "Previsibilidade Absoluta",
      desc: "Garantia contratual de performance somada a juros compostos desde o primeiro aporte."
    },
    {
      icon: Ban,
      title: "Zero Impostos",
      subtitle: "Eficiência Fiscal",
      desc: "Estrutura proprietária otimizada para isenção total de impostos sobre ganhos de capital nos EUA."
    },
    {
      icon: ShieldCheck,
      title: "Gestão Passiva",
      subtitle: "Tranquilidade Total",
      desc: "Investimento 'Hands-off'. Nossa equipe gerencia 100% do ciclo, da aquisição à venda."
    }
  ];

  return (
    <SectionWrapper className="bg-[#050505] relative flex flex-col justify-center py-24 overflow-hidden">

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Animated Blueprint Lines - Static for Print/Simplicity */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <path
          d="M 0 100 L 1000 100 L 1000 800"
          fill="transparent"
          stroke="#FFA32F"
          strokeWidth="1"
        />
        <path
          d="M 500 0 L 500 1000"
          fill="transparent"
          stroke="#FFA32F"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block border text-invision-orange border-invision-orange/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            O Blueprint do Sucesso
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-light text-white leading-tight">
            Nossa Solução <br /> <span className="font-serif italic text-white/50">Única</span>
          </h2>
        </div>

        {/* 3 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0A0A0A] border-t border-white/10 p-8 h-[400px] flex flex-col justify-between hover:border-invision-orange transition-colors duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-invision-orange/10 to-transparent opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top Content */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl text-white/10 font-serif font-bold group-hover:text-invision-orange/20 transition-colors">0{index + 1}</span>
                  <div className="p-3 bg-white/5 rounded-sm text-invision-orange opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <item.icon size={24} />
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-white mb-2 leading-none">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-invision-orange mb-6">{item.subtitle}</p>
              </div>

              {/* Bottom Content */}
              <div>
                <div className="h-[1px] w-12 bg-white/20 mb-6 group-hover:w-full group-hover:bg-invision-orange transition-all duration-700"></div>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} className="text-invision-orange" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Solution;