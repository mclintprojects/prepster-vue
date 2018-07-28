import axios from 'axios';
import router from '../../router';

const state = {
	user: {},
	userIsLoggedIn: false,
	token: '',
	isLoading: false,
	authErrors: []
};

const getters = {
	user: state => state.user,
	userIsLoggedIn: state => state.userIsLoggedIn,
	token: state => state.token,
	authErrors: state => state.authErrors,
	isLoading: state => state.isLoading
};

const mutations = {
	loginUser: (state, data) => {
		state.user = data.user;
		state.token = data.token;
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
	},
	setAuthErrors: (state, errors) => (state.authErrors = errors),
	setLoading: (state, isLoading) => (state.isLoading = isLoading),
	clearErrors: state => (state.authErrors = [])
};

const actions = {
	async loginUser({ commit }, formData) {
		const json = localStorage.getItem('auth');
		if (json) commit('loginUser', JSON.parse(json));
		else {
			try {
				commit('setLoading', true);
				const response = await axios.post('auth/login', formData);
				if (response.status === 200) {
					commit('loginUser', response.data);
					commit('setLoading', false);
					router.push('/app');
					localStorage.setItem('auth', JSON.stringify(response.data));
				}
			} catch (err) {
				console.log({ err: err.response.data });
				commit('setAuthErrors', err.response.data.errors);
				commit('setLoading', false);
			}
		}
	},
	setLoading: ({ commit }, isLoading) => commit('setLoading', isLoading),
	clearErrors: ({ commit }) => commit('clearErrors')
};

export default {
	state,
	getters,
	mutations,
	actions
};
