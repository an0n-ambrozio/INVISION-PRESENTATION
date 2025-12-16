import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { Search, PenTool, HardHat, DollarSign } from 'lucide-react';

const Method: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Análise",
      subtitle: "Estudo da Área",
      desc: "Seleção rigorosa de terrenos baseada em dados demográficos e viabilidade econômica."
    },
    {
      icon: PenTool,
      title: "Projeto",
      subtitle: "Desenvolvimento",
      desc: "Arquitetura autoral e aprovações legais ágeis. Transformamos a visão em ativos tangíveis."
    },
    {
      icon: HardHat,
      title: "Obras",
      subtitle: "Execução",
      desc: "Construção eficiente com gestão de custos em tempo real e acabamentos de alto padrão."
    },
    {
      icon: DollarSign,
      title: "Venda",
      subtitle: "Realização",
      desc: "Estratégia de saída maximizada para garantir o retorno do capital investido e o lucro projetado."
    }
  ];

  return (
    <SectionWrapper className="bg-[#080808] relative overflow-hidden py-32">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-invision-orange/5 via-transparent to-transparent opacity-40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <span className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs block mb-4">
            O Caminho do Lucro
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Método em <span className="italic text-white/50">4 Etapas</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* The Golden Path (Desktop SVG) - Now connecting TOP ICONS */}
          <div className="hidden md:block print:block absolute top-[40px] left-0 w-full pointer-events-none z-0">
            <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" preserveAspectRatio="none">
              <line x1="0" y1="10" x2="1200" y2="10" stroke="#333" strokeWidth="1" />
              <line
                x1="0" y1="10" x2="1200" y2="10"
                stroke="#FFA32F"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 print:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-6 md:gap-8"
              >
                {/* Icon Node (The Anchor) */}
                <div className="shrink-0 relative">
                  <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-[#0A0A0A] border-2 border-white/10 md:border-invision-orange flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-invision-orange" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 bg-[#0A0A0A] border border-white/5 p-6 md:p-8 rounded-sm hover:border-invision-orange/30 transition-colors duration-500 w-full group">

                  <div className="flex justify-between items-center mb-4 md:justify-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FFA32F]">{step.subtitle}</span>
                    <span className="md:hidden print:hidden text-2xl font-serif text-white/10">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                  <div className="h-[1px] w-8 bg-white/10 mb-4 md:mx-auto group-hover:bg-invision-orange group-hover:w-16 transition-all duration-500"></div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

export default Method;