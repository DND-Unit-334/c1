import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/test" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-primary-600 hover:bg-blue-50 transition-colors shadow-md"
              >
                {t('home.hero.startTestButton')}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-100 text-base font-medium rounded-md text-white hover:bg-primary-600 transition-colors"
              >
                {t('home.hero.learnMoreButton')}
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-md"
            >
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto">
                    <Compass size={32} />
                  </div>
                  <h3 className="text-center text-xl font-bold text-neutral-800 mb-4">
                    {t('test.intro.title')}
                  </h3>
                  <p className="text-center text-neutral-600 mb-6">
                    {t('test.intro.description')}
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      to="/test" 
                      className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-sm"
                    >
                      {t('test.intro.startButton')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};