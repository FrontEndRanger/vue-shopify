import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    home: {
      title: 'Home',
      welcome: 'Welcome',
    },
  },
  fr: {
    home: {
      title: 'Acceuil',
      welcome: 'Bonjour',
    },
  },
};

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
  },
  'fr-CA': {
    currency: {
      style: 'currency',
      currency: 'CAD',
      currencyDisplay: 'symbol',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
  numberFormats,
});

export default i18n;
