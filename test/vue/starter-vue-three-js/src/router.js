import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './containers/Home'
import NotFound from './containers/NotFound'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
});

router.map({
    '/': {
      name: 'home',
      component: Home
    },
    '*':{
      name: 'lost',
      component: NotFound
    }
})

router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})

router.afterEach(function (transition) {
  console.log('Successfully navigated to: ' + transition.to.path)
})

router.start(App, '#app')
