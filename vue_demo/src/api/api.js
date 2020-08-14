import axios from 'axios'

const origin = http://localhost:8099
const VUE_APP_BASE_API = `${origin}/user`


export function addUser(data) {
  return axios({
    url: '/add',
    method: 'post',
    data
  })
}

export function fetchAll() {
  return axios({
    url: '/all',
    method: 'post'
  })
}

export function delUser() {
  return axios({
    url: '/del',
    method: 'post'
  })
}