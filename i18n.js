import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
  en: {
    greeting: 'Hello',
  },
  fr: {
    greeting: 'Bonjour',
  },
  // add other languages here
};

export default I18n;