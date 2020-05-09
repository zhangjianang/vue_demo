<template>
  <div id="app">

    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-bind:add='madd'></Menu> -->
    <!-- 这是监听事件方式 -->
    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-on:add='madd'></Menu> -->
    <!-- 采用注册传递父子,没有事件了-->
    <Menu v-bind:items='mitems' v-bind:website='website' ></Menu>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import Menu from './components/Menu'
  export default {
    name: 'App',
    data () {
      return {
       mitems:[
        {id:1,name:'lili'},
        {id:2,name:'小王'},
        {id:3,name:'小李'}
      ],
      website:'http://www.baidu.com'
      }
    },
    mounted(){
      PubSub.subscribe('add',(msg,data)=>{
        console.log('监听过来的--'+msg)
        this.mitems.push(data)
      })
    },
    methods:{
      madd(item){
        this.mitems.push(item)
        console.log('我是外层')
      }
    },
    components:{
      //自己定义的，得组件映射
      Menu:Menu
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
