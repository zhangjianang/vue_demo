<template>
  <div id="mo">
    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-bind:add='madd'></Menu> -->
    <!-- 这是监听事件方式 -->
    <!-- <Menu v-bind:items='mitems' v-bind:website='website' v-on:add='madd'></Menu> -->
    <!-- 采用注册传递父子,没有事件了-->
    <Menu v-bind:items='mitems' v-bind:website='website' ></Menu>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  import Menu from './Menu'
  export default{
    name:"mo",
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
      // let url = "http://127.0.0.1/br-base-rest/kpi/get/year"
      // axios.get(url).then(response=>{


      //  for(let per in response.data){
      //    let peradd={
      //      "id":response.data[per].value,
      //      "name":response.data[per].name
      //    }
      //    console.log(peradd)
      //    this.mitems.push(peradd)
      //  }


      // }).catch(error=>{

      //  alert('error')
      //  console.log(error)
      // })
    },
    methods:{
      madd(item){
        this.mitems.push(item)
        console.log('我是外层')
      },
       handleClick(tab, event) {
         this.$router.replace(tab.name)
         console.log(tab, event);
       }
    },
    components:{
      //自己定义的，得组件映射
      Menu:Menu
    }
  }
</script>

<style>
</style>
