import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, ThumbsUp, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: <ClipboardCheck size={24} />,
      title: t('home.howItWorks.step1'),
      description: t('home.howItWorks.step1Description'),
    },
    {
      icon: <ThumbsUp size={24} />,
      title: t('home.howItWorks.step2'),
      description: t('home.howItWorks.step2Description'),
    },
    {
      icon: <Briefcase size={24} />,
      title: t('home.howItWorks.step3'),
      description: t('home.howItWorks.step3Description'),
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            {t('home.howItWorks.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};