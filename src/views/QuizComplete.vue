<template>
    <div>
        <div class="navbar flex center-vertical">
            <p>Prepster</p>
        </div>
        <div class="container" style="text-align: center;">
            <p style="font-size: 22px; font-weight: bold;">Congrats, {{game.player}}!</p>
            <p style="font-size: 14px; color: var(--secondary-text-color)">Quiz completed. You scored <span>{{game.score}}</span></p>

            <p style="font-size: 22px; margin-top: 40px; text-transform: uppercase;">Leaderboard</p>
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

<style>
</style>
