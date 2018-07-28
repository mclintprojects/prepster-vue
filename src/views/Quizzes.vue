<template>
    <div>
        <p id="greeting">Welcome back, {{user.first_name}}!</p>
        <p>{{date}}</p>

        <p class="subtitle" style="margin-top: 40px">Your quizzes</p>
        <quiz v-for="(quiz, index) in quizzes" :key="index" :quiz="quizzes[index]" />
    </div>
</template>

<script>
import eventbus from '../eventbus';
import Quiz from '../components/list-items/Quiz';

export default {
	components: { Quiz },
	data() {
		return {
			date: ''
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		},
		quizzes() {
			return this.$store.getters.quizzes;
		}
	},
	created() {
		this.date = eventbus.getDate();
		this.$store.dispatch('getQuizzes');
	}
};
</script>

<style>
</style>
