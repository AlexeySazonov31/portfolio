import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEnglish from "../public/locales/en/translation.json";
import translationRussian from "../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false
    },
  });

export default i18n;