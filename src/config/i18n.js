import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import vi from '../../public/locales/vi';
import en from '../../public/locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    defaultNS: 'common',
    resources: {
      vi: vi,
      en: en,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
