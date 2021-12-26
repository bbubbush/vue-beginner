import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    getters: {
      fetchedNews(state) {
        return state.news;
      },
      fetchedAsk(state) {
        return state.ask;
      },
      fetchedJobs(state) {
        return state.jobs;
      },
    },
    mutations,
    actions,
  });

export default store;