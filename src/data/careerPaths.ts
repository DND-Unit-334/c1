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
  },
  {
    professionId: 'electrician',
    steps: [
      {
        id: 'apprentice-electrician',
        titleRu: 'Ученик электрика',
        titleKk: 'Электрик оқушысы',
        descriptionRu: 'Начальная позиция. Обучение под руководством опытного электрика.',
        descriptionKk: 'Бастапқы позиция. Тәжірибелі электриктің басшылығымен оқыту.',
        yearsExperience: 0,
        salaryRange: {
          min: 120000,
          max: 200000
        },
        skills: ['Базовые инструменты', 'Техника безопасности', 'Основы электротехники'],
        nextSteps: ['junior-electrician']
      },
      {
        id: 'junior-electrician',
        titleRu: 'Младший электрик',
        titleKk: 'Кіші электрик',
        descriptionRu: 'Выполнение базовых электромонтажных работ под наблюдением.',
        descriptionKk: 'Бақылау астында негізгі электр монтаждау жұмыстарын орындау.',
        yearsExperience: 1,
        salaryRange: {
          min: 200000,
          max: 300000
        },
        skills: ['Монтаж проводки', 'Установка оборудования', 'Чтение схем'],
        nextSteps: ['electrician']
      },
      {
        id: 'electrician',
        titleRu: 'Электрик',
        titleKk: 'Электрик',
        descriptionRu: 'Самостоятельное выполнение всех видов электромонтажных работ.',
        descriptionKk: 'Барлық электр монтаждау жұмыстарын өз бетінше орындау.',
        yearsExperience: 3,
        salaryRange: {
          min: 300000,
          max: 450000
        },
        skills: ['Диагностика неисправностей', 'Промышленная электрика', 'Автоматизация'],
        nextSteps: ['master-electrician']
      }
    ]
  },
  {
    professionId: 'graphic-designer',
    steps: [
      {
        id: 'junior-designer',
        titleRu: 'Младший дизайнер',
        titleKk: 'Кіші дизайнер',
        descriptionRu: 'Работа над простыми проектами под руководством старших дизайнеров.',
        descriptionKk: 'Аға дизайнерлердің басшылығымен қарапайым жобалармен жұмыс.',
        yearsExperience: 0,
        salaryRange: {
          min: 150000,
          max: 300000
        },
        skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Основы композиции'],
        nextSteps: ['designer']
      },
      {
        id: 'designer',
        titleRu: 'Дизайнер',
        titleKk: 'Дизайнер',
        descriptionRu: 'Самостоятельная работа над проектами средней сложности.',
        descriptionKk: 'Орташа күрделіліктегі жобалармен өз бетінше жұмыс.',
        yearsExperience: 2,
        salaryRange: {
          min: 300000,
          max: 500000
        },
        skills: ['UI/UX Design', 'Брендинг', 'Типография', 'Motion Design'],
        nextSteps: ['senior-designer', 'art-director']
      },
      {
        id: 'senior-designer',
        titleRu: 'Старший дизайнер',
        titleKk: 'Аға дизайнер',
        descriptionRu: 'Ведение сложных проектов и руководство командой дизайнеров.',
        descriptionKk: 'Күрделі жобаларды жүргізу және дизайнерлер командасын басқару.',
        yearsExperience: 4,
        salaryRange: {
          min: 500000,
          max: 800000
        },
        skills: ['Team Management', 'Project Management', 'Design Strategy', 'Client Communication'],
        nextSteps: ['art-director', 'creative-director']
      }
    ]
  },
  {
    professionId: 'nurse',
    steps: [
      {
        id: 'intern-nurse',
        titleRu: 'Медсестра-стажер',
        titleKk: 'Тәжірибеден өтуші мейірбике',
        descriptionRu: 'Начальная позиция. Обучение под руководством опытных медсестер.',
        descriptionKk: 'Бастапқы позиция. Тәжірибелі мейірбикелердің басшылығымен оқыту.',
        yearsExperience: 0,
        salaryRange: {
          min: 120000,
          max: 180000
        },
        skills: ['Базовый уход', 'Измерение показателей', 'Асептика и антисептика'],
        nextSteps: ['general-nurse']
      },
      {
        id: 'general-nurse',
        titleRu: 'Медицинская сестра',
        titleKk: 'Мейірбике',
        descriptionRu: 'Самостоятельная работа с пациентами, выполнение назначений врача.',
        descriptionKk: 'Науқастармен өз бетінше жұмыс, дәрігердің тағайындауларын орындау.',
        yearsExperience: 2,
        salaryRange: {
          min: 180000,
          max: 250000
        },
        skills: ['Инъекции', 'Забор анализов', 'Уход за пациентами'],
        nextSteps: ['specialized-nurse']
      },
      {
        id: 'specialized-nurse',
        titleRu: 'Специализированная медсестра',
        titleKk: 'Мамандандырылған мейірбике',
        descriptionRu: 'Работа в специализированном отделении, расширенные обязанности.',
        descriptionKk: 'Мамандандырылған бөлімде жұмыс, кеңейтілген міндеттер.',
        yearsExperience: 4,
        salaryRange: {
          min: 250000,
          max: 350000
        },
        skills: ['Специализированный уход', 'Работа с оборудованием', 'Обучение персонала'],
        nextSteps: ['head-nurse']
      }
    ]
  }
];

export const getCareerPathByProfession = (professionId: string): CareerPath | undefined => {
  return careerPaths.find(path => path.professionId === professionId);
};

export default careerPaths;