export default {
  linklists(state) {
    return state.linklists;
  },
  collections(state) {
    return state.collections;
  },
  getCollection(state) {
    return slug => state.collections.find(collection => collection.handle === slug);
  },
  product(state) {
    return state.product;
  },
};
