import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'
import About from './containers/About'
import NotFound from './containers/NotFound'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name : 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
