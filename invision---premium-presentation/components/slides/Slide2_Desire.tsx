import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { ThemeType, SlideProps } from '../../types';
import { ShieldCheck, TrendingUp, Anchor } from 'lucide-react';

const Slide2_Desire: React.FC<SlideProps> = ({ isActive }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <SlideLayout theme={ThemeType.LIGHT} pageNumber="02">
      <div className="h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-invision-orange uppercase tracking-widest font-bold text-sm mb-4">Visão Geral</h2>
          <h1 className="font-serif text-4xl md:text-6xl text-invision-graphite">O Desejo do Investidor</h1>
          <div className="w-24 h-1 bg-invision-graphite mt-6"></div>
        </motion.div>

        {/* Main Content - Centered Statement */}
        <div className="flex-grow flex items-center justify-center relative">
            {/* Background decorative element */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="font-serif text-[20rem] text-invision-dark leading-none">&</span>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl"
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-sm border-t-4 border-invision-dark">
                    <div className="w-16 h-16 bg-invision-light rounded-full flex items-center justify-center mb-6 text-invision-orange">
                        <ShieldCheck size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">Segurança</h3>
                    <p className="text-invision-grey font-light">Proteção patrimonial absoluta em uma economia forte.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-invision-orange text-white shadow-xl transform md:-translate-y-4 rounded-sm">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white">
                        <TrendingUp size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">Lucratividade</h3>
                    <p className="text-white/90 font-light">Retornos consistentes acima da média de mercado.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-sm border-t-4 border-invision-dark">
                    <div className="w-16 h-16 bg-invision-light rounded-full flex items-center justify-center mb-6 text-invision-orange">
                        <Anchor size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">Zero Risco</h3>
                    <p className="text-invision-grey font-light">Estratégias conservadoras sem arriscar o capital principal.</p>
                </motion.div>
            </motion.div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-center"
        >
            <p className="font-serif italic text-2xl text-invision-graphite opacity-80">
                "Investir de forma segura, lucrativa, sem arriscar capital."
            </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide2_Desire;