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
		router.push({ name: 'quizzes' });
		localStorage.setItem('auth', JSON.stringify(data));
	},
	logout: state => {
		localStorage.removeItem('auth');
		state.user = {};
		state.userIsLoggedIn = false;
		state.token = '';
		router.push('/');
	},
	setAuthErrors: (state, errors) => (state.authErrors = errors),
	setLoading: (state, isLoading) => (state.isLoading = isLoading),
	clearErrors: state => (state.authErrors = [])
};

const actions = {
	async loginUser({ commit }, formData) {
		try {
			commit('setLoading', true);
			const response = await axios.post('auth/login', formData);
			if (response.status === 200) {
				commit('loginUser', response.data);
				commit('setLoading', false);
			}
		} catch (err) {
			commit('setAuthErrors', err.response.data.errors);
			commit('setLoading', false);
		}
	},
	loginLocal({ commit }) {
		const json = localStorage.getItem('auth');
		if (json) commit('loginUser', JSON.parse(json));
	},
	async signupUser({ commit }, formData) {
		try {
			commit('setLoading', true);
			const response = await axios.post('auth/signup', formData);
			if (response.status === 201) {
				commit('loginUser', response.data);
				commit('setLoading', false);
			}
		} catch (err) {
			commit('setAuthErrors', err.response.data.errors);
			commit('setLoading', false);
		}
	},
	logout: ({ commit }) => commit('logout'),
	setLoading: ({ commit }, isLoading) => commit('setLoading', isLoading),
	clearErrors: ({ commit }) => commit('clearErrors')
};

export default {
	state,
	getters,
	mutations,
	actions
};
