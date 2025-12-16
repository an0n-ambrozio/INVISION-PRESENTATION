import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { ShieldCheck, DollarSign, TrendingUp, Lock } from 'lucide-react';

const WhyUSA: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative flex flex-col justify-center py-20">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-tr from-invision-orange/5 via-transparent to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto w-full px-6 h-full flex flex-col justify-center">

        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-invision-orange"></div>
            <span className="text-invision-orange font-bold uppercase tracking-[0.2em] text-xs">
              Contexto de Mercado
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-white">
            Por que <span className="font-serif italic text-white/40">Estados Unidos?</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

          {/* Hero Card - Spans 2 rows, 1 col on Desktop */}
          <div className="col-span-1 md:col-span-1 md:row-span-2 print:col-span-1 print:row-span-2 bg-[#0A0A0A] border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-invision-orange/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Map_of_the_USA_without_text.svg/2560px-Map_of_the_USA_without_text.svg.png')] bg-cover bg-center opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="relative z-10 h-full flex flex-col justify-end">
              <ShieldCheck size={48} className="text-invision-orange mb-6" />
              <h3 className="text-4xl font-serif text-white mb-4">Porto <br /> Seguro</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Em tempos de volatilidade global, o mercado americano oferece a proteção patrimonial que nenhum outro mercado consegue igualar.
              </p>
            </div>
          </div>

          {/* Feature Card 1: Moeda Forte */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 print:col-span-1 print:row-span-1 bg-[#0A0A0A] border border-white/10 p-6 rounded-sm relative group hover:bg-white/[0.02] transition-colors">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-white/5 rounded-full text-white">
                <DollarSign size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-invision-orange border border-invision-orange/20 px-2 py-1 rounded-sm">Valores Sólidos</span>
            </div>
            <div>
              <h4 className="text-xl text-white font-serif mb-2">Moeda Forte</h4>
              <p className="text-sm text-gray-500">Ativos dolarizados blindam seu patrimônio contra a desvalorização cambial doméstica.</p>
            </div>
            {/* Decorative Line Graph */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/50 to-green-500/0"></div>
          </div>

          {/* Feature Card 2: Segurança Jurídica */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 print:col-span-1 print:row-span-1 bg-[#0A0A0A] border border-white/10 p-6 rounded-sm relative group hover:bg-white/[0.02] transition-colors">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-white/5 rounded-full text-white">
                <Lock size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-xl text-white font-serif mb-2">Segurança Jurídica</h4>
              <p className="text-sm text-gray-500">Direitos de propriedade inabaláveis garantidos pela democracia mais estável do mundo.</p>
            </div>
          </div>

          {/* Feature Card 3: Demanda (Wide) */}
          <div className="col-span-1 md:col-span-2 md:row-span-1 print:col-start-2 print:col-span-2 print:row-span-1 bg-[#0A0A0A] border border-white/10 p-6 rounded-sm flex flex-col md:flex-row items-center gap-8 group">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <TrendingUp size={16} className="text-invision-orange" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Crescimento Orgânico</span>
              </div>
              <h4 className="text-2xl text-white font-serif mb-2">Demanda Constante</h4>
              <p className="text-sm text-gray-500 max-w-sm">O déficit habitacional histórico nos EUA garante valorização contínua e liquidez para ativos bem posicionados.</p>
            </div>

            {/* Abstract Chart Graphic */}
            <div className="w-full md:w-1/3 h-24 flex items-end gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
              <div className="w-1/5 h-[40%] bg-white/10 rounded-t-sm"></div>
              <div className="w-1/5 h-[60%] bg-white/20 rounded-t-sm"></div>
              <div className="w-1/5 h-[50%] bg-white/10 rounded-t-sm"></div>
              <div className="w-1/5 h-[80%] bg-white/30 rounded-t-sm"></div>
              <div className="w-1/5 h-[100%] bg-invision-orange rounded-t-sm shadow-[0_0_15px_rgba(255,163,47,0.5)]"></div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUSA;