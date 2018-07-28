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
	--primary-color: #b8eeee;
	--primary-color-dark: #6fcece;
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
	background: var(--primary-color) !important;

	&:hover {
		background: var(--primary-color-dark) !important;
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
