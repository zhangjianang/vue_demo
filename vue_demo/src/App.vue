<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="/rute">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="/rute2">配置管理</el-tab-pane>
            <el-tab-pane label="复用menulabel" name="/menuoverload">复用menu</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <Foot>这里{{footinfo}}</Foot>
      </el-footer>

    </el-container>
  </div>

</template>

<script>
  import Foot from './components/Foot'
  export default {
    name: 'App',
    data () {
      return {
        activeName: '/rute',
        footinfo:'我是app层的信息'
      }
    },
    mounted(){

    },
    methods:{
       handleClick(tab, event) {
         this.$router.replace(tab.name)
         console.log(tab, event);
       }
    },
    components:{
      Foot:Foot
    }
  }
</script>

<style>
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
   .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: left;
      line-height: 160px;
    }
</style>
