<template>
  <div class="app-container">
    <navbar />
    <div id="content" class="flex center-vertical center-horizontal">
      <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532669830/prepster/Group_14.svg" alt="logo" />
      <p>Welcome to <span>Prepster</span></p>
      <p>Challenge your friends with your handmade prep quizzes. Study by competing for the spot at the top of the leaderboard.</p>
      <el-button class="btn-primary" round>Get started</el-button>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
	components: { Navbar }
};
</script>

<style lang="scss">
#content {
	flex-direction: column;
	min-height: calc(100vh - 55px);
	text-align: center;
	background: var(--primary-color);

	img {
		+ p {
			margin-top: 16px;
			font-size: 50px;
			color: var(--secondary-text-color);
			font-weight: bold;

			span {
				color: var(--primary-text-color);
			}

			+ p {
				color: var(--secondary-text-color);
				font-size: 16px;
				width: 30%;
			}
		}
	}

	.el-button {
		margin-top: 40px;
	}
}

@media screen and (max-width: 567px) {
	#content {
		img {
			+ p {
				font-size: 25px;
				+ p {
					width: 80%;
					font-size: 13px;
				}
			}
		}
	}
}
</style>

