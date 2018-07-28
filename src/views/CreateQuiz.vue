<template>
    <div>
        <div :class="{hidden: pageId != 1}">
            <p class="page-title">Create a new prep quiz</p>

            <div style="margin-top: 40px">
                <p class="subtitle">Quiz title</p>
                <el-input v-model="formData.title" type="text" />
            </div>

            <el-row style="margin-top: 16px">
                <el-col :span="24">
                    <p class="subtitle">Duration (minutes)</p>
                    <el-input v-model.number="formData.duration" type="text" />
                </el-col>
            </el-row>

            <el-row>
                <el-button @click="createQuiz" style="margin-top: 16px; float: right;" class="btn btn-primary" round :loading="isCreatingQuiz" :disabled="isCreatingQuiz">Create</el-button>
            </el-row>
        </div>


        <div :class="{hidden: pageId != 2}">
            <p class="page-title">Add questions to your quiz</p>
            <empty-state v-if="questions.length === 0" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532750735/prepster/twotone-assignment-24px.svg" title="Questions" subtitle="You haven't added any question to this quiz yet" />
            <div v-if="questions.length > 0" style="margin-top: 40px;">
                <question v-for="(question, index) in questions" :key="index" :index="index" :question="question" />
            </div>
            <el-row>
                <div style="margin-top: 40px; float: right;">
                    <el-button class="btn btn-primary bg-primary" round @click="pageId = 3">Add new question</el-button>
                    <el-button class="btn btn-primary" round @click="finalizeQuiz" :loading="isFinalizingQuiz" :disabled="isFinalizingQuiz">Finish</el-button>
                </div>
            </el-row>
        </div>


        <div :class="{hidden: pageId != 3}">
            <p class="page-title">Add questions to your quiz</p>
            <p class="subtitle" style="margin-top: 40px">Question 1</p>
            <el-input type="text" v-model="question.text" placeholder="Enter your question here"/>
            <p class="subtitle" style="margin-top: 16px">Input the possible answers and click to select the correct answer</p>
            <answers :answers="question.answers" :onItemSelected="onAnswerSelected"/>
            <el-col>
				<el-button style="margin-top: 24px; margin-bottom: 24px;" class="btn btn-primary" @click="pageId = 2">Cancel</el-button>
                <el-button style="float: right; margin-top: 24px; margin-bottom: 24px;" class="btn btn-primary bg-primary" @click="createQuestion" :loading="isCreatingQuestion" :disabled="isCreatingQuestion">Add question</el-button>
            </el-col>
        </div>


		<div :class="{hidden: pageId != 4}">
            <p class="page-title">Share your quiz</p>
            <p class="subtitle" style="margin-top: 40px">Let's share your quiz with your friends</p>
			<el-input type="text" v-model="quizUrl" />
			<div id="social-container" style="margin-top: 40px; width: 100%" class="flex center-horizontal">
				<a target="_blank" :href="twitterUrl"><img style="margin-right: 16px" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532763943/prepster/twitter.svg" /></a>
				<a target="_blank" :href="facebookUrl"><img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532763941/prepster/facebook.svg" /></a>
			</div>
			<el-row>
				<el-button style="float: right" class="btn btn-primary bg-primary" @click="navigateAway">Close</el-button>
			</el-row>
		</div>
    </div>
</template>

<script>
import axios from 'axios';
import EmptyState from '../components/EmptyState';
import Answers from '../components/Answers';
import Question from '../components/list-items/Question';

export default {
	components: { EmptyState, Answers, Question },
	data() {
		return {
			pageId: 1,
			isCreatingQuiz: false,
			isCreatingQuestion: false,
			isFinalizingQuiz: false,
			quizUrl: '',
			quiz: {},
			formData: {
				is_public: true,
				duration: 5,
				title: ''
			},
			questions: [],
			question: {
				text: '',
				answers: [{}, {}]
			}
		};
	},
	computed: {
		facebookUrl() {
			return `https://www.facebook.com/sharer/sharer.php?u=${this.quizUrl}`;
		},
		twitterUrl() {
			return `https://twitter.com/home?status=${this.quizUrl}`;
		}
	},
	methods: {
		async createQuiz() {
			try {
				this.isCreatingQuiz = true;
				const response = await axios.post('quiz', this.formData);
				if (response.status === 201) {
					this.isCreatingQuiz = false;
					this.pageId = 2;
					this.quiz = response.data;
				}
			} catch (err) {
				console.log({ err });
				this.isCreatingQuiz = false;
				this.$message.error(err.response.data.errors[0]);
			}
		},
		finishQuestions() {},
		onAnswerSelected(index) {
			this.question.answer = index;
		},
		async createQuestion() {
			try {
				this.isCreatingQuestion = true;
				this.question.quiz_id = this.quiz.id;
				const response = await axios.post('question', this.question);
				if (response.status === 201) {
					this.question = {
						text: '',
						answers: [{}, {}]
					};

					this.questions.push(response.data);
					this.pageId = 2;
					this.isCreatingQuestion = false;
				}
			} catch (err) {
				this.$message.error(err.response.data.errors[0]);
				this.isCreatingQuestion = false;
			}
		},
		async finalizeQuiz() {
			try {
				this.isFinalizingQuiz = true;
				const response = await axios.post(
					`quiz/finalize?quiz_id=${this.quiz.id}`
				);
				if (response.status === 200) {
					this.pageId = 4;
					this.quizUrl = `https://prepster.netlify.com/play/${
						response.data.quiz_url
					}`;
					this.isFinalizingQuiz = false;
				}
			} catch (err) {
				this.$message.error(err.response.data.errors[0]);
				this.isFinalizingQuiz = false;
			}
		},
		navigateAway() {
			this.$router.go(-1);
		}
	}
};
</script>

<style lang="scss">
.page-title {
	font-weight: bold;
	color: var(--primary-text-color);
	font-size: 18px;
}

#social-container {
	img {
		transition: all 1s;
		&:hover {
			cursor: pointer;
			transform: scale(1.1);
		}
	}
}
</style>

