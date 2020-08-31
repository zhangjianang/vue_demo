import Vue from 'vue'
import Vuex from 'vuex'

import {
  addUser,
  fetchAll,
  delUser,
  selectMeasurePgNum,
  selectMeasure
} from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userList: [],
    measureList: [],
    pageSize: 10 ,
    pageNum: 1,
    totalNum: 0
  },
  getters: {
    getCount (state) {
      return state.count
    },
    totalPage (state) {
      let res = Math.ceil( state.totalNum /state.pageSize )
      return res
    }
  },
  mutations: {
    SET_PAGE_SIZE(state,val){
      state.pageSize = val
    },
    SET_PAGGE_NUM(state,val){
      state.pageNum = val
    },
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
    },
    SET_MPGNUM(state,val){
      state.totalNum = val
    }
  },
  actions: {
    async fetchAll ({commit}) {
      let userlist = await fetchAll()
      commit('SET_USERLIST', userlist)
    },
    async selectMPGnum({ commit }){
      let pgnum = await  selectMeasurePgNum()
      commit('SET_MPGNUM',pgnum.data)
    },
    async selectMeasure ({
      state:{ pageSize, pageNum },
      commit
    }) {
      let res = await selectMeasure({pageNum, pageSize} )
      commit('SET_MEASURELIST', res.data)
    }
  }
})
