<template>

    <div class="data-all" v-loading="loading">
      <div class="data-table">
        <vxe-grid
          round
          border
          auto-resize
          show-overflow
          height="auto"
          size="mini"
          align="center"
          :columns="tableColumn"
          ref="xgrid2"
          :edit-config="{trigger: 'manual', mode: 'row'}"
          :data="optionList">
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
  import {getOptionField,updateOptionField,deleteOptionField} from '../api/api'

  export default {
  name: 'Sub2Sub1',
  created () {
    this.search()
  },
  methods: {
    formatDataTime ({cellValue}) {
      if (!!cellValue) {
        return new Date(cellValue)
      } else {
        return '-'
      }
    },
    addDataModel (row) {
      this.$refs.xgrid2.setActiveRow(row)
    },
    delRow (row) {
      deleteOptionField(row.id)
    },
    updateRow(row){
      this.$refs.xgrid2.clearActived()
      updateOptionField(row).then(()=>{
        console.log("成功")
      })
    },
    handleCurrentChange() {
      this.search()
    },
    async search(){
      let {code, data: {data:{data,total}}} = await getOptionField({reportId:2,pageNum:this.currentPage,pageSize:this.pageSize})
      this.optionList = data
      this.total=total
    }
  },
  data () {
    return {
      total: 0,
      currentPage: 1,
      pageSize:20,
      loading: false,
      optionList: [],
      formatList:[{name:'one',value:1},{name:'two',value:2}],
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
          field: 'formatType', title: '格式化类型',
          editRender: {
            name: '$select',
            options:this.formatList,
            // attrs: {type: 'text'}
          }
        },
        {
          field: 'orderNo', title: '筛选列顺序',
          editRender: {
            name: 'input',
            attrs: {type: 'text'}
          }
        },
        {
          field: 'isDefaultVeiw', title: '是否默认呈现列',
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
  .data-all  .data-table  {
    height: 650px;
  }

  .data-page {

  }
</style>
