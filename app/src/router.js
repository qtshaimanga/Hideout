import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name : 'home',
    component: Home
  },
  {
    path: '*',
    name: 'notFound',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
