import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import Home from './views/Home.vue';
import Quizzes from './views/Quizzes.vue';
import Collections from './views/Collections.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'landing-page',
			component: LandingPage
		},
		{
			path: '/app',
			name: 'app',
			component: Home,
			children: [
				{
					path: 'home',
					name: 'home',
					component: Quizzes
				},
				{
					path: 'collections',
					name: 'collections',
					component: Collections
				},
				{
					path: 'search',
					name: 'search',
					component: Search
				}
			]
		}
	],
	mode: 'history'
});
