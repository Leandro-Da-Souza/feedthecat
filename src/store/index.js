import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeCount: 1
  },
  mutations: {
    SET_COUNT: (state, newCount) => {
      state.storeCount = newCount
    }
  },
  actions: {
  },
  modules: {
  }
})
