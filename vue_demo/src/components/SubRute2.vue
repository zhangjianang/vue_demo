<template>
  <div>
    子菜单2
    <ul>
      <li><router-link to="/sub2/sub1">子菜单2子1</router-link></li>
      <li><router-link to="/sub2/sub2">子菜单2子2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'SubRute2'
  }
</script>

<style>
</style>
