import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { getDemandedProfessions, Profession } from '../../data/professions';

export const DemandedProfessions: React.FC = () => {
  const { t, i18n } = useTranslation();
  const demandedProfessions = getDemandedProfessions().slice(0, 6);
  
  const formatSalary = (min: number, max: number): string => {
    return `${min.toLocaleString()} - ${max.toLocaleString()} ₸`;
  };
  
  const getProfessionName = (profession: Profession): string => {
    return i18n.language === 'kk' ? profession.nameKk : profession.nameRu;
  };
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              {t('home.demandedProfessions.title')}
            </h2>
            <p className="text-neutral-600">
              {t('home.demandedProfessions.subtitle')}
            </p>
          </div>
          <div>
            <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              {t('home.demandedProfessions.viewAllButton')}
              <ArrowRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demandedProfessions.map((profession, index) => (
            <motion.div
              key={profession.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mr-3">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800">
                      {getProfessionName(profession)}
                    </h3>
                  </div>
                  <div className="flex items-center text-accent-500">
                    <TrendingUp size={16} />
                    <span className="ml-1 text-sm font-medium">
                      {profession.demandLevel > 4 ? 'Высокий спрос' : 'Средний спрос'}
                    </span>
                  </div>
                </div>
                
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-500">Зарплата:</span>
                    <span className="text-sm font-medium text-neutral-700">
                      {formatSalary(profession.salaryRange.min, profession.salaryRange.max)}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-600">
                    {i18n.language === 'kk' ? profession.descriptionKk : profession.descriptionRu}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-2">
                    {profession.workingProfession && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                        Рабочая профессия
                      </span>
                    )}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {profession.type === 'realistic' ? 'Реалистичный тип' : 
                       profession.type === 'investigative' ? 'Исследовательский тип' : 
                       profession.type === 'artistic' ? 'Артистический тип' : 
                       profession.type === 'social' ? 'Социальный тип' : 
                       profession.type === 'enterprising' ? 'Предпринимательский тип' : 
                       'Конвенциональный тип'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};