<template>
  <div>
    <navbar>
      <p @click="showLoginDialog = true">Login</p>
    </navbar>
    <div id="content" class="flex center-vertical center-horizontal">
      <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532669830/prepster/Group_14.svg" alt="logo" />
      <p>Welcome to <span>Prepster</span></p>
      <p>Search millions of quizzes or create and challenge your friends to your own. Attain mastery by studying with fun, competitive handmade quizzes.</p>
      <el-button id="btn-signup" class="btn-primary" round @click="showSignupDialog = true">Get started</el-button>
    </div>
    <el-dialog title="Login" :visible.sync="showLoginDialog">
      <login-dialog :show="showLoginDialog" />
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" round>Login</el-button>
      </span>
    </el-dialog>
		<el-dialog title="Signup" :visible.sync="showSignupDialog">
      <signup-dialog :show="showSignupDialog" />
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" round>Signup</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import LoginDialog from '../components/dialogs/Login';
import SignupDialog from '../components/dialogs/Signup';

export default {
	components: { Navbar, LoginDialog, SignupDialog },
	data() {
		return {
			showLoginDialog: false,
			showSignupDialog: false
		};
	},
	methods: {}
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

	#btn-signup {
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

