<template>

    <div class="data-model-table" v-loading="loading">
      子菜单2的子菜单2
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
</template>

<script>
  import {getOptionField,updateOptionField,deleteOptionField} from '../api/api'

  export default {
  name: 'Sub2Sub1',
    async created () {
    let {code, data: {data}} = await getOptionField(-2)
    this.optionList = data
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
    }
  },
  data () {
    return {
      loading: false,
      optionList: [],
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
