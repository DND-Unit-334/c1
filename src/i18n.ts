import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru.json';
import kkTranslation from './locales/kk.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: ruTranslation
      },
      kk: {
        translation: kkTranslation
      }
    },
    lng: 'ru', // Default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;