<template>
<div>
 <ul>
   <li v-for='item in items' >
    {{item.id}}--{{item.name}}
   </li>
 </ul>
 <input type="text" v-model="content" />
 <button @click="sadd">添加</button>
<hr />
 <a v-bind:href='website' target="_blank">
   <img src="../assets/dot.jpg" />
 </a>
</div>
</template>

<script>
  export default{
    name:'Menu',
    props:['items','website','add'],
    data(){
      return {
        content:''
      }
    },
    methods:{
      selfadd(){
        let pi = {};
        let index = this.items.length
        pi.id=index+1;
        pi.name=this.content;
        this.items.push(pi);
        this.content = '';
      },
      sadd(){
        let pi = {};
        let index = this.items.length
        pi.id=index+1
        pi.name=this.content
        this.add(pi)
        this.content = ''
      }
    }
  }
</script>

<style>
</style>
