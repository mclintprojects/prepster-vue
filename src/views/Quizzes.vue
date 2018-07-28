<template>
    <div>
        <p id="greeting">Welcome back, {{user.first_name}}!</p>
        <p>{{date}}</p>

		<div id="create-container" class="flex">
        	<p class="subtitle" style="margin-top: 40px">Your quizzes</p>
			<el-button class="btn bg-primary">Create quiz</el-button>
		</div>
		<empty-state v-if="quizzes.length == 0" src="https://image.flaticon.com/icons/svg/984/984199.svg" title="Quizzes" subtitle="You haven't created any quizzes yet" />
        <quiz v-for="(quiz, index) in quizzes" :key="index" :quiz="quizzes[index]" />
    </div>
</template>

<script>
import eventbus from '../eventbus';
import Quiz from '../components/list-items/Quiz';
import EmptyState from '../components/EmptyState';

export default {
	components: { Quiz, EmptyState },
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

<style lang="scss">
#create-container {
	justify-content: space-between;
	align-items: baseline;
	width: 100%;
}
</style>
