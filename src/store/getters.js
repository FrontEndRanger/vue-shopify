export default {
  linklists(state) {
    return state.linklists;
  },
  getCollections(state) {
    return state.collections;
  },
  getCollection(state) {
    return slug => state.collections.find(collection => collection.handle === slug);
  },
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return slug => state.products.find(product => product.handle === slug);
  },
  getCollectionProducts(state) {
    return collection => state.products.filter(product => product.collections.includes(collection));
  },
};
