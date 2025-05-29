import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Building, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Vacancy } from '../../data/vacancies';
import { motion } from 'framer-motion';

interface VacancyListProps {
  vacancies: Vacancy[];
  city: string;
}

export const VacancyList: React.FC<VacancyListProps> = ({ vacancies, city }) => {
  const { t } = useTranslation();
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  if (vacancies.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase size={24} className="text-neutral-400" />
        </div>
        <h3 className="text-lg font-medium text-neutral-700 mb-2">
          {t('results.noVacancies')}
        </h3>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-neutral-800 mb-4">
        {t('results.vacanciesInCity', { city })}
      </h3>
      
      {vacancies.map((vacancy, index) => (
        <motion.div
          key={vacancy.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium text-neutral-800 mb-1">
                {vacancy.title}
              </h4>
              <div className="flex items-center text-neutral-500 text-sm mb-3">
                <Building size={14} className="mr-1" />
                <span className="mr-3">{vacancy.company}</span>
                <MapPin size={14} className="mr-1" />
                <span className="mr-3">{vacancy.city}</span>
                <Calendar size={14} className="mr-1" />
                <span>{formatDate(vacancy.publishedDate)}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-medium text-neutral-800 mb-1">
                {vacancy.salary.min.toLocaleString()} - {vacancy.salary.max.toLocaleString()} ₸
              </div>
              <div className="text-xs px-2 py-1 bg-neutral-100 rounded-full inline-block">
                {vacancy.source === 'hh' ? 'HeadHunter' : 'Enbek.kz'}
              </div>
            </div>
          </div>
          
          <p className="text-neutral-600 text-sm mb-3">
            {vacancy.description}
          </p>
          
          <div className="mb-4">
            <h5 className="text-sm font-medium text-neutral-700 mb-2">Требования:</h5>
            <ul className="text-sm text-neutral-600 list-disc list-inside">
              {vacancy.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-end">
            <a 
              href={vacancy.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              Подробнее
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};