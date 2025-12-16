import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2, DollarSign } from 'lucide-react';

const DevelopmentOpportunity: React.FC = () => {
  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5 relative">
      {/* Background Texture: Subtle Blueprint or contour lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: The Offer */}
        <div className="lg:col-span-7">
            <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
            >
                <span className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                    Oportunidade de Desenvolvimento
                </span>
                
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                    Frente para a Água <br/>
                    <span className="italic text-gray-500">Em Pré-Construção</span>
                </h2>

                <div className="prose prose-invert text-gray-400 font-light leading-relaxed mb-8">
                    <p>
                        Este lote privilegiado possui mais de <span className="text-white">100 pés de frente para águas profundas</span>, oferecendo acesso desobstruído ao oceano. O trabalho fundamental está concluído: muro de contenção, cais, demolição e todas as licenças principais.
                    </p>
                    <p className="mt-4">
                        Imagine desfrutar de vistas deslumbrantes, potencialmente aprimoradas por um jardim na cobertura, imergindo-se no estilo de vida quintessencial de Fort Lauderdale.
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-4 mt-6">
                    <CheckCircle2 size={16} className="text-invision-orange" />
                    <span>Prontidão imediata para construção</span>
                </div>
            </motion.div>
        </div>

        {/* Right: The Price Card */}
        <div className="lg:col-span-5 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-invision-card border border-white/10 p-10 rounded-sm shadow-2xl relative overflow-hidden group"
            >
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-invision-orange/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-invision-orange/30 transition-colors"></div>

                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Valor do Investimento</p>
                
                <div className="flex items-start text-invision-orange mb-2">
                    <DollarSign size={24} className="mt-2" strokeWidth={1.5} />
                    <span className="text-6xl md:text-7xl font-sans font-bold tracking-tighter">4,900,000</span>
                </div>
                
                <div className="w-full h-[1px] bg-white/10 my-6"></div>

                <p className="text-white font-serif text-lg mb-2">Terreno + Licenças Aprovadas</p>
                <p className="text-xs text-red-400/80 uppercase tracking-wider font-bold">
                    * Preço apenas para o terreno com licenças.
                </p>

                <div className="mt-8 p-4 bg-white/5 rounded-sm">
                    <p className="text-gray-400 text-sm italic text-center">
                        "Uma chance rara de construir uma casa dos sonhos icônica em uma localização de elite."
                    </p>
                </div>
            </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default DevelopmentOpportunity;