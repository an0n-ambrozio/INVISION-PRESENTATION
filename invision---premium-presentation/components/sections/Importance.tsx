import React from 'react';
import SectionWrapper from '../SectionWrapper';


const Importance: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative flex items-center justify-center">
      {/* Central Axis Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2 z-0 hidden md:block" />

      {/* Center Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        <div>
          {/* Watermark Number */}
          <h2 className="text-[120px] md:text-[200px] font-bold text-white/[0.03] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            03
          </h2>

          {/* Main Statement */}
          <div className="relative py-20">
            <div className="w-[1px] bg-invision-orange mx-auto mb-10 hidden md:block h-[100px]" />

            <span className="text-invision-orange font-medium tracking-[0.4em] uppercase text-xs block mb-8">
              A Estratégia
            </span>

            <h3 className="text-4xl md:text-7xl font-sans font-light text-white leading-[1.1] mb-10 tracking-tight">
              "Estabilidade não é um luxo.<br />
              <span className="font-serif italic text-white/50">É uma necessidade.</span>"
            </h3>

            <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Em um mundo de incertezas, a <span className="text-white">previsibilidade</span> se torna o ativo mais valioso do seu portfólio.
            </p>

            <div className="w-[1px] bg-gradient-to-b from-invision-orange to-transparent mx-auto mt-10 hidden md:block h-[100px]" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Importance;