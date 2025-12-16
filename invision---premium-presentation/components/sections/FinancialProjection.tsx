import React, { useEffect, useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const FinancialProjection: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;
    const finalValue = 39.89;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * finalValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  const data = [
    { label: "Aquisição de Terreno", value: "$4,900,000", highlight: false },
    { label: "Construção", value: "$3,788,500", highlight: false },
    { label: "Investimento Total", value: "$8,688,500", highlight: false, border: true },
    { label: "Avaliação de Venda", value: "$12,155,000", highlight: true, color: "text-white" },
    { label: "Lucro Líquido", value: "$3,466,500", highlight: true, color: "text-invision-orange" },
  ];

  return (
    <SectionWrapper className="bg-[#050505] relative py-32 overflow-hidden">

      {/* Background Ambience - Clean & Minimal */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: The Big Number - Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center lg:text-left"
        >
          <div className="inline-block border-b border-invision-orange/30 pb-4 mb-6">
            <span className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs">
              Performance Financeira
            </span>
          </div>

          <div className="flex items-start justify-center lg:justify-start">
            <h2 className="text-[100px] md:text-[160px] leading-[0.9] font-serif text-white tracking-tighter">
              {count.toFixed(2)}
            </h2>
            <span className="text-3xl md:text-5xl text-invision-orange font-light mt-4 ml-2">%</span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-light mt-8 max-w-md mx-auto lg:mx-0">
            Retorno projetado sobre o investimento total, auditado e calculado para máxima eficiência de capital.
          </p>
        </motion.div>

        {/* Right: The Data Table - Professional Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-[#0A0A0A] border-t border-b md:border border-white/10 md:rounded-sm p-8 md:p-12 relative overflow-hidden group">
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-invision-orange/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-invision-orange/10 transition-colors duration-700"></div>

            <div className="relative z-10 space-y-8">
              {data.map((item, index) => (
                <div key={index} className={`flex justify-between items-center group/row ${item.border ? 'border-b border-white/20 pb-8 mb-8' : ''}`}>
                  <span className={`text-base md:text-lg tracking-wide transition-colors ${item.highlight ? 'text-white font-medium' : 'text-gray-500 group-hover/row:text-gray-300'}`}>
                    {item.label}
                  </span>

                  <span className={`text-xl md:text-2xl font-mono tracking-tight ${item.color || 'text-gray-300'} ${item.highlight ? 'font-bold' : ''}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default FinancialProjection;