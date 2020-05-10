import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SubRute from '../components/SubRute.vue'
import SubRute2 from '../components/SubRute2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/rute'
    },
    {
      path: '/rute',
      name: 'SubRute',
      component: SubRute
    },
    {
      path: '/rute2',
      name: 'SubRute2',
      component: SubRute2
    }
  ]
})
