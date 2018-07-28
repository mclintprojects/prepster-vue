<template>
    <div @click="showQuizDetails" id="quiz" class="flex center-vertical shadow">
        <div>
            <p>{{quiz.is_completed ? '' : '(Draft)'}} {{quiz.title}}</p>
            <p>{{quiz.questions_count}} questions added</p>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		quiz: { type: Object, default: () => {} }
	},
	methods: {
		showQuizDetails() {
			this.$router.push({
				name: 'quiz-detail',
				params: { quiz: this.quiz, id: this.quiz.id }
			});
		}
	}
};
</script>

<style lang="scss">
#quiz {
	background: white;
	padding: 16px;
	border-radius: 10px;
	justify-content: space-between;
	margin-bottom: 16px;

	&:hover {
		background: var(--primary-color);
		cursor: pointer;

		.bg-primary {
			background: white !important;
		}
	}

	> div {
		p:nth-child(1) {
			font-size: 18px;
			font-weight: bold;
			color: var(--primary-text-color);
		}

		p:nth-child(2) {
			font-size: 12px;
			color: var(--secondary-text-color);
		}
	}
}
</style>
