import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Desire from './components/sections/Desire';
import Problem from './components/sections/Problem';
import Importance from './components/sections/Importance';
import Bio from './components/sections/Bio';
import Projects from './components/sections/Projects';
import WhyUSA from './components/sections/WhyUSA';
import Solution from './components/sections/Solution';
import Method from './components/sections/Method';
import Target from './components/sections/Target';
import PortfolioInvite from './components/sections/PortfolioInvite';
import Success from './components/sections/Success';
import RiskAlone from './components/sections/RiskAlone';
import CompetitiveAdvantage from './components/sections/CompetitiveAdvantage';
import PremiumOceanfront from './components/sections/PremiumOceanfront';
import GlobalLeadership from './components/sections/GlobalLeadership';
import PremiumOpportunity from './components/sections/PremiumOpportunity';
import BontonaSpecs from './components/sections/BontonaSpecs';
import DeepWater from './components/sections/DeepWater';
import ReadyToBuild from './components/sections/ReadyToBuild';
import DevelopmentOpportunity from './components/sections/DevelopmentOpportunity';
import StrategicInvestment from './components/sections/StrategicInvestment';
import Comparable1 from './components/sections/Comparable1';
import Comparable2 from './components/sections/Comparable2';
import Comparable3 from './components/sections/Comparable3';
import Comparable4 from './components/sections/Comparable4';
import Comparable5 from './components/sections/Comparable5';
import MarketInsights from './components/sections/MarketInsights';
import MarketPerformance from './components/sections/MarketPerformance';
import FinancialProjection from './components/sections/FinancialProjection';
import ValuePropFinal from './components/sections/ValuePropFinal';
import Closing from './components/sections/Closing';

const App: React.FC = () => {
  return (
    <div className="relative w-full bg-[#050505] text-invision-text selection:bg-invision-orange selection:text-white">
      {/* Header acts as an absolute overlay. Because Hero is the first snap point, header sits nicely on top of it. */}
      <Header />

      {/* Main container for snap sections */}
      <main className="w-full">
        <Hero />
        <Desire />
        <Problem />
        <Importance />
        <Bio />
        <Projects />
        <WhyUSA />
        <Solution />
        <Method />
        <Target />
        <PortfolioInvite />
        <Success />
        <RiskAlone />
        <CompetitiveAdvantage />
      </main>
    </div>
  );
};

export default App;