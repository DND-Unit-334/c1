import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, TrendingUp, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Benefits: React.FC = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: <Shield size={24} />,
      title: t('home.benefits.reliable'),
      description: t('home.benefits.reliableDescription'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <TrendingUp size={24} />,
      title: t('home.benefits.upToDate'),
      description: t('home.benefits.upToDateDescription'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <UserCheck size={24} />,
      title: t('home.benefits.personalized'),
      description: t('home.benefits.personalizedDescription'),
      color: 'bg-purple-100 text-purple-600',
    }
  ];
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            {t('home.benefits.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 flex items-center justify-center ${benefit.color} rounded-full mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};