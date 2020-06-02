<template>
  <div id='app'>
    <el-table :data="groupList" v-loading="loading">
        <el-table-column type="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="code" label="分组编码" align="center"></el-table-column>
        <el-table-column prop="name" label="分组全称" align="center"></el-table-column>
        <el-table-column prop="mark" label="备注" align="center"  :show-overflow-tooltip="true" :formatter="formatEmpty">
        </el-table-column>
        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="groupList">
            <el-button
              size="mini"
              class="config-btn"
              style="width:70px;"
              @click.native.prevent="editGroup(groupList.$index, groupList)"
            >编辑</el-button>
            <el-button
              class="blue-btn"
              size="mini"
              style="width:70px"
              @click.native.prevent="deleteGroup(groupList.$index, groupList.row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <div class="table-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="page.total"
          :page-size="page.limit"
          @current-change="pageChange"
        ></el-pagination>
      </div>
  </div>
</template>

<script>
  export default {
    name:'Data',
    data() {
      return {
        tableData: [{
                  index: 0,
                  code:0,
                  name: '王小虎',
                  mark: '上海市普陀区金沙江路 1518 弄'
                },{
                  index: 1,
                  code:1,
                  name: '张建昂',
                  mark: '北京市普陀区金沙江路 1518 弄'
                }],
       // 选中表格index
        activeIndex: undefined,
        groupList: [],
        loading:false,
         //分页参数 一页有n条 当前页  总数
        page: {
          limit: undefined,
          p: undefined,
          total: undefined
        }
      };
    },
    methods:{
        //获取表格
      getGroup(params) {
        this.loading = true;
          getGroupTable(params).then(response => {
            this.groupList = response.data;
             this.page = {
              total: response.count,
              limit: response.limit,
              p: response.p
            };
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      },
        //分页
      pageChange(val) {
        console.log(this.queryParams)
          this.queryParams.p = val;
          this.getGroup();
      },
           // 编辑
      editGroup(index, groupList) {
        this.activeIndex = index;
        //这样就不会共用同一个对象 避免对话框内容改变的时候遮罩下面跟着改变
        this.editGroupInfo = Object.assign({}, groupList.row);
        this.editGroupDialog = true;
      },

         // 删除
      deleteGroup(index, id) {
        this.$confirm("此操作将永久删除, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            let params = {
              id: id
            };
            deleteGroup(params, id).then(response => {
              this.groupList.splice(index, 1);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            });
          })
          .catch(() => {});
      },
         //空数据转化为‘-’
     formatMark(row) {
        console.log(row);
        return row.mark ? row.mark : "-";
      },
     formatEmpty(){
      }
    }
     
  }
</script>

<style>

</style>
