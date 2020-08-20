import axios from 'axios'

const origin = 'http://127.0.0.1:8099'
const VUE_APP_BASE_API = `${origin}/user`

export function addUser (data) {
  return axios({
    url: VUE_APP_BASE_API + '/add',
    method: 'post',
    data
  })
}

export function fetchAll () {
  return axios({
    url: VUE_APP_BASE_API + '/all',
    method: 'post'
  })
}

export function delUser (data) {
  return axios({
    url: VUE_APP_BASE_API + '/del',
    method: 'post',
    data
  })
}

export function selectMeasure () {
  return axios({
    url: VUE_APP_BASE_API + '/measure',
    method: 'post'
  })
}
