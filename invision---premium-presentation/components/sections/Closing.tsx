import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Closing: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative overflow-hidden">
      {/* Background Decor - Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-invision-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto h-full">
         
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
         >
             <h2 className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs mb-8">Parceria Estratégica</h2>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                Eu adoraria trabalhar <br/> <span className="italic text-gray-500">com você!</span>
             </h1>
             <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Faça parceria com a Invision para moldar o próximo empreendimento de luxo icônico à beira-mar de Fort Lauderdale.
             </p>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-invision-card border border-white/10 p-10 rounded-sm w-full max-w-2xl shadow-2xl"
         >
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-left">
                     <p className="text-2xl text-white font-serif mb-1">Renato Lerner</p>
                     <p className="text-invision-orange text-xs uppercase font-bold tracking-wider mb-6">CEO & Fundador</p>
                     
                     <div className="space-y-3">
                         <a href="tel:+19549098020" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                             <Phone size={18} />
                             <span>+1 (954) 909-8020</span>
                         </a>
                         <a href="mailto:rlerner@invisioninvestmentsgroup.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                             <Mail size={18} />
                             <span>rlerner@invisioninvestmentsgroup.com</span>
                         </a>
                     </div>
                 </div>

                 {/* CTA Button */}
                 <a 
                    href="mailto:rlerner@invisioninvestmentsgroup.com" 
                    className="group bg-white text-black px-8 py-4 rounded-sm font-bold flex items-center gap-4 hover:bg-invision-orange transition-colors duration-300"
                 >
                     <span>INICIAR CONVERSA</span>
                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </a>
             </div>
         </motion.div>

         <div className="mt-16 opacity-30 text-[10px] text-gray-500 uppercase tracking-widest">
             &copy; {new Date().getFullYear()} Invision Investments. All Rights Reserved. Material Confidencial.
         </div>

      </div>
    </SectionWrapper>
  );
};

export default Closing;