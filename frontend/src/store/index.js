import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: null,
  },
  mutations: {
    setAuthenticator(state, result) {
      state.isLoggedIn = result;
    }
  },
  actions: {
    getAuthenticator({commit}){
      fetch('/api/auth/')
      .then(response => response.json())
      .then(result => {
        commit('setAuthenticator', result)
      })
    },
    logOut ({commit}, payload) {
      commit('setAuthenticator', payload)
      fetch('/api/logout/', {
        method: 'DELETE',
        })
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  }
})

export default store