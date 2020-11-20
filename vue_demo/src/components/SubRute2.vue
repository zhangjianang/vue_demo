<template>
  <div>
    <div >
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
    子菜单2
    <ul>
      <li><router-link to="/sub2/sub1">筛选项</router-link></li>
      <li><router-link to="/sub2/sub2">展示列</router-link></li>
    </ul>
    <router-view></router-view>
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
</style>
