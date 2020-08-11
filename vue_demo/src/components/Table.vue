<template>
  <div id='app'>


      <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item >
          <el-select v-model="formInline.group" placeholder="集团">
            <el-option label="选择所有" value="all"></el-option>
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
            prop="schoolname"
            label="学校名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="group"
            label="集团类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="allcount"
            label="总分">
          </el-table-column>
          <el-table-column
            prop="tj_count"
            label="特级教师人数">
          </el-table-column>

          <el-table-column
            prop="gj_count"
            label="高级教师人数">
          </el-table-column>
          <el-table-column
            prop="zj_count"
            label="中级教师人数">
          </el-table-column>
          <el-table-column
            prop="cj_count"
            label="初级教师人数">
          </el-table-column>
          <el-table-column
            prop="gt_portion"
            label="高特占比">
          </el-table-column>
          <el-table-column
            prop="cj_portion"
            label="初级占比">
          </el-table-column>

          <el-table-column
            prop="allcount_same"
            label="总人数同期">
          </el-table-column>
          <el-table-column
            prop="tj_count_same"
            label="特级教师同期">
          </el-table-column>
          <el-table-column
            prop="gj_count_same"
            label="高级同期">
          </el-table-column>
          <el-table-column
            prop="zj_count_same"
            label="中级同期">
          </el-table-column>

          <el-table-column
            prop="cj_count_same"
            label="初级同期">
          </el-table-column>
          <el-table-column
            prop="gt_portion_same"
            label="高特占比同期">
          </el-table-column>
          <el-table-column
            prop="gt_diff"
            label="高特差值">
          </el-table-column>
          <el-table-column
            prop="gt_score"
            label="高特得分">
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
                 group: ''
               },
      options: [],
       value: '',
       tableData: []
     }
    },
    mounted(){
      let url = "http://127.0.0.1/br-base-rest/kpi/get/group"
      axios.post(url, {code: "05"},{timeout: 1000}).then(response=>{
       response.data.forEach((item, index, arr) => {
         this.options.push({"value":item.value,"name":item.name})
       })
      }).catch(error=>{
       console.log(error)
      })
    },
    methods:{
       onSubmit() {
           let url = "http://127.0.0.1/br-base-rest/kpi/search/childSummary"
           this.formInline.code="05";
           console.log(this.formInline);
           axios.post(url, this.formInline,{timeout: 1000}).then(response=>{
            response.data.forEach((item, index, arr) => {
              this.tableData.push({"schoolname":item.schoolname,
              "group":item.group,
              "allcount":item.allcount,
              "tj_count":item.tj_count,
              "gj_count":item.gj_count,
              "zj_count":item.zj_count,
              "cj_count":item.cj_count,
              "gt_portion":item.gt_portion,
              "cj_portion":item.cj_portion,
              "allcount_same":item.allcount_same,
              "tj_count_same":item.tj_count_same,
              "gj_count_same":item.gj_count_same,
              "zj_count_same":item.zj_count_same,
              "cj_count_same":item.cj_count_same,
              "gt_portion_same":item.gt_portion_same,
              "gt_diff":item.gt_diff,
              "gt_score":item.gt_score
              })
            })
           }).catch(error=>{
            console.log(error)
           })
       }
    }
     
  }
</script>

<style>

</style>
