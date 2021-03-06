import axios from 'axios';

const state = {
    quizzes: []
};

const getters = {
    quizzes: state => state.quizzes
};

const mutations = {
    setQuizzes: (state, quizzes) => (state.quizzes = quizzes),
    deleteQuiz: (state, index) => state.quizzes.splice(index, 1)
};

const actions = {
    async getQuizzes({ commit }) {
        try {
            commit('setLoading', true);
            const response = await axios.get('quiz');
            if (response.status === 200) {
                commit('setLoading', false);
                commit('setQuizzes', response.data);
            }
        } catch (err) {
            console.log({ err });
            commit('setLoading', false);
        }
    },
    async deleteQuiz({ commit }, index) {
        commit('deleteQuiz', index);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
