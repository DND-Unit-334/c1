import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { DemandedProfessions } from '../components/home/DemandedProfessions';
import { HowItWorks } from '../components/home/HowItWorks';
import { Benefits } from '../components/home/Benefits';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <DemandedProfessions />
      <HowItWorks />
      <Benefits />
    </div>
  );
};