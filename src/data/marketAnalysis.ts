export interface MarketTrend {
  professionId: string;
  year: number;
  quarter: number;
  metrics: {
    averageSalary: number;
    vacanciesCount: number;
    demandGrowth: number; // percentage
    competitionLevel: number; // applications per vacancy
  };
}

export interface SkillDemand {
  skillName: string;
  demandLevel: number; // 1-5
  salaryImpact: number; // percentage increase
}

export const marketTrends: MarketTrend[] = [
  {
    professionId: 'auto-mechanic',
    year: 2024,
    quarter: 1,
    metrics: {
      averageSalary: 280000,
      vacanciesCount: 450,
      demandGrowth: 15,
      competitionLevel: 3.2
    }
  },
  {
    professionId: 'software-developer',
    year: 2024,
    quarter: 1,
    metrics: {
      averageSalary: 650000,
      vacanciesCount: 820,
      demandGrowth: 25,
      competitionLevel: 4.5
    }
  }
];

export const skillDemands: Record<string, SkillDemand[]> = {
  'auto-mechanic': [
    {
      skillName: 'Диагностика электронных систем',
      demandLevel: 5,
      salaryImpact: 20
    },
    {
      skillName: 'Ремонт гибридных двигателей',
      demandLevel: 4,
      salaryImpact: 15
    }
  ],
  'software-developer': [
    {
      skillName: 'React',
      demandLevel: 5,
      salaryImpact: 25
    },
    {
      skillName: 'TypeScript',
      demandLevel: 4,
      salaryImpact: 20
    }
  ]
};

export const getMarketTrendsByProfession = (professionId: string): MarketTrend[] => {
  return marketTrends.filter(trend => trend.professionId === professionId);
};

export const getSkillDemandsByProfession = (professionId: string): SkillDemand[] => {
  return skillDemands[professionId] || [];
};

export default {
  marketTrends,
  skillDemands,
  getMarketTrendsByProfession,
  getSkillDemandsByProfession
};