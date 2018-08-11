<template>
  <div>
    <div class="navbar flex center-vertical">
      <p>Prepster</p>
      <p @click="openLoginDialog">Login</p>
    </div>
    <div id="content" class="flex center-vertical center-horizontal">
      <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532669830/prepster/Group_14.svg" alt="logo" />
      <p>Welcome to <span>Prepster</span></p>
      <p>Search millions of quizzes or create and challenge your friends to your own. Attain mastery by studying with fun, competitive handmade quizzes.</p>
      <el-button id="btn-signup" class="btn btn-primary" round @click="showSignupDialog = true">Get started</el-button>
    </div>
    <el-dialog title="Login" :visible.sync="showLoginDialog" :before-close="handleClose">
      <label>Email address</label>
			<el-input v-model="loginData.email" placeholder="Enter your email" style="margin-bottom: 16px"/>

			<label>Password</label>
			<el-input type="password" v-model="loginData.password" placeholder="Enter your password" @keyup.enter.native="loginUser"/>

			<div v-if="errors.length > 0" class="error">
				<p>Errors</p>
				<ul>
					<li v-for="(error, index) in errors" :key="index">{{index+1}}. {{error}}</li>
				</ul>
			</div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" round class="btn" @click="loginUser" :loading="isLoading" :disabled="isLoading">Login</el-button>
      </span>
    </el-dialog>
		<el-dialog title="Signup" :visible.sync="showSignupDialog" :before-close="handleClose">
      <label>First name</label>
			<el-input v-model="signupData.first_name" placeholder="Enter your first name" style="margin-bottom: 16px"/>

			<label>Last name</label>
			<el-input v-model="signupData.last_name" placeholder="Enter your last name" style="margin-bottom: 16px"/>

			<label>Email address</label>
			<el-input v-model="signupData.email" placeholder="Enter your email" style="margin-bottom: 16px"/>

			<label>Password</label>
			<el-input type="password" @keyup.enter.native="signupUser" v-model="signupData.password" placeholder="Enter your password" />

			<div v-if="errors.length > 0" class="error">
				<p>Errors</p>
				<ul>
					<li v-for="(error, index) in errors" :key="index">{{index+1}}. {{error}}</li>
				</ul>
			</div>
      <span slot="footer" class="dialog-footer">
				<el-button type="primary" round class="btn" @click="signupUser" :loading="isLoading" :disabled="isLoading">Signup</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
	data() {
		return {
			showLoginDialog: false,
			showSignupDialog: false,
			loginData: {
				email: '',
				password: ''
			},
			signupData: {
				first_name: '',
				last_name: '',
				email: '',
				password: ''
			}
		};
	},
	computed: {
		isLoading() {
			return this.$store.getters.isLoading;
		},
		errors() {
			return this.$store.getters.authErrors;
		}
	},
	methods: {
		loginUser() {
			this.$store.dispatch('clearErrors');
			this.$store.dispatch('loginUser', this.loginData);
		},
		openLoginDialog() {
			if (!localStorage.getItem('auth')) this.showLoginDialog = true;
			else {
				this.$store.dispatch('loginLocal');
				this.$router.push({ name: 'quizzes' });
			}
		},
		signupUser() {
			this.$store.dispatch('signupUser', this.signupData);
			this.$router.push({ name: 'quizzes' });
		},
		handleClose(done) {
			this.loginData = {};
			this.signupData = {};
			this.$store.dispatch('clearErrors');
			done();
		}
	}
};
</script>

<style lang="scss">
#content {
	flex-direction: column;
	min-height: calc(100vh - 57px);
	text-align: center;
	background-color: #b8eeee;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='390' height='46.8' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
	background-size: auto auto;

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
				width: 40%;
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

