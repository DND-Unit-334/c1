import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, TrendingUp, Users } from 'lucide-react';
import { professions } from '../data/professions';
import { getCareerPathByProfession } from '../data/careerPaths';
import { MarketAnalysis } from '../components/market/MarketAnalysis';
import { VacancyList } from '../components/results/VacancyList';
import { getVacanciesByProfessionAndCity } from '../data/vacancies';
import { useUserStore } from '../store/userStore';

export const ProfessionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { city } = useUserStore();
  
  const profession = professions.find(p => p.id === id);
  const careerPath = getCareerPathByProfession(id || '');
  const vacancies = getVacanciesByProfessionAndCity(id || '', city);
  
  if (!profession || !careerPath) {
    return null;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-neutral-600 hover:text-neutral-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Назад
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-xl overflow-hidden mb-8"
        >
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">
              {i18n.language === 'kk' ? profession.nameKk : profession.nameRu}
            </h1>
            <p className="text-primary-50 text-lg mb-6">
              {i18n.language === 'kk' ? profession.descriptionKk : profession.descriptionRu}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <Briefcase className="text-primary-100 mr-3" />
                  <div>
                    <p className="text-primary-100">Тип профессии</p>
                    <p className="font-semibold">{profession.type}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <TrendingUp className="text-primary-100 mr-3" />
                  <div>
                    <p className="text-primary-100">Уровень спроса</p>
                    <p className="font-semibold">{profession.demandLevel}/5</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <Users className="text-primary-100 mr-3" />
                  <div>
                    <p className="text-primary-100">Зарплата</p>
                    <p className="font-semibold">
                      {profession.salaryRange.min.toLocaleString()} - {profession.salaryRange.max.toLocaleString()} ₸
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Карьерный путь</h2>
                <div className="space-y-8">
                  {careerPath.steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {index !== careerPath.steps.length - 1 && (
                        <div className="absolute left-6 top-14 w-0.5 h-16 bg-primary-200" />
                      )}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">{index + 1}</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">
                            {i18n.language === 'kk' ? step.titleKk : step.titleRu}
                          </h3>
                          <p className="text-neutral-600 mt-1">
                            {i18n.language === 'kk' ? step.descriptionKk : step.descriptionRu}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {step.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="mt-2 text-sm text-neutral-500">
                            Опыт работы: {step.yearsExperience} {step.yearsExperience === 1 ? 'год' : 'лет'}
                          </div>
                          <div className="mt-1 text-sm text-neutral-500">
                            Зарплата: {step.salaryRange.min.toLocaleString()} - {step.salaryRange.max.toLocaleString()} ₸
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Анализ рынка</h2>
                <MarketAnalysis professionId={id || ''} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Актуальные вакансии</h2>
                <VacancyList vacancies={vacancies} city={city} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};