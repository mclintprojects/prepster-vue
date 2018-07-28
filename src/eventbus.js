import Vue from 'vue';

const eventbus = new Vue({
	data: {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
	},
	methods: {
		getDate(dateString = '') {
			const date = dateString.length == 0 ? new Date() : new Date(dateString);
			return `${
				this.months[date.getMonth()]
			} ${date.getDate()}, ${date.getFullYear()}`;
		}
	}
});

export default eventbus;
