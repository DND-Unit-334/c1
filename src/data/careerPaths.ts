export interface CareerPathStep {
  id: string;
  titleRu: string;
  titleKk: string;
  descriptionRu: string;
  descriptionKk: string;
  yearsExperience: number;
  salaryRange: {
    min: number;
    max: number;
  };
  skills: string[];
  nextSteps: string[];
}

export interface CareerPath {
  professionId: string;
  steps: CareerPathStep[];
}

export const careerPaths: CareerPath[] = [
  {
    professionId: 'software-developer',
    steps: [
      {
        id: 'junior-frontend',
        titleRu: 'Junior Frontend-разработчик',
        titleKk: 'Junior Frontend-әзірлеуші',
        descriptionRu: 'Начальная позиция во frontend-разработке. Работа с HTML, CSS и базовым JavaScript.',
        descriptionKk: 'Frontend-әзірлеудегі бастапқы позиция. HTML, CSS және негізгі JavaScript-пен жұмыс.',
        yearsExperience: 0,
        salaryRange: {
          min: 200000,
          max: 400000
        },
        skills: ['HTML', 'CSS', 'JavaScript', 'React Basics'],
        nextSteps: ['middle-frontend', 'junior-backend']
      },
      {
        id: 'middle-frontend',
        titleRu: 'Middle Frontend-разработчик',
        titleKk: 'Middle Frontend-әзірлеуші',
        descriptionRu: 'Опытный frontend-разработчик с глубоким пониманием JavaScript и современных фреймворков.',
        descriptionKk: 'JavaScript және заманауи фреймворктарды терең түсінетін тәжірибелі frontend-әзірлеуші.',
        yearsExperience: 2,
        salaryRange: {
          min: 400000,
          max: 800000
        },
        skills: ['Advanced JavaScript', 'React', 'TypeScript', 'State Management', 'Testing'],
        nextSteps: ['senior-frontend', 'fullstack']
      },
      {
        id: 'senior-frontend',
        titleRu: 'Senior Frontend-разработчик',
        titleKk: 'Senior Frontend-әзірлеуші',
        descriptionRu: 'Ведущий специалист по frontend-разработке, способный проектировать архитектуру и руководить командой.',
        descriptionKk: 'Frontend-әзірлеудің жетекші маманы, архитектураны жобалай алатын және команданы басқара алатын.',
        yearsExperience: 4,
        salaryRange: {
          min: 800000,
          max: 1500000
        },
        skills: ['Architecture Design', 'Team Leadership', 'Performance Optimization', 'Mentoring'],
        nextSteps: ['tech-lead', 'solution-architect']
      }
    ]
  },
  {
    professionId: 'auto-mechanic',
    steps: [
      {
        id: 'junior-mechanic',
        titleRu: 'Помощник автомеханика',
        titleKk: 'Автомеханик көмекшісі',
        descriptionRu: 'Начальная позиция. Помощь в диагностике и ремонте под руководством опытного механика.',
        descriptionKk: 'Бастапқы позиция. Тәжірибелі механиктің басшылығымен диагностика және жөндеу жұмыстарына көмек.',
        yearsExperience: 0,
        salaryRange: {
          min: 150000,
          max: 250000
        },
        skills: ['Базовая диагностика', 'Замена масла', 'Шиномонтаж'],
        nextSteps: ['mechanic']
      },
      {
        id: 'mechanic',
        titleRu: 'Автомеханик',
        titleKk: 'Автомеханик',
        descriptionRu: 'Самостоятельное выполнение ремонтных работ любой сложности.',
        descriptionKk: 'Кез келген күрделіліктегі жөндеу жұмыстарын өз бетінше орындау.',
        yearsExperience: 2,
        salaryRange: {
          min: 250000,
          max: 400000
        },
        skills: ['Диагностика неисправностей', 'Ремонт двигателя', 'Электрика автомобиля'],
        nextSteps: ['senior-mechanic', 'diagnostic-specialist']
      },
      {
        id: 'senior-mechanic',
        titleRu: 'Старший автомеханик',
        titleKk: 'Аға автомеханик',
        descriptionRu: 'Руководство бригадой механиков, контроль качества работ.',
        descriptionKk: 'Механиктер бригадасын басқару, жұмыс сапасын бақылау.',
        yearsExperience: 5,
        salaryRange: {
          min: 400000,
          max: 600000
        },
        skills: ['Управление персоналом', 'Контроль качества', 'Сложный ремонт'],
        nextSteps: ['service-manager', 'workshop-owner']
      }
    ]
  }
];

export const getCareerPathByProfession = (professionId: string): CareerPath | undefined => {
  return careerPaths.find(path => path.professionId === professionId);
};

export default careerPaths;