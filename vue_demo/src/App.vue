<template>
  <div id="app">

    <Menu v-bind:items='mitems' v-bind:website='website' v-bind:add='madd'></Menu>
  </div>

</template>

<script>

  import Menu from './components/Menu'
  export default {
    name: 'App',
    data () {
      return {
       mitems:[
        {id:1,name:'lili'},
        {id:2,name:'小王'},
        {id:2,name:'小李'}
      ],
      website:'http://www.baidu.com'
      }
    },
    methods:{
      madd(menu){
        console.log('我是外层')
      }
    },
    components:{
      //组件映射
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
