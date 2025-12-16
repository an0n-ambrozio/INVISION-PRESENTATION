import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { ArrowRight } from 'lucide-react';

const PortfolioInvite: React.FC = () => {

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper className="bg-[#050505] relative py-32 overflow-hidden flex flex-col justify-center items-center">

      {/* Background Ambience */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full bg-invision-orange/5 opacity-10 blur-[120px]"></div>
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-6">
        <div className="bg-[#0A0A0A] border border-white/5 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-invision-orange/20 transition-colors duration-500">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-invision-orange animate-pulse"></div>
              <span className="text-invision-orange text-xs font-bold uppercase tracking-[0.3em]">Sua Oportunidade Aguarda</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-none">
              Descubra o <br />
              <span className="text-white/50 italic">Padrão Invision</span>
            </h2>

            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-lg">
              Investidores podem revisar as oportunidades disponíveis e escolher aquela que se encaixa no seu momento.
            </p>
          </div>

          {/* Right Action */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToPortfolio}
              className="group/btn relative inline-flex items-center gap-6 bg-white text-black px-12 py-6 text-sm md:text-base font-bold tracking-[0.2em] uppercase hover:bg-invision-orange transition-all duration-300 overflow-hidden border border-transparent hover:border-invision-orange"
            >
              <span className="relative z-10">Acessar Portfólio</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" strokeWidth={2} />

              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 bg-invision-orange ease-out"></div>
            </button>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioInvite;