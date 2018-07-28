<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('loginLocal');
	}
};
</script>


<style lang="scss">
* {
	margin: 0;
	padding: 0px;
}

:root {
	--primary-color: #6ae2e2;
	--primary-color-dark: #49c5c5;
	--primary-text-color: rgba(0, 0, 0, 0.8);
	--secondary-text-color: rgba(0, 0, 0, 0.54);
}

body {
	font-family: 'Poppins', Arial, sans-serif;
	background: #eeeeee;
}

.container {
	width: 50%;
	margin: auto;
	padding-top: 24px;
}

.flex {
	display: flex;
	flex-wrap: wrap;
}

.flex-column {
	flex-direction: column;
}

.center-vertical {
	align-items: center;
}

.center-horizontal {
	justify-content: center;
}

.btn-primary {
	box-shadow: 0px 4px 4px 0px rgba(167, 167, 167, 0.25);
	height: 50px;
}

.btn {
	border: 0px solid transparent !important;
	text-transform: uppercase;
	font-family: 'Poppins';
	font-size: 13px !important;
	border-radius: 60px !important;
}

.bg-primary {
	background: var(--primary-color-dark) !important;

	&:hover {
		background: #54a0a0 !important;
	}
}

.el-dialog {
	width: 30% !important;
}

.el-input {
	margin-top: 4px !important;
}

.subtitle {
	font-size: 12px;
	margin-bottom: 4px;
	color: var(--secondary-text-color);
	text-transform: uppercase;
}

.shadow {
	box-shadow: 0px 4px 4px 0px rgba(167, 167, 167, 0.25);
}

.error {
	background: tomato;
	margin-top: 16px;
	border-radius: 10px;
	padding: 16px;
	> p {
		color: rgba(0, 0, 0, 0.8);
		font-size: 16px;
	}
	ul {
		list-style-type: none;
		li {
			color: rgba(0, 0, 0, 0.54);
		}
	}
}

.hidden {
	display: none;
}

.navbar {
	padding: 16px;
	background: white;
	justify-content: space-between;

	p:nth-last-child(1) {
		text-transform: uppercase;
		font-size: 13px;
		color: var(--secondary-text-color);
		cursor: pointer;

		&:hover {
			color: var(--primary-text-color);
		}
	}
}

@media only screen and (max-width: 567px) {
	.container {
		width: 95%;
	}

	.el-dialog {
		width: 90% !important;
	}

	.container {
		width: calc(100% - 32px);
	}
}
</style>
