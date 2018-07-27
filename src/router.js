import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import Home from './views/Home.vue';
import Quizzes from './views/Quizzes.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'landing-page',
			component: LandingPage
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			children: [
				{
					path: '/',
					name: 'quizzes',
					component: Quizzes
				}
			]
		}
	],
	mode: 'history'
});
