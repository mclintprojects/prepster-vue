<template>
    <div >
        <div id="quiz-detail-title-bar" class="flex center-vertical">
            <div>
                <p>{{quiz.title}}</p>
                <p>Created by <span>{{quiz.creator}}</span> on <span>{{getDateString(quiz.created_at)}}</span></p>
            </div>
            <div class="flex center-vertical">
                <img style="margin-right: 16px" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532763943/prepster/twitter.svg" alt="twitter" />
                <img style="margin-right: 16px" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532763941/prepster/facebook.svg" alt="facebook"/>
                <el-button class="btn bg-primary">View leaderboard</el-button>
            </div>
        </div>

        <empty-state v-if="questions.length === 0" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532750735/prepster/twotone-assignment-24px.svg" title="Questions" subtitle="You haven't added a question to this quiz yet" />

        <div style="margin-top: 40px" v-if="questions.length > 0">
            <question v-for="(question, index) in questions" :key="index" :index="index" :question="question" />
        </div>
    </div>
</template>

<script>
import eventbus from '../eventbus';
import axios from 'axios';
import Question from '../components/list-items/Question';
import EmptyState from '../components/EmptyState';

export default {
	components: { Question, EmptyState },
	data() {
		return {
			quiz: {},
			questions: []
		};
	},
	methods: {
		getDateString(date) {
			return eventbus.getDate(date);
		},
		async getQuestions() {
			const response = await axios.get(`question?quiz_id=${this.quiz.id}`);
			if (response.status === 200) this.questions = response.data;
		}
	},
	created() {
		if (this.$route.params.quiz) this.quiz = this.$route.params.quiz;
		else {
			try {
			} catch (err) {}
		}

		this.getQuestions();
	}
};
</script>

<style lang="scss">
#quiz-detail-title-bar {
	justify-content: space-between;
	> div {
		p:nth-child(1) {
			font-size: 18px;
			font-weight: bold;
		}

		p:nth-child(2) {
			font-size: 11px;
			color: var(--secondary-text-color);

			span {
				color: var(--primary-text-color);
			}
		}
	}

	div:nth-child(2) {
		img {
			cursor: pointer;
		}
	}
}
</style>
