import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Database, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-neutral-800 mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-50 p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  {t('about.methodology.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('about.methodology.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-50 p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  {t('about.data.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('about.data.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-neutral-50 p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  {t('about.team.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('about.team.description')}
                </p>
              </motion.div>
            </div>
            
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">2023 - Год рабочих профессий</h2>
              <p className="text-neutral-700 mb-4">
                В 2023 году в Казахстане особое внимание уделяется рабочим профессиям, которые играют важную роль в развитии экономики страны.
              </p>
              <p className="text-neutral-700">
                Наш сервис помогает молодым людям увидеть перспективы в рабочих профессиях и выбрать карьерный путь, соответствующий их интересам и способностям.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Как работает тест профориентации?</h3>
                <p className="text-neutral-600">
                  Наш тест основан на нескольких психологических методиках, включая теорию профессиональных типов личности Джона Холланда. Мы анализируем ваши ответы и определяем, какой тип личности преобладает, а затем рекомендуем наиболее подходящие профессии.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Откуда берутся данные о вакансиях?</h3>
                <p className="text-neutral-600">
                  Мы получаем информацию о вакансиях с популярных платформ поиска работы в Казахстане: hh.kz и enbek.kz. Данные регулярно обновляются, чтобы предоставить вам актуальную информацию о рынке труда.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Могу ли я пройти тест несколько раз?</h3>
                <p className="text-neutral-600">
                  Да, вы можете проходить тест столько раз, сколько захотите. Кроме того, мы рекомендуем периодически повторять тестирование, так как ваши интересы и предпочтения могут меняться со временем.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};