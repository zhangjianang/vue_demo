<template>
  <div>
    <!-- <li><router-link to="/rute">首页显示子菜单</router-link></li> -->
    筛选项
    <div class="data-table" v-loading="loading">
      <vxe-grid
        round
        border
        auto-resize
        show-overflow
        height="auto"
        size="mini"
        align="center"
        :columns="tableColumn"
        ref="xgrid"
        :edit-config="{trigger: 'manual', mode: 'row'}"
        :data="tableList">
      </vxe-grid>
    </div>
    <div class="data-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {getCondField,updateCondField,deleteCondField} from '@/api/api.js'

  export default {
    name: 'Sub2Sub1',
    created () {
      this.search()
    },
    methods: {
      async search(){
        let {code, data: {data:{data,total}}} = await getCondField({reportId:2,pageNum:this.currentPage,pageSize:this.pageSize})
        this.tableList = data
        this.total=total
      },
      handleCurrentChange(){
        this.search()
      },
      formatDataTime ({cellValue}) {
        if (!!cellValue) {
          return new Date(cellValue)
        } else {
          return '-'
        }
      },
      addDataModel (row) {
        console.log("add"+row)
        this.$refs.xgrid.setActiveRow(row)
      },
      delRow (row) {
        console.log("del"+row)
        deleteCondField(row.id)
      },
      updateRow(row){
        this.$refs.xgrid.clearActived()
        console.log("粗人："+JSON.stringify(row))
        updateCondField(row).then(()=>{
          console.log("成功")
        })
      }
    },
    data () {
      return {
        total: 0,
        currentPage: 1,
        pageSize:20,
        loading: false,
        tableList: [],
        tableColumn: [
          {field: 'id', title: 'ID'},
          {
            field: 'name', title: '名字',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'code', title: '编码',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'groupName', title: '组名',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'reportId', title: '报告id',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'assemblyId', title: '输入值类型',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'dimensionId', title: '维度值对应数据来源',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'symboliSet', title: '可选操作符',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'isDefaultVeiw', title: '默认筛选列',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {
            field: 'orderNo', title: '筛选列顺序',
            editRender: {
              name: 'input',
              attrs: {type: 'text'}
            }
          },
          {field: 'updateTime', title: '更新时间'},
          {
            title: '操作',
            slots: {
              default: ({row}) => {
                return [
                  <span class= 'data-model-btn-text' onClick = {()  => this.addDataModel(row) }> 编辑 </span>,
                  <span class= 'data-model-btn-text' onClick = {() => this.updateRow(row) }> 保存 </span>,
                  <span class= 'data-model-btn-text' onClick = {() => this.delRow(row) }> 删除 </span>
              ]
              }
            }
          }
        ]
      }
    }
  }
</script>

<style>
  .data-model-btn-text {
    color: cadetblue;
    margin: 0 5px;
    cursor: pointer;
  }
</style>
