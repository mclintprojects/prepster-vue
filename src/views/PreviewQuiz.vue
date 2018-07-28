<template>
    <div id="preview" style="height: 100vh; flex-direction: column;" class="flex center-vertical center-horizontal">
        <div id="time" class="flex center-vertical center-horizontal">
            <p>{{quiz.duration}}</p>
            <p>MINS</p>
        </div>
        <div id="quiz-details" style="margin-top: 40px; text-align: center;">
            <p>{{quiz.title}}</p>
            <p>Created by <span>{{quiz.creator}}</span> on <span>{{getDateString(quiz.created_at)}}</span></p>
        </div>
        <div id="player-name">
            <el-input v-model="player" placeholder="Enter your name" />
            <p>*Name will be used on leaderboard. Required so your friends can find you on the leaderboard.</p>
        </div>
        <div style="margin-top: 40px">
            <el-button class="btn btn-primary">View leaderboard</el-button>
            <el-button @click="startGameSession" style="min-width: 150px; margin-left: 24px;" class="btn btn-primary bg-primary" :loading="isStartingSession" :disabled="isStartingSession || player.length === 0">Start</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import eventbus from '../eventbus';

export default {
	data() {
		return {
			quiz: {},
			isStartingSession: false,
			player: ''
		};
	},
	methods: {
		getDateString(date) {
			return eventbus.getDate(date);
		},
		async startGameSession() {
			this.isStartingSession = true;
			const response = await axios.post('quiz_session', {
				player: this.player,
				quiz_id: this.quiz.id
			});
			if (response.status == 201) {
				this.$router.push({
					name: 'play-quiz',
					params: {
						session_id: response.data.session.id,
						questions: response.data.questions,
						quiz: response.data.quiz
					}
				});
			}
		}
	},
	async created() {
		const id = this.$route.params.identifier;
		const response = await axios.get(`quiz/identify?identifier=${id}`);
		this.quiz = response.data;
	}
};
</script>

<style lang="scss">
#preview {
	background-color: #b8eeee;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='390' height='46.8' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
	background-size: auto auto;
}

#time {
	flex-direction: column;
	background: var(--primary-color);
	border: 4px solid var(--primary-color-dark);
	width: 96px;
	height: 96px;
	border-radius: 50%;

	p:nth-child(1) {
		font-size: 45px;
		font-weight: bold;
	}

	p:nth-child(2) {
		font-size: 12px;
		color: var(--secondary-text-color);
	}
}

#quiz-details {
	p:nth-child(1) {
		font-weight: bold;
		font-size: 22px;
		color: var(--primary-text-color);
	}

	p:nth-child(2) {
		font-size: 12px;
		color: var(--secondary-text-color);

		span {
			font-weight: bold;
			color: var(--primary-text-color);
		}
	}
}

#player-name {
	margin-top: 24px;
	p {
		font-size: 12px;
		margin-top: 16px;

		color: var(--secondary-text-color);
	}
}
</style>
