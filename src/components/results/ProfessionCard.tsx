import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Users, DollarSign, Star } from 'lucide-react';
import { Profession } from '../../data/professions';
import { motion } from 'framer-motion';

interface ProfessionCardProps {
  profession: Profession;
  index: number;
}

export const ProfessionCard: React.FC<ProfessionCardProps> = ({ profession, index }) => {
  const { i18n } = useTranslation();
  const isKazakh = i18n.language === 'kk';

  const formatSalary = (min: number, max: number): string => {
    return `${min.toLocaleString()} - ${max.toLocaleString()} ₸`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
              <Briefcase size={24} />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              {isKazakh ? profession.nameKk : profession.nameRu}
            </h3>
            <p className="text-neutral-600 mb-4">
              {isKazakh ? profession.descriptionKk : profession.descriptionRu}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <DollarSign size={16} className="text-neutral-500 mr-2" />
                <span className="text-sm text-neutral-700">
                  {formatSalary(profession.salaryRange.min, profession.salaryRange.max)}
                </span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="text-neutral-500 mr-2" />
                <span className="text-sm text-neutral-700">
                  {profession.demandLevel > 4 ? 'Высокий спрос' : 'Средний спрос'}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-neutral-700 mb-2">Требуемые навыки:</h4>
              <div className="flex flex-wrap gap-2">
                {(isKazakh ? profession.skillsKk : profession.skillsRu).map((skill, i) => (
                  <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};