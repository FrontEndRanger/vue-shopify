export default {
  LOAD_LINKLISTS(state, data) {
    state.linklists = data.linklists;
  },
  SET_COLLECTIONS(state, data) {
    state.collections = data;
  },
  LOAD_PRODUCT(state, data) {
    state.product = data;
  },
};
