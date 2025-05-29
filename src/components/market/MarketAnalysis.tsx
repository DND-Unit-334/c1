import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, DollarSign, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { getMarketTrendsByProfession, getSkillDemandsByProfession } from '../../data/marketAnalysis';

interface MarketAnalysisProps {
  professionId: string;
}

export const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ professionId }) => {
  const { t } = useTranslation();
  const trends = getMarketTrendsByProfession(professionId);
  const skillDemands = getSkillDemandsByProfession(professionId);

  const latestTrend = trends[trends.length - 1];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary-100 rounded-full">
              <DollarSign className="text-primary-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-600">{t('market.averageSalary')}</p>
              <p className="text-xl font-semibold">
                {latestTrend.metrics.averageSalary.toLocaleString()} ₸
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-secondary-100 rounded-full">
              <Users className="text-secondary-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-600">{t('market.openPositions')}</p>
              <p className="text-xl font-semibold">
                {latestTrend.metrics.vacanciesCount}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-accent-100 rounded-full">
              <TrendingUp className="text-accent-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-600">{t('market.demandGrowth')}</p>
              <p className="text-xl font-semibold">
                +{latestTrend.metrics.demandGrowth}%
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <BarChart className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-600">{t('market.competition')}</p>
              <p className="text-xl font-semibold">
                {latestTrend.metrics.competitionLevel.toFixed(1)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4">{t('market.salaryTrend')}</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="metrics.averageSalary"
                stroke="#3563E9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4">{t('market.demandedSkills')}</h3>
        <div className="space-y-4">
          {skillDemands.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{skill.skillName}</p>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <span>Demand Level: {skill.demandLevel}/5</span>
                  <span>•</span>
                  <span>Salary Impact: +{skill.salaryImpact}%</span>
                </div>
              </div>
              <div className="w-32 bg-neutral-200 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${(skill.demandLevel / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};