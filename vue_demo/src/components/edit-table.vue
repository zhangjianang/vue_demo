<template>
  <div id='app'>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name:"edit-table",
      methods: {
        handleClick(row) {
          console.log(row);
        }
      },
      data() {
        return {
          tableData:[]
        }
      },
      mounted(){
        let url = "http://127.0.0.1:8099/user/all"
        axios.post(url, {},{timeout: 1000}).then(response=>{
         response.data.forEach((item, index, arr) => {
           console.log(item)
           this.tableData.push({
             "address":item.address,
             "name":item.name,
             "id":item.id,
             "gender":item.gender,
             "date":item.date,
             "state":item.state
             })
         })
        }).catch(error=>{
         console.log(error)
        })
      }
    }
</script>

<style>
</style>
