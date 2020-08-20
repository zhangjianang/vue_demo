<template>
  <div id='app'>
    <div id='form'>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formInline.address" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.gender" placeholder="性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id='table'>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="120">
        </el-table-column>
        <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'edit-table',
  computed: {
    ...mapState(['userList'])
  },
  methods: {
    ...mapActions(['fetchAll']),
    ...mapMutations(['ADD_USER', 'DEL_USER']),
    handleClick (row) {
      this.DEL_USER(row)
    },
    onSubmit () {
      this.ADD_USER(this.formInline)
    },
    refreshData () {
      this.fetchAll()
    }
  },
  data () {
    return {
      tableData: [],
      formInline: {
        name: '',
        gender: '',
        address: ''
      }
    }
  },
  mounted () {
    this.refreshData()
  },
  watch: {
    userList: function (val) {
      console.log('val：' + val)
      console.log('userlist:' + this.userList)
      this.tableData = this.userList.data
    }
  }
}
</script>

<style>
</style>
