import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(State){
      return state.count
    }
  },
  mutations: {
    COUNT_INC(state){
      state.count++
    }
  },
  actions: {

  }
})
