import Vue from 'vue';

Vue.filter('decode', (data) => {
  if (!data) return '';
  return decodeURI(data);
});
