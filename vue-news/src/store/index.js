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
        userInfo: {},
        contentInfo: {},
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
      fetchedUserInfo(state) {
        return state.userInfo;
      },
      fetchedContentInfo(state) {
        return state.contentInfo;
      },
    },
    mutations,
    actions,
  });

export default store;