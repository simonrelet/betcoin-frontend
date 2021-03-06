import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

export default () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
      fallbackLng: 'en',

      // Have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      debug: process.env.NODE_ENV !== 'production',

      interpolation: {
        // Not needed for react!!
        escapeValue: false,
      },
    });
};