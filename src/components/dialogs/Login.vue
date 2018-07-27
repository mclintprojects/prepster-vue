<template>
    <div>
        <label>Email address</label>
        <el-input v-model="formData.email" placeholder="Enter your email" style="margin-bottom: 16px"/>

        <label>Password</label>
        <el-input v-model="formData.password" placeholder="Enter your password" />
    </div>
</template>

<script>
export default {
	props: {
		show: Boolean
	},
	data() {
		return {
			formData: {
				email: '',
				password: ''
			}
		};
	},
	watch: {
		show() {
			if (!this.show) this.formData = {};
		}
	}
};
</script>
