import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TestAnswer {
  questionId: number;
  answer: string;
}

export interface UserState {
  language: string;
  city: string;
  testAnswers: TestAnswer[];
  testCompleted: boolean;
  currentQuestionIndex: number;
  testResults: {
    personalityType: string;
    professions: string[];
  } | null;
  
  // Actions
  setLanguage: (language: string) => void;
  setCity: (city: string) => void;
  saveAnswer: (questionId: number, answer: string) => void;
  setCurrentQuestionIndex: (index: number) => void;
  resetTest: () => void;
  completeTest: (results: { personalityType: string; professions: string[] }) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      language: 'ru',
      city: '',
      testAnswers: [],
      testCompleted: false,
      currentQuestionIndex: 0,
      testResults: null,

      setLanguage: (language) => set({ language }),
      setCity: (city) => set({ city }),
      
      saveAnswer: (questionId, answer) => 
        set((state) => {
          const existingAnswerIndex = state.testAnswers.findIndex(
            (a) => a.questionId === questionId
          );
          
          let newAnswers = [...state.testAnswers];
          
          if (existingAnswerIndex >= 0) {
            newAnswers[existingAnswerIndex] = { questionId, answer };
          } else {
            newAnswers = [...newAnswers, { questionId, answer }];
          }
          
          return { testAnswers: newAnswers };
        }),
        
      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
      
      resetTest: () => set({
        testAnswers: [],
        testCompleted: false,
        currentQuestionIndex: 0,
        testResults: null,
      }),
      
      completeTest: (results) => set({
        testCompleted: true,
        testResults: results,
      }),
    }),
    {
      name: 'career-recommender-storage',
    }
  )
);