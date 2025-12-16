import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { ArrowRight, Star } from 'lucide-react';

const CompetitiveAdvantage: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative py-32">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-invision-orange/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div>
          {/* The Black Card Container */}
          <div className="relative bg-[#080808] border border-white/5 p-12 md:p-20 overflow-hidden group">

            {/* Gold Leaf Border Gradient */}
            <div className="absolute inset-0 border border-invision-orange/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-invision-orange/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-invision-orange/40 to-transparent"></div>

            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Exclusive Icon/Badge */}
              <div className="mb-8 text-invision-orange/80">
                <Star size={24} fill="currentColor" className="animate-pulse" />
              </div>

              <h2 className="text-invision-orange font-bold tracking-[0.3em] uppercase text-xs mb-8">
                Sua Vantagem Competitiva
              </h2>

              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Solicite o Portfólio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent">de Investimentos</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                Acesse uma seleção exclusiva de oportunidades de alto rendimento no mercado imobiliário de luxo do Sul da Flórida, <span className="text-white">cuidadosamente analisadas por nossos especialistas.</span>
              </p>

              <button className="group/btn relative inline-flex items-center gap-4 px-10 py-5 bg-invision-orange text-black font-bold tracking-widest text-sm uppercase transition-all duration-300 hover:bg-white hover:scale-105">
                <span className="relative z-10">Converse com um Especialista</span>
                <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />

                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-invision-orange/50 blur-lg group-hover/btn:blur-xl transition-all opacity-50"></div>
              </button>

              <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest">
                Atendimento Privado & Confidencial
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CompetitiveAdvantage;