export interface EducationInstitution {
  id: string;
  name: string;
  nameKk: string;
  city: string;
  type: 'college' | 'university';
  programs: {
    id: string;
    nameRu: string;
    nameKk: string;
    duration: string;
    professionId: string;
    degree?: string;
  }[];
  website: string;
  address: string;
  phone: string;
  email: string;
}

export const educationInstitutions: EducationInstitution[] = [
  {
    id: 'almaty-tech-college',
    name: 'Алматинский технический колледж',
    nameKk: 'Алматы техникалық колледжі',
    city: 'Алматы',
    type: 'college',
    programs: [
      {
        id: 'software-dev',
        nameRu: 'Разработка программного обеспечения',
        nameKk: 'Бағдарламалық жасақтаманы әзірлеу',
        duration: '2 года 10 месяцев',
        professionId: 'software-developer'
      },
      {
        id: 'auto-mechanic',
        nameRu: 'Техническое обслуживание автомобилей',
        nameKk: 'Автомобильдерге техникалық қызмет көрсету',
        duration: '2 года 10 месяцев',
        professionId: 'auto-mechanic'
      }
    ],
    website: 'https://atc.edu.kz',
    address: 'г. Алматы, ул. Примерная, 123',
    phone: '+7 (727) 123-45-67',
    email: 'info@atc.edu.kz'
  },
  {
    id: 'kbtu',
    name: 'Казахстанско-Британский технический университет',
    nameKk: 'Қазақстан-Британ техникалық университеті',
    city: 'Алматы',
    type: 'university',
    programs: [
      {
        id: 'software-engineering',
        nameRu: 'Программная инженерия',
        nameKk: 'Бағдарламалық инженерия',
        duration: '4 года',
        professionId: 'software-developer',
        degree: 'Бакалавр'
      }
    ],
    website: 'https://kbtu.edu.kz',
    address: 'г. Алматы, ул. Толе би, 59',
    phone: '+7 (727) 272-65-52',
    email: 'info@kbtu.kz'
  }
];

export const getInstitutionsByCity = (city: string): EducationInstitution[] => {
  return educationInstitutions.filter(
    institution => institution.city.toLowerCase() === city.toLowerCase()
  );
};

export const getInstitutionsByProfession = (professionId: string): EducationInstitution[] => {
  return educationInstitutions.filter(institution =>
    institution.programs.some(program => program.professionId === professionId)
  );
};

export const getInstitutionsByProfessionAndCity = (
  professionId: string,
  city: string
): EducationInstitution[] => {
  return educationInstitutions.filter(
    institution =>
      institution.city.toLowerCase() === city.toLowerCase() &&
      institution.programs.some(program => program.professionId === professionId)
  );
};

export default educationInstitutions;