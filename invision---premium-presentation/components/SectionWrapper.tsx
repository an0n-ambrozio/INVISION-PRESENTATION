import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id }) => {
  return (
    // h-screen forces exact viewport height. 
    // snap-start aligns it perfectly when scrolling.
    <section 
      id={id} 
      className={`w-full h-screen flex items-center justify-center px-6 md:px-16 py-0 relative overflow-hidden snap-start ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 h-full flex flex-col justify-center">
        {children}
      </div>
      
      {/* Global Grain/Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>
    </section>
  );
};

export default SectionWrapper;