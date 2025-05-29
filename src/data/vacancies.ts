export interface Vacancy {
  id: string;
  professionId: string;
  title: string;
  company: string;
  city: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  publishedDate: string;
  url: string;
  source: 'hh' | 'enbek';
}

// Mock data for vacancies
export const vacancies: Vacancy[] = [
  // Auto mechanic vacancies
  {
    id: 'v1',
    professionId: 'auto-mechanic',
    title: 'Автомеханик',
    company: 'АвтоМастер',
    city: 'Алматы',
    salary: {
      min: 200000,
      max: 300000,
      currency: 'KZT'
    },
    description: 'Требуется автомеханик для диагностики и ремонта легковых автомобилей различных марок.',
    requirements: [
      'Опыт работы от 1 года',
      'Знание устройства автомобиля',
      'Умение работать с диагностическим оборудованием',
      'Ответственность и аккуратность'
    ],
    publishedDate: '2023-10-15',
    url: 'https://hh.kz/vacancy/12345',
    source: 'hh'
  },
  {
    id: 'v2',
    professionId: 'auto-mechanic',
    title: 'Автомеханик-диагност',
    company: 'СТО "Профессионал"',
    city: 'Нур-Султан',
    salary: {
      min: 250000,
      max: 350000,
      currency: 'KZT'
    },
    description: 'СТО "Профессионал" приглашает на работу опытного автомеханика-диагноста для работы с современными автомобилями.',
    requirements: [
      'Опыт работы от 3 лет',
      'Опыт работы с диагностическим оборудованием',
      'Знание электроники автомобилей',
      'Умение работать в команде'
    ],
    publishedDate: '2023-10-10',
    url: 'https://enbek.kz/vacancy/54321',
    source: 'enbek'
  },
  
  // Electrician vacancies
  {
    id: 'v3',
    professionId: 'electrician',
    title: 'Электрик',
    company: 'ТОО "ЭлектроМонтаж"',
    city: 'Алматы',
    salary: {
      min: 200000,
      max: 350000,
      currency: 'KZT'
    },
    description: 'Требуется электрик для монтажа и обслуживания электрических систем в жилых и коммерческих зданиях.',
    requirements: [
      'Опыт работы от 2 лет',
      'Знание правил электробезопасности',
      'Умение читать электрические схемы',
      'Навыки монтажа электропроводки'
    ],
    publishedDate: '2023-10-12',
    url: 'https://hh.kz/vacancy/67890',
    source: 'hh'
  },
  {
    id: 'v4',
    professionId: 'electrician',
    title: 'Электрик промышленного оборудования',
    company: 'Завод "ТехноПром"',
    city: 'Караганда',
    salary: {
      min: 280000,
      max: 400000,
      currency: 'KZT'
    },
    description: 'Завод "ТехноПром" приглашает на работу электрика для обслуживания и ремонта промышленного оборудования.',
    requirements: [
      'Опыт работы от 3 лет в промышленной сфере',
      'Знание промышленного электрооборудования',
      'Умение работать с ПЛК',
      'Готовность к работе в сменном графике'
    ],
    publishedDate: '2023-10-05',
    url: 'https://enbek.kz/vacancy/98765',
    source: 'enbek'
  },
  
  // Welder vacancies
  {
    id: 'v5',
    professionId: 'welder',
    title: 'Сварщик',
    company: 'ТОО "МеталлКонструкт"',
    city: 'Алматы',
    salary: {
      min: 250000,
      max: 400000,
      currency: 'KZT'
    },
    description: 'Требуется сварщик для изготовления металлоконструкций различной сложности.',
    requirements: [
      'Опыт работы от 2 лет',
      'Владение различными видами сварки (MIG, TIG, MMA)',
      'Умение читать чертежи',
      'Ответственность и внимательность'
    ],
    publishedDate: '2023-10-08',
    url: 'https://hh.kz/vacancy/13579',
    source: 'hh'
  },
  {
    id: 'v6',
    professionId: 'welder',
    title: 'Сварщик-аргонщик',
    company: 'Строительная компания "Мост"',
    city: 'Нур-Султан',
    salary: {
      min: 300000,
      max: 450000,
      currency: 'KZT'
    },
    description: 'Строительная компания "Мост" приглашает на работу опытного сварщика-аргонщика для работы на строительных объектах.',
    requirements: [
      'Опыт работы от 3 лет',
      'Опыт аргонодуговой сварки',
      'Умение работать с цветными металлами',
      'Готовность к командировкам'
    ],
    publishedDate: '2023-10-03',
    url: 'https://enbek.kz/vacancy/24680',
    source: 'enbek'
  },
  
  // Software developer vacancies
  {
    id: 'v7',
    professionId: 'software-developer',
    title: 'Разработчик программного обеспечения',
    company: 'IT-компания "ТехноКод"',
    city: 'Алматы',
    salary: {
      min: 400000,
      max: 800000,
      currency: 'KZT'
    },
    description: 'IT-компания "ТехноКод" ищет разработчика программного обеспечения для создания веб-приложений.',
    requirements: [
      'Опыт работы от 2 лет',
      'Знание JavaScript, React, Node.js',
      'Опыт работы с базами данных',
      'Понимание принципов разработки пользовательских интерфейсов'
    ],
    publishedDate: '2023-10-14',
    url: 'https://hh.kz/vacancy/11223',
    source: 'hh'
  },
  {
    id: 'v8',
    professionId: 'software-developer',
    title: 'Разработчик мобильных приложений',
    company: 'Стартап "МобильТех"',
    city: 'Нур-Султан',
    salary: {
      min: 450000,
      max: 900000,
      currency: 'KZT'
    },
    description: 'Стартап "МобильТех" ищет разработчика мобильных приложений для создания инновационного продукта.',
    requirements: [
      'Опыт разработки мобильных приложений от 2 лет',
      'Знание Swift или Kotlin',
      'Опыт работы с REST API',
      'Понимание принципов UX/UI дизайна'
    ],
    publishedDate: '2023-10-07',
    url: 'https://enbek.kz/vacancy/33445',
    source: 'enbek'
  },
  
  // Lab technician vacancies
  {
    id: 'v9',
    professionId: 'lab-technician',
    title: 'Лаборант химического анализа',
    company: 'ТОО "ХимЛаб"',
    city: 'Алматы',
    salary: {
      min: 150000,
      max: 250000,
      currency: 'KZT'
    },
    description: 'Требуется лаборант химического анализа для проведения исследований качества продукции.',
    requirements: [
      'Образование по специальности "Химия" или "Химическая технология"',
      'Опыт работы от 1 года',
      'Знание методов химического анализа',
      'Внимательность и аккуратность'
    ],
    publishedDate: '2023-10-10',
    url: 'https://hh.kz/vacancy/55667',
    source: 'hh'
  },
  {
    id: 'v10',
    professionId: 'lab-technician',
    title: 'Лаборант медицинской лаборатории',
    company: 'Медицинский центр "Здоровье"',
    city: 'Караганда',
    salary: {
      min: 180000,
      max: 280000,
      currency: 'KZT'
    },
    description: 'Медицинский центр "Здоровье" приглашает на работу лаборанта для проведения клинических анализов.',
    requirements: [
      'Медицинское образование',
      'Опыт работы от 1 года',
      'Знание методов клинической лабораторной диагностики',
      'Внимательность и ответственность'
    ],
    publishedDate: '2023-10-06',
    url: 'https://enbek.kz/vacancy/77889',
    source: 'enbek'
  }
];

export const getVacanciesByProfessionId = (professionId: string): Vacancy[] => {
  return vacancies.filter(vacancy => vacancy.professionId === professionId);
};

export const getVacanciesByCity = (city: string): Vacancy[] => {
  return vacancies.filter(vacancy => 
    vacancy.city.toLowerCase() === city.toLowerCase()
  );
};

export const getVacanciesByProfessionAndCity = (professionId: string, city: string): Vacancy[] => {
  return vacancies.filter(vacancy => 
    vacancy.professionId === professionId && 
    vacancy.city.toLowerCase() === city.toLowerCase()
  );
};

export default vacancies;