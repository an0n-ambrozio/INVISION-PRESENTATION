import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { AlertTriangle, XCircle, AlertOctagon } from 'lucide-react';

const RiskAlone: React.FC = () => {
  const risks = [
    {
      text: "Anos de Trabalho Perdidos",
      sub: "A falta de expertise pode custar décadas de acumulação patrimonial em um único erro.",
      icon: XCircle
    },
    {
      text: "Produto Errado",
      sub: "Escolher ativos sem liquidez ou com depreciação oculta no mercado americano.",
      icon: AlertTriangle
    },
    {
      text: "Mercados Inseguros",
      sub: "Apostar em regiões sem fundamentos econômicos sólidos ou proteção jurídica.",
      icon: AlertOctagon
    }
  ];

  return (
    <SectionWrapper className="bg-[#050505] relative py-32 border-t border-white/5">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1 border border-red-500/20 bg-red-900/5 backdrop-blur-sm rounded-none">
              <AlertOctagon size={14} className="text-red-500" />
              <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-[10px]">Atenção Crítica</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              O Risco de <span className="italic text-gray-400">Agir Sozinho</span>
            </h2>

            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
              O mercado imobiliário internacional não perdoa amadores. A complexidade jurídica e tributária exige navegação experiente.
            </p>
          </div>
        </div>

        {/* The Monoliths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="group relative bg-[#080808] border border-white/5 p-10 hover:border-red-500/30 transition-colors duration-500 flex flex-col items-start min-h-[320px]"
            >
              {/* Gradient Glow - Permanent */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent opacity-100"></div>

              <div className="relative z-10 mb-8 p-3 bg-red-500/10 rounded-none">
                <risk.icon size={28} className="text-red-400" strokeWidth={1} />
              </div>

              <h3 className="relative z-10 text-xl text-red-100 font-serif mb-4">
                {risk.text}
              </h3>

              <p className="relative z-10 text-sm text-gray-400 leading-relaxed font-light font-sans tracking-wide">
                {risk.sub}
              </p>

              {/* Bottom line accent - Permanent and Full Width */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500/50"></div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default RiskAlone;