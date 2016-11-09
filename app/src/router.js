import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

import Home from './containers/Home'
import NotFound from './containers/NotFound'


const router = new VueRouter({
	history: false,
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '*',
			component: NotFound,
			name: 'lost'
		}
	]
});

export default router


// router.start(App, '#app')
