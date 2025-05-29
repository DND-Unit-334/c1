import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const { t } = useTranslation();
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-neutral-600">
          {t('test.progressText', { current: currentQuestion + 1, total: totalQuestions })}
        </span>
        <span className="text-sm font-medium text-primary-600">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};