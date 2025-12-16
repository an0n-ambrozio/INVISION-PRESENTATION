import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const PremiumOceanfront: React.FC = () => {
  return (
    <SectionWrapper className="relative min-h-screen flex items-end pb-32 overflow-hidden">

      {/* Immersive Background Image - Cinematic Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img
            src="/projects/1719-ne-18th-st/image-16.jpg"
            alt="Luxury Waterfront Property - Project 1719"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Artistic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-12">

        {/* Content - Editorial Layout */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* The Gold Axis */}
          <div className="w-[1px] h-32 bg-invision-orange mb-12 origin-bottom transform scale-y-100"></div>

          <h2 className="text-7xl md:text-[120px] font-serif text-white leading-[0.85] tracking-tighter mb-12">
            Desvende <br />
            <span className="font-light italic text-white/80">o Potencial.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-t border-white/10 pt-10 max-w-3xl">
            <div>
              <span className="text-invision-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Location
              </span>
              <p className="text-2xl text-white font-light">Fort Lauderdale, FL</p>
            </div>

            <div>
              <span className="text-invision-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Expertise
              </span>
              <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
                30 anos de excelência em construção, transformando visões em marcos arquitetônicos.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default PremiumOceanfront;