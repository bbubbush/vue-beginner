import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList, 
  fetchUserInfo, 
  fetchContentInfo,
} from '../api/index.js';

export default {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
      .then(({ data }) => commit('SET_NEWS', data))
        .catch(err => console.log(err));
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => commit('SET_JOBS', data))
        .catch(err => console.log(err));
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => commit('SET_ASK', data))
        .catch(err => console.log(err));
    },
    FETCH_USER({ commit }, userId) {
      fetchUserInfo(userId)
        .then(({ data }) => commit('SET_USER', data))
        .catch(err => console.log(err));
    },
    FETCH_CONTENT({ commit }, contentId) {
      fetchContentInfo(contentId)
        .then(({ data }) => commit('SET_CONTENT', data))
        .catch(err => console.log(err));
    },
  }