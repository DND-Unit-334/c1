import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUserStore } from '../store/userStore';
import { getProfessionsByType } from '../data/professions';
import { getVacanciesByProfessionAndCity } from '../data/vacancies';
import { ProfessionCard } from '../components/results/ProfessionCard';
import { VacancyList } from '../components/results/VacancyList';
import { getPersonalityTypeDescription } from '../utils/testEvaluator';

export const ResultsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { 
    testResults, 
    testCompleted, 
    city, 
    resetTest,
    language
  } = useUserStore();
  
  // Redirect to test page if no results
  useEffect(() => {
    if (!testCompleted || !testResults) {
      navigate('/test');
    }
  }, [testCompleted, testResults, navigate]);
  
  if (!testResults) {
    return null;
  }
  
  const { personalityType, professions: professionIds } = testResults;
  const recommendedProfessions = professionIds.map(id => {
    const professionList = getProfessionsByType(personalityType);
    return professionList.find(p => p.id === id) || professionList[0];
  });
  
  const vacancies = recommendedProfessions.flatMap(profession => 
    getVacanciesByProfessionAndCity(profession.id, city)
  );
  
  const handleRetakeTest = () => {
    resetTest();
    navigate('/test');
  };
  
  const handleSaveResults = () => {
    // This would generate a PDF or other format in a real implementation
    alert('This feature would save your results as a PDF in a real implementation.');
  };
  
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
            <h1 className="text-2xl font-bold text-neutral-800 mb-2">
              {t('results.title')}
            </h1>
            <p className="text-neutral-600 mb-6">
              {t('results.subtitle')}
            </p>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                {t('results.yourTypeTitle')}
              </h2>
              <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-primary-700 mb-2">
                  {t(`personTypes.${personalityType}.title`)}
                </h3>
                <p className="text-neutral-700">
                  {getPersonalityTypeDescription(personalityType, language)}
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                {t('results.recommendedProfessions')}
              </h2>
              <div className="space-y-6">
                {recommendedProfessions.map((profession, index) => (
                  <ProfessionCard 
                    key={profession.id} 
                    profession={profession} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleRetakeTest}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
              >
                <RefreshCw size={18} className="mr-2" />
                {t('results.retakeTest')}
              </button>
              <button
                onClick={handleSaveResults}
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-base font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 transition-colors"
              >
                <Download size={18} className="mr-2" />
                {t('results.saveResults')}
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-xl font-bold text-neutral-800 mb-6">
              {t('results.jobVacancies')}
            </h2>
            <VacancyList vacancies={vacancies} city={city} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};