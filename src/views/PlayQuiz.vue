<template>
    <div>
        <div class="navbar flex center-vertical">
            <p>Prepster</p>
        </div>
        <div class="container">
            <p style="font-size: 18px; color: var(--secondary-text-color)">{{quiz.title}}</p>
            <p id="timer">{{time}}</p>
            <div style="margin-top: 40px" class="flex center-vertical">
                <div class="flex center-vertical center-horizontal">
                    <p style="font-size: 20px; color: var(--secondary-text-color); font-weight: bold;">{{position}}</p>
                </div>
                <p style="font-size: 22px; font-weight: bold; margin-left: 24px;">{{question.text}}</p>
            </div>
            <div style="margin-top: 40px">
                <choices :question="question" :onChoiceMade="choiceMade" />
            </div>
        </div>
    </div>
</template>

<script>
import Choices from '../components/Choices';
import axios from 'axios';

export default {
	components: { Choices },
	data() {
		return {
			questions: [],
			quiz: {},
			session_id: 0,
			time: '00:00',
			position: 1,
			index: 0,
			question: {},
			secs: 0,
			timer: null,
			choices: []
		};
	},
	methods: {
		setup() {},
		choiceMade(questionId, answerId) {
			if (this.choices.length < this.question.answers.length - 1) {
				this.choices.push({ question_id: questionId, answer_id: answerId });
				++this.index;
				++this.position;
				this.question = this.questions[this.index];
			} else this.markQuiz();
		},
		updateTimer() {
			this.secs = this.secs - 1;
			const mins = Math.floor(this.secs / 60);
			this.time = `0${mins}:${this.secs - mins * 60}`;

			if (this.secs <= 0) {
				clearInterval(this.timer);
				this.markQuiz();
			}
		},
		async markQuiz() {
			clearInterval(this.timer);
			const response = await axios.post('quiz_session/mark', {
				session_id: this.session_id,
				quiz_id: this.quiz.id,
				choices: this.choices
			});

			if (response.status === 200) {
				this.$router.push({
					name: 'quiz-complete',
					params: { game: response.data }
				});
			}
		}
	},
	created() {
		this.questions = this.$route.params.questions;
		this.session_id = this.$route.params.session_id;
		this.quiz = this.$route.params.quiz;

		this.question = this.questions[0];
		this.secs = this.quiz.duration * 60;
		this.timer = setInterval(
			function() {
				this.updateTimer();
			}.bind(this),
			1000
		);
	}
};
</script>

<style>
#timer {
	font-size: 40px;
	font-weight: bold;
	color: var(--primary-text-color);
}

#timer + div > div {
	background: var(--primary-color);
	width: 56px;
	height: 56px;
	border-radius: 50%;
}
</style>
