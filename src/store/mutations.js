import app from '../main';

export default {
  LOAD_LINKLISTS(state, data) {
    state.linklists = data.linklists;
  },
  SET_COLLECTIONS(state, data) {
    state.collections = data;
  },
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
  SET_CART(state, data) {
    state.cart = data;
  },
  SET_LANG(state, lang) {
    app.$i18n.locale = lang;
  },
  SET_CURRENCY_RATES(state, data) {
    state.currency.rates = data;
  },
};
