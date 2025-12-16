import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Anchor, Waves } from 'lucide-react';

const DeepWater: React.FC = () => {
  return (
    <SectionWrapper className="relative">
      {/* Background Image - Deep Blue / Water */}
      <div className="absolute inset-0">
         <img 
            src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?q=80&w=2670&auto=format&fit=crop" 
            alt="Deep Water Yacht Dock" 
            className="w-full h-full object-cover"
         />
         {/* Blue/Black Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#051e3e]/95 via-[#051e3e]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mr-auto w-full text-white">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         >
            <div className="flex items-center gap-3 mb-6 text-blue-300">
                <Waves size={24} />
                <span className="uppercase tracking-[0.2em] font-bold text-xs">Lifestyle Náutico</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                Oásis Exclusivo de <br/>
                <span className="italic text-blue-200">Água Profunda</span>
            </h2>

            <div className="p-8 bg-white/5 border-l-4 border-blue-400 backdrop-blur-md max-w-2xl">
                 <p className="text-lg md:text-xl font-light leading-relaxed text-blue-50 mb-6">
                    Mergulhe em uma vida aquática inigualável. Ostentando mais de <span className="font-bold text-white">30 metros lineares</span> de frente expansiva de água profunda.
                 </p>
                 <div className="flex items-center gap-4 text-sm text-blue-200">
                    <Anchor size={18} />
                    <span>Acesso direto e irrestrito ao oceano (Sem pontes fixas)</span>
                 </div>
            </div>

            <p className="mt-8 text-sm text-blue-200/60 max-w-xl leading-relaxed">
                Um muro de contenção e um cais privado meticulosamente concluídos garantem aventuras de barco imediatas e sem esforço para o vasto Atlântico.
            </p>
         </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default DeepWater;