import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './containers/Home'
import NotFound from './containers/NotFound'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound
   }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
