import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SubRute from '../components/SubRute.vue'
import SubRute2 from '../components/SubRute2.vue'
import Sub2Sub1 from '../components/Sub2Sub1.vue'
import Sub2Sub2 from '../components/Sub2Sub2.vue'
import MenuOverload from '../components/MenuOverload.vue'
import Table from '../components/Table.vue'
import Edittable from '../components/edit-table.vue'
// import Edittable from '../components/edit-demo.vue'
import DynamicInput from '../components/dynamic-input.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)
Vue.use(ElementUI)

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
    },
    {
      path: '/menuoverload',
      name: 'MenuOverload',
      component: MenuOverload
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/edittable',
      name: 'Edittable',
      component: Edittable
    },
    {
      path: '/dynamicinput',
      name: 'Dynamicinput',
      component: DynamicInput
    }
  ]
})
