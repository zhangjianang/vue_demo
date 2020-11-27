<template>
  <div class="main-middle">
    <div class="left">
      <div class="left-upload">
        <el-upload
          class="upload-demo"
          drag
          :action = actionurl
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>

    </div>
    <div class="right">
      <div class="right-top">
        <el-tag>子菜单2</el-tag>
        <el-tag><router-link to="/sub2/sub1">筛选项</router-link></el-tag>
        <el-tag><router-link to="/sub2/sub2">展示列</router-link></el-tag>
      </div>
      <div class="right-middle">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {REPORT_BASE} from '@/api/api.js'
  export default {
    name:'SubRute2',
    data(){
      return{
        actionurl:REPORT_BASE+"/search/upload"
      }
    }
  }
</script>

<style>
  .main-middle{
    height: auto;
  }
  .left{
    width: 405px;
    height: 750px;
    float: left;
  }
  .right{
    margin-left: 405px;
    height: 750px;
  }
  .right-middle{
    height: 650px;
  }
</style>
