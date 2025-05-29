import { TestAnswer } from '../store/userStore';
import { testQuestions } from '../data/testQuestions';
import { getProfessionsByType } from '../data/professions';

type PersonalityScores = {
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
};

export const evaluateTest = (answers: TestAnswer[]): { 
  personalityType: string; 
  professions: string[];
} => {
  // Initialize scores
  const scores: PersonalityScores = {
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0
  };
  
  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = testQuestions.find(q => q.id === answer.questionId);
    if (!question) return;
    
    const selectedOption = question.options.find(opt => opt.id === answer.answer);
    if (!selectedOption) return;
    
    scores[selectedOption.type as keyof PersonalityScores] += selectedOption.value;
  });
  
  // Determine dominant personality type
  let dominantType = 'realistic';
  let highestScore = scores.realistic;
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > highestScore) {
      highestScore = score;
      dominantType = type;
    }
  });
  
  // Get recommended professions based on personality type
  const recommendedProfessions = getProfessionsByType(dominantType)
    .slice(0, 3)
    .map(profession => profession.id);
  
  return {
    personalityType: dominantType,
    professions: recommendedProfessions
  };
};

export const getPersonalityTypeDescription = (personalityType: string, language: string): string => {
  const typeDescriptions: Record<string, { ru: string; kk: string }> = {
    realistic: {
      ru: 'Ты предпочитаешь работать с вещами, инструментами и механизмами. Тебе нравится создавать конкретные, осязаемые продукты своими руками.',
      kk: 'Сіз заттармен, құралдармен және механизмдермен жұмыс істеуді қалайсыз. Сізге нақты, қолмен ұстап көретін өнімдерді өз қолыңызбен жасау ұнайды.'
    },
    investigative: {
      ru: 'Тебе интересно исследовать, анализировать и решать сложные задачи. Ты ценишь логику, точность и стремишься к пониманию окружающего мира.',
      kk: 'Сізге зерттеу, талдау және күрделі мәселелерді шешу қызықты. Сіз логиканы, дәлдікті бағалайсыз және әлемді түсінуге ұмтыласыз.'
    },
    artistic: {
      ru: 'Ты творческий человек, который ценит самовыражение и оригинальность. Тебе нравится работать в нестандартной обстановке.',
      kk: 'Сіз өзін-өзі көрсетуді және бірегейлікті бағалайтын шығармашылық адамсыз. Сізге стандартты емес ортада жұмыс істеу ұнайды.'
    },
    social: {
      ru: 'Ты любишь работать с людьми, помогать им и обучать. Тебе важно видеть положительное влияние своей работы на других.',
      kk: 'Сіз адамдармен жұмыс істеуді, оларға көмектесуді және оқытуды ұнатасыз. Сіз үшін өз жұмысыңыздың басқаларға оң әсерін көру маңызды.'
    },
    enterprising: {
      ru: 'Тебе нравится руководить, убеждать и продавать. Ты ценишь статус, власть и возможность влиять на других людей.',
      kk: 'Сізге басқару, сендіру және сату ұнайды. Сіз мәртебені, билікті және басқа адамдарға әсер ету мүмкіндігін бағалайсыз.'
    },
    conventional: {
      ru: 'Ты предпочитаешь четкие инструкции и организованную работу. Тебе нравится порядок, структура и работа с данными.',
      kk: 'Сіз нақты нұсқаулар мен ұйымдастырылған жұмысты қалайсыз. Сізге тәртіп, құрылым және деректермен жұмыс ұнайды.'
    }
  };

  return language === 'kk' 
    ? typeDescriptions[personalityType]?.kk || ''
    : typeDescriptions[personalityType]?.ru || '';
};