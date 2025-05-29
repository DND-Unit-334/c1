import React from 'react';
import { useTranslation } from 'react-i18next';
import { TestQuestion as TestQuestionType } from '../../data/testQuestions';
import { motion } from 'framer-motion';

interface TestQuestionProps {
  question: TestQuestionType;
  selectedAnswer: string | null;
  onSelectAnswer: (questionId: number, answerId: string) => void;
}

export const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const { i18n } = useTranslation();
  const isKazakh = i18n.language === 'kk';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <h3 className="text-xl font-semibold text-neutral-800 mb-4">
        {isKazakh ? question.textKk : question.textRu}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedAnswer === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-neutral-200 hover:border-primary-200 hover:bg-neutral-50'
            }`}
            onClick={() => onSelectAnswer(question.id, option.id)}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  selectedAnswer === option.id
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-neutral-300'
                }`}
              >
                {selectedAnswer === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-neutral-700">
                {isKazakh ? option.textKk : option.textRu}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};