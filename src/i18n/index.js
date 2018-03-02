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

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
