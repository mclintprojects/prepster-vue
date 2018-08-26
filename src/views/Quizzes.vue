<template>
    <div>
        <p id="greeting">Welcome back, {{user.first_name}}!</p>
        <p>{{date}}</p>

		<div id="create-container" class="flex">
        	<p class="subtitle" style="margin-top: 40px">Your quizzes</p>
			<el-button class="btn bg-primary" @click="createQuiz" round>Create quiz</el-button>
		</div>
		<empty-state v-if="quizzes.length == 0" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532750735/prepster/twotone-assignment-24px.svg" title="Quizzes" subtitle="You haven't created any quizzes yet" />
        <quiz v-for="(quiz, index) in quizzes" :key="index" :quiz="quizzes[index]" :index="index" :onQuizDeleted="onQuizDeleted"/>
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
    methods: {
        createQuiz() {
            this.$router.push({ name: 'create-quiz' });
        },
        onQuizDeleted(index) {
            this.$store.dispatch('deleteQuiz', index);
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
    margin-bottom: 16px;
}
</style>
