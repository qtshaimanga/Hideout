import Vue from 'vue'
import App from './App'
// import Router from './router'
import { router } from './router'
import Store from './store'

Vue.use(require('vue-resource'));
Vue.http.options.root = 'http://localhost:8000';

console.log(router);

new Vue({
	router: router,
	components: {
		App
	}
})
