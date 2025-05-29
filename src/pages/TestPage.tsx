import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { TestQuestion } from '../components/test/TestQuestion';
import { ProgressBar } from '../components/test/ProgressBar';
import { testQuestions } from '../data/testQuestions';
import { useUserStore } from '../store/userStore';
import { evaluateTest } from '../utils/testEvaluator';

export const TestPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { 
    city, 
    setCity, 
    testAnswers, 
    saveAnswer, 
    currentQuestionIndex, 
    setCurrentQuestionIndex,
    completeTest,
    resetTest
  } = useUserStore();
  
  const [showIntro, setShowIntro] = useState(true);
  const [cityInput, setCityInput] = useState(city || '');
  const [error, setError] = useState('');
  
  // Reset test on initial load
  useEffect(() => {
    resetTest();
  }, [resetTest]);
  
  const startTest = () => {
    if (!cityInput.trim()) {
      setError(t('test.cityPrompt.helperText'));
      return;
    }
    
    setCity(cityInput);
    setShowIntro(false);
  };
  
  const handleSelectAnswer = (questionId: number, answerId: string) => {
    saveAnswer(questionId, answerId);
  };
  
  const handleNext = () => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const currentAnswer = testAnswers.find(a => a.questionId === currentQuestion.id);
    
    if (!currentAnswer) {
      setError('Пожалуйста, выберите один из вариантов');
      return;
    }
    
    setError('');
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Complete test and navigate to results
      const results = evaluateTest(testAnswers);
      completeTest(results);
      navigate('/results');
    }
  };
  
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const getCurrentQuestion = () => {
    return testQuestions[currentQuestionIndex];
  };
  
  const getSelectedAnswer = (questionId: number) => {
    const answer = testAnswers.find(a => a.questionId === questionId);
    return answer ? answer.answer : null;
  };
  
  const isLastQuestion = currentQuestionIndex === testQuestions.length - 1;
  
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h1 className="text-2xl font-bold text-neutral-800 mb-4">
                  {t('test.intro.title')}
                </h1>
                <p className="text-neutral-600 mb-6">
                  {t('test.intro.description')}
                </p>
                <p className="text-neutral-600 mb-8">
                  {t('test.intro.instructions')}
                </p>
                
                <div className="mb-6">
                  <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('test.cityPrompt.label')}
                  </label>
                  <input
                    type="text"
                    id="city"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                      error ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder={t('test.cityPrompt.placeholder')}
                    value={cityInput}
                    onChange={(e) => {
                      setCityInput(e.target.value);
                      setError('');
                    }}
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                  )}
                  <p className="mt-1 text-sm text-neutral-500">
                    {t('test.cityPrompt.helperText')}
                  </p>
                </div>
                
                <button
                  onClick={startTest}
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {t('test.intro.startButton')}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <ProgressBar
                  currentQuestion={currentQuestionIndex}
                  totalQuestions={testQuestions.length}
                />
                
                <TestQuestion
                  question={getCurrentQuestion()}
                  selectedAnswer={getSelectedAnswer(getCurrentQuestion().id)}
                  onSelectAnswer={handleSelectAnswer}
                />
                
                {error && (
                  <p className="mt-1 mb-4 text-sm text-red-600">{error}</p>
                )}
                
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`px-6 py-2 border border-neutral-300 rounded-md ${
                      currentQuestionIndex === 0
                        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                        : 'bg-white text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {t('test.navigation.prev')}
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                  >
                    {isLastQuestion
                      ? t('test.navigation.finish')
                      : t('test.navigation.next')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};