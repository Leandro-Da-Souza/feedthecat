import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeCount: 1,
    checklist: []
  },
  mutations: {
    SET_COUNT: (state, newCount) => {
      state.storeCount = newCount
    },
    SET_CHECKLIST: (state, data) => {
      state.checklist = data
    }
  },
  actions: { 
    getChecklist: async ({commit}) => {
      try {
        let res = await fetch('http://localhost:5000/api/check');
        let data = await res.json()
        commit('SET_CHECKLIST', data)
      } catch(err) {
        console.log(err)
      }
    },
    setCount: async ({commit}, val) => {
      try {
        await fetch(`http://localhost:5000/api/check/${val}`, {
          method: 'POST'
        })
        commit('SET_COUNT', val)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
