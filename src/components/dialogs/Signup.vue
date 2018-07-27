<template>
    <div>
        <label>First name</label>
        <el-input v-model="formData.first_name" placeholder="Enter your email" style="margin-bottom: 16px"/>

        <label>Last name</label>
        <el-input v-model="formData.last_name" placeholder="Enter your email" style="margin-bottom: 16px"/>

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
				password: '',
				first_name: '',
				last_name: ''
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
