import Vue from 'vue'
import Vuex from 'vuex'

import {
  addUser,
  fetchAll,
  delUser
} from '@/api/api'
import {selectMeasure} from './api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userList: [],
    measureList: []
  },
  getters: {
    getCount (state) {
      return state.count
    }
  },
  mutations: {
    COUNT_INC (state) {
      state.count++
    },
    SET_USERLIST (state, val) {
      state.userList = val
    },
    ADD_USER (state, val) {
      addUser(val)
    },
    DEL_USER (state, val) {
      delUser(val)
    },
    SET_MEASURELIST (state, val) {
      state.measureList = val
    }
  },
  actions: {
    async fetchAll ({commit}) {
      let userlist = await fetchAll()
      commit('SET_USERLIST', userlist)
    },
    async selectMeasure ({commit}) {
      let res = await selectMeasure()
      commit('SET_MEASURELIST', res.data)
    }
  }
})