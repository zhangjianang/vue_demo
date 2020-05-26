import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SubRute from '../components/SubRute.vue'
import SubRute2 from '../components/SubRute2.vue'
import Sub2Sub1 from '../components/Sub2Sub1.vue'
import Sub2Sub2 from '../components/Sub2Sub2.vue'
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
      component: SubRute2,
      children:[
        {
          path: '/sub2/sub1',
          name: 'Sub2Sub1',
          component: Sub2Sub1,
        },
        {
          path: '/sub2/sub2',
          name: 'Sub2Sub2',
          component: Sub2Sub2,
        }
      ]
    }
  ]
})
