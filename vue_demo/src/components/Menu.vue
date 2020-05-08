<template>
<div>
 <ul>
   <li v-for='item in items' >
    {{item.id}}--{{item.name}}
   </li>
 </ul>
 <input type="text" v-model="content" />
 <button @click="add">添加</button>
 <a v-bind:href='website' target="_blank">
   <img src="../assets/dot.jpg" />
 </a>
</div>
</template>

<script>
  export default{
    name:'Menu',
    props:['items','website','add']
  }
</script>

<style>
</style>
