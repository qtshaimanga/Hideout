import Vue from 'vue'
import App from './App'

import { router } from './router'

import Store from './store'

Vue.use(require('vue-resource'));

Vue.http.options.root = 'http://localhost:8000';

// Vue.http.options.credentials = true;
// Vue.http.headers.common['Content-Type'] = "application/json";
// Vue.http.headers.common['Access-Control-Request-Method'] = 'GET, POST, PUT, DELETE, OPTIONS';
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Authorization';
// Vue.http.headers.common['Authorization'] = 'Basic YWRtaW46YWRtaW4=';

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
