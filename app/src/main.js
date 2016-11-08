import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

Vue.use(require('vue-resource'));
Vue.http.options.root = 'http://localhost:8000';


new Vue(Vue.util.extend({ router }, App)).$mount('#app')
