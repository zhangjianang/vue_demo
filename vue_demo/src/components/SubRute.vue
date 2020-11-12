<template>
  <div>
    <!-- <li><router-link to="/rute">首页显示子菜单</router-link></li> -->
    子菜单1
    <div class="data-model-table" v-loading="loading">
      <vxe-grid
        round
        border
        auto-resize
        show-overflow
        height="auto"
        size="mini"
        align="center"
        :columns="tableColumn"
        :data="tableList">
      </vxe-grid>
    </div>

  </div>
</template>

<script>
  import  {fetchAll} from '@/api/api.js'
  export default{
    name:'SubRute',
    async created () {
      let {data} = await fetchAll()
      console.log(data)
      this.tableList = data
    },
    methods:{
      formatDataTime({ cellValue }){
        if(!!cellValue)
          return new Date(cellValue)
        else
          return '-'
      },
      addDataModel(row){
        console.log(row)
      },
      delRow(row){
        console.log(row)
      }
    },
    data(){
      return{
        loading:false,
        tableList: [],
        tableColumn: [
          { field: 'id', title: 'ID' },
          {field:"name",title:'名称'},
          { field: 'gender', title: '性别' },
          { field: 'address', title: '地址' },
          { field: 'state', title: '状态' },
          { field: 'date', title: '创建时间' , formatter:  this.formatDataTime  },
          {
            title: '操作',
            slots: {
              default: ({ row }) => {
                return [
                  <span class="data-model-btn-text" onClick={ () => this.addDataModel(row) }>编辑</span>,
                <span class="data-model-btn-text" onClick={ () => this.delRow(row) }>删除</span>
              ]
              }
            }
          }
        ]
      }
    }
  }
</script>

<style  >
  .data-model-btn-text {
    color: cadetblue;
    margin: 0 5px;
    cursor: pointer;
  }
</style>
