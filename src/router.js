import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import Home from './views/Home.vue';
import Quizzes from './views/Quizzes.vue';
import Collections from './views/Collections.vue';
import Search from './views/Search.vue';
import CreateQuiz from './views/CreateQuiz.vue';
import QuizDetail from './views/QuizDetail.vue';
import PreviewQuiz from './views/PreviewQuiz.vue';
import PlayQuiz from './views/PlayQuiz.vue';
import QuizComplete from './views/QuizComplete.vue';

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
					path: 'quizzes/:id',
					name: 'quiz-detail',
					component: QuizDetail
				},
				{
					path: 'quizzes',
					name: 'quizzes',
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
				},
				{
					path: 'new/quiz',
					name: 'create-quiz',
					component: CreateQuiz
				}
			]
		},
		{
			path: '/play/:identifier',
			name: 'preview',
			component: PreviewQuiz
		},
		{
			path: '/quiz/play',
			name: 'play-quiz',
			component: PlayQuiz
		},
		{
			path: '/quiz/complete',
			name: 'quiz-complete',
			component: QuizComplete
		}
	],
	mode: 'history'
});
