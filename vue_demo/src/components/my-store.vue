<template>
  <div id="app">
    <h1>我是store</h1>
    <button @click="increment()">加一</button>
    <button @click="COUNT_INC()">新的加一</button>
    <h2 >{{count}}</h2>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "MyStore",
    data(){
      return {

      }
    },
    methods:{
      increment() {
          this.$store.commit('COUNT_INC')
          console.log(this.$store.state.count)
      },
      ...mapMutations(['COUNT_INC'])
    },
    computed:{
      ...mapState(['count'])
    }
  }
</script>

<style>
</style>
