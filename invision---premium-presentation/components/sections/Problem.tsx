import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { AlertTriangle, TrendingDown, EyeOff } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative overflow-hidden">
      {/* Background Image - Abstract/Moody */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="Moody Architecture"
          className="w-full h-full object-cover grayscale contrast-125 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-12 items-center w-full h-full">

        {/* Left Content - Typography */}
        <div className="md:col-span-7 print:col-span-7">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-invision-orange"></div>
              <span className="text-invision-orange font-bold uppercase tracking-[0.3em] text-xs">
                Realidade do Mercado
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-sans font-light mb-8 leading-[1.05] text-white tracking-tight">
              A Escolha de <br />
              <span className="font-serif italic text-white/50">Investir às Cegas</span>
            </h2>

            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-xl border-l-2 border-invision-orange/50 pl-8">
              Sem a curadoria certa, o sonho de dolarizar o patrimônio pode se tornar um pesadelo de <span className="text-white font-medium">taxas ocultas</span>, <span className="text-white font-medium">vacância</span> e <span className="text-white font-medium">bureaucracia</span>.
            </p>
          </div>
        </div>

        {/* Right Content - Glass Card Overlay */}
        <div className="md:col-span-5 print:col-span-5 relative">
          <div className="bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Orange Warning Line */}
            <div className="absolute top-0 right-0 w-2 h-24 bg-invision-orange" />

            <h3 className="text-white font-serif text-3xl mb-10">Os Riscos Visíveis</h3>

            <div className="flex flex-col gap-8">
              <div className="group flex items-start gap-6">
                <TrendingDown size={32} className="text-invision-orange mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-lg font-bold mb-2">Volatilidade & Desvalorização</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Ativos mal localizados perdem valor real, correndoendo seu patrimônio.</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <EyeOff size={32} className="text-invision-orange mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-lg font-bold mb-2">Opacidade na Gestão</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Quem realmente cuida do seu imóvel quando você está longe?</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <AlertTriangle size={32} className="text-invision-orange mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-lg font-bold mb-2">Custos "Surpresa"</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Manutenção e impostos não previstos que destroem sua margem.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Problem;