import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { TrendingUp, ShieldCheck, Star, Crown, ArrowRight } from 'lucide-react';

const Success: React.FC = () => {

  const pillars = [
    {
      id: "01",
      title: "Retornos acima da média",
      desc: "Performance superior aos índices tradicionais de mercado.",
      icon: TrendingUp
    },
    {
      id: "02",
      title: "Contrato Garantido",
      desc: "Segurança jurídica total com clausulas de proteção patrimonial.",
      icon: ShieldCheck,
      highlight: true
    },
    {
      id: "03",
      title: "Mercado Forte",
      desc: "Atuamos apenas em regiões com alta demanda e escassez.",
      icon: Star
    },
    {
      id: "04",
      title: "Oportunidades Exclusivas",
      desc: "Acesso a ativos off-market antes do público geral.",
      icon: Crown
    },
  ];

  return (
    <SectionWrapper className="bg-[#050505] relative py-24 overflow-hidden">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Header - Strictly Aligned Left */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Por que Invision?
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">
              Sucesso Definido
            </h3>
          </div>
        </div>

        {/* List - Strictly Functional & Aligned */}
        <div className="flex flex-col">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="py-8 flex flex-col md:flex-row items-center md:items-start w-full gap-6 md:gap-0">

                {/* 1. Icon & Title (Width: 40%) */}
                <div className="w-full md:w-[40%] flex items-center gap-6">
                  <span className="text-sm font-mono text-gray-700 hidden md:block">/{item.id}</span>
                  <div className={`p-3 ${item.highlight ? 'text-invision-orange' : 'text-gray-500 group-hover:text-white'}`}>
                    <item.icon size={24} />
                  </div>
                  <h4 className={`text-xl md:text-2xl font-light ${item.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
                    {item.title}
                  </h4>
                </div>

                {/* 2. Description (Width: 40%) */}
                <div className="w-full md:w-[40%] flex items-center">
                  <p className="text-gray-500 font-light text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* 3. Arrow Action (Width: 20%) */}
                <div className="w-full md:w-[20%] flex justify-end items-center">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-invision-orange group-hover:text-invision-orange transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Success;