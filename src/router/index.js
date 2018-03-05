import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Collection from '@/views/Collection';
import ProductDetail from '@/views/ProductDetail';
import Cart from '@/views/Cart';

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
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
