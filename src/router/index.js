import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Collection from '@/views/Collection';
import ProductDetail from '@/views/ProductDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/collections/:slug',
      name: 'Collection',
      component: Collection,
    },
    {
      path: '/products/:slug',
      name: 'ProductDetail',
      component: ProductDetail,
    },
  ],
});
