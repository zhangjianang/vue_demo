<template>
  <div id="app">

    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-bind:add='madd'></Menu> -->
    <!-- 这是监听事件方式 -->
    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-on:add='madd'></Menu> -->
    <!-- 采用注册传递父子,没有事件了-->
    <Menu v-bind:items='mitems' v-bind:website='website' ></Menu>
    <Foot>这里是{{footinfo}}</Foot>
    <br />
    <ul>
      <li><router-link to="/rute">首页显示子菜单</router-link></li>
      <li><router-link to="/rute2">首页显示子菜单2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  import Menu from './components/Menu'
  import Foot from './components/Foot'
  export default {
    name: 'App',
    data () {
      return {
       mitems:[
        {id:1,name:'lili'},
        {id:2,name:'小王'},
        {id:3,name:'小李'}
      ],
      website:'http://www.baidu.com',
      footinfo:'我是app层的信息'
      }
    },
    mounted(){
      PubSub.subscribe('add',(msg,data)=>{
        console.log('监听过来的--'+msg)
        this.mitems.push(data)
      })
      // let url = "https://www.baidu.com/"
      // axios.get(url).then(response=>{

      //  console.log(response)

      // }).catch(error=>{

      //  alert('error')
      //  console.log(error)
      // })
    },
    methods:{
      madd(item){
        this.mitems.push(item)
        console.log('我是外层')
      }
    },
    components:{
      //自己定义的，得组件映射
      Menu:Menu,
      Foot:Foot
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
