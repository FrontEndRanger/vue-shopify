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
};
