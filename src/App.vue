<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0px;
}

:root {
	--primary-color: #b8eeee;
	--primary-text-color: rgba(0, 0, 0, 0.8);
	--secondary-text-color: rgba(0, 0, 0, 0.54);
}

body {
	font-family: 'Poppins', Arial, sans-serif;
	background: #eeeeee;
}

.container {
	width: 30%;
	margin: auto;
}

.flex {
	display: flex;
}

.center-vertical {
	align-items: center;
}

.center-horizontal {
	justify-content: center;
}

.btn-primary {
	box-shadow: 0px 4px 4px 0px rgba(167, 167, 167, 0.25);
	border: 0px solid transparent !important;
	text-transform: uppercase;
	font-family: 'Poppins';
	font-size: 13px !important;
	height: 50px;
	border-radius: 60px !important;
}

.el-dialog {
	width: 30% !important;
}

.el-input {
	margin-top: 4px !important;
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
