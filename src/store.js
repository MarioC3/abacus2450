import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    abacusCount: 0
  },
  mutations: {
    UPDATE_ABACUS_COUNT(state, value) {
      state.abacusCount = value
    },
    RESET_ABACUS_COUNT(state) {
      state.abacusCount = 0
    }
  },
  actions: {
    updateCount({ commit }, value) {
      commit('UPDATE_ABACUS_COUNT', value)
    },
    restartAbacusCount({ commit }) {
      commit('RESET_ABACUS_COUNT')
    }
  },
  getters: {
    abacusCount: state => {
      return state.abacusCount
    }
  }
})
