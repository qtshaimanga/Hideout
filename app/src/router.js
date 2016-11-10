import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'
import NotFound from './containers/NotFound'
import About from './containers/About'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/about',
    component: About
   }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
