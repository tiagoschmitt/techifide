import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseUrl: 'http://localhost:8080/api/',
        tasks: [],
        newTask: {}
    },
    mutations: {
        updateTasks(state, data) {
            state.tasks = data;
        },
        addTask(state, data) {
            state.tasks.push(data);
        }
    },
    actions: {
        loadTasks({ commit, state }) {
            axios.get(state.baseUrl + 'task/').then(response => {
                commit('updateTasks', response.data);
            });
        },
        addTask({ state }, task) {
            state.tasks.push(task);
        },
        removeTask({ state }, task) {
            Vue.delete(state.tasks, state.tasks.indexOf(task));
        }
    },
    getters: {
        tasks: (state) => {
            return state.tasks;
        }
    }
})
