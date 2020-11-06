import axios from 'axios'

const origin = 'http://127.0.0.1:8099'
const VUE_APP_BASE_USER = `${origin}/user`
const VUE_APP_BASE_FILTER = `${origin}/filter`

export function addUser (data) {
  return axios({
    url: VUE_APP_BASE_USER + '/add',
    method: 'post',
    data
  })
}

export function fetchAll () {
  return axios({
    url: VUE_APP_BASE_USER + '/all',
    method: 'post'
  })
}

export function delUser (data) {
  return axios({
    url: VUE_APP_BASE_USER + '/del',
    method: 'post',
    data
  })
}

export function selectMeasure (data) {
  return axios({
    url: VUE_APP_BASE_USER + '/measure',
    method: 'post',
    data
  })
}

export function selectMeasurePgNum () {
  return axios({
    url: VUE_APP_BASE_USER + '/measurePageNum',
    method: 'post'
  })
}


export function selectAllCommonFilter () {
  return axios({
    url:VUE_APP_BASE_FILTER+"/selectAllCommonFilter",
    method:'post'
  })
}

export function setCommonFilter (data) {
  return axios({
    url:VUE_APP_BASE_FILTER+"/setCommonFilter",
    method:'post',
    data
  })
}

