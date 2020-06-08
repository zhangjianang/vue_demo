<template>
  <div id='app'>


      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-tag type="info">集团类型</el-tag>
        <el-form-item label="集团">
          <el-select v-model="formInline.region" placeholder="集团">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>



     <hr/>
    <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'Data',
    data() {
     return {
       formInline: {
                 user: '',
                 region: ''
               },
      options: [],
       value: '',
       tableData: [{
         date: '2016-05-02',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-04',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1517 弄'
       }, {
         date: '2016-05-01',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1519 弄'
       }, {
         date: '2016-05-03',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1516 弄'
       }]
     }
    },
    mounted(){
      let url = "http://127.0.0.1/br-base-rest/kpi/get/group"
      axios.post(url, {
          code: "05"
      },{
         timeout: 1000
      }).then(response=>{

       for(let per in response.data){
         let peradd={
           "value":response.data[per].value,
           "name":response.data[per].name
         }
         console.log(peradd)
         this.options.push(peradd)
       }

      }).catch(error=>{

       alert('error')
       console.log(error)
      })
    },
    methods:{
       onSubmit() {
              console.log('submit!');
            }
    }
     
  }
</script>

<style>

</style>
