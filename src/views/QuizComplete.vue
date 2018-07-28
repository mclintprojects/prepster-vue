<template>
    <div>
        <div class="navbar flex center-vertical">
            <p>Prepster</p>
        </div>
        <div class="container" style="text-align: center;">
            <p style="font-size: 22px; font-weight: bold;">Congrats, {{game.player}}!</p>
            <p style="font-size: 14px; color: var(--secondary-text-color)">Quiz completed. You scored <span>{{game.score}}</span></p>

            <p style="font-size: 22px; margin-top: 40px; text-transform: uppercase;">Leaderboard</p>
            <div style="margin-top: 24px; width: 100%" class="flex center-horizontal">
                <div v-if="game.leaderboard.length == 2">
                    <div id="no2" class="top3">
						<p>{{game.leaderboard[1].player[0]}}</p>
					</div>
                    <p>{{game.leaderboard[1].player[0]}}<br/>{{game.leaderboard[1].score}}</p>
                </div>
                <div>
					<div id="no1" class="top3">
                    	<p>{{game.leaderboard[0].player[0]}}</p>
					</div>
                    <p>{{game.leaderboard[0].player}} <br/> {{game.leaderboard[0].score}}</p>
                </div>
                <divv-if="game.leaderboard.length == 3">
					<div id="no3" class="top3">
						<p>{{game.leaderboard[2].player[0]}}</p>
					</div>

                    <p>
						{{game.leaderboard[2].player}}<br/>{{game.leaderboard[2].score}}
					</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			game: {}
		};
	},
	created() {
		this.game = this.$route.params.game;
	}
};
</script>

<style lang="scss">
.top3 {
	background: var(--primary-color);
	border-radius: 50%;
	border: 10px solid var(--primary-color-dark);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p:nth-child(1) {
		font-size: 80px;
		font-weight: bold;
		margin-bottom: 8px;
		color: var(--secondary-text-color);
	}

	+ p {
		margin-top: 16px;
		font-size: 22px;
		color: var(--primary-text-color);
	}
}

#no1 {
	width: 156px;
	height: 156px;
	margin-right: 16px;
	margin-left: 16px;
}

#no2 {
	width: 132px;
	height: 132px;
}

#no3 {
	width: 110px;
	height: 110px;
}
</style>
