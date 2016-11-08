import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './containers/Home'
import NotFound from './containers/NotFound'

Vue.use(VueRouter)
var routes = new VueRouter({
	history: false,
	routes: [
		{
			path: '/',
			component: Home
			// name: 'home'
		},
		{
			path: '*',
			component: NotFound
			// name: 'lost'
		}
	]
});

routes.beforeEach(function (transition) {
	window.scrollTo(0, 0)
	// transition.next()
})

routes.afterEach(function (transition) {
	console.log('Successfully navigated to: ' + transition.to.path)
})

export const router = routes;


// router.start(App, '#app')
