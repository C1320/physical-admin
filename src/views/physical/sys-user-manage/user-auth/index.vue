<template>
  <div>
    <!--        <el-breadcrumb separator-class="el-icon-arrow-right">-->
    <!--      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item>角色管理</el-breadcrumb-item>-->
    <!--    </el-breadcrumb>-->
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search" @submit.native.prevent>

      <el-form-item label="搜索：">
        <el-autocomplete class="input-search" placeholder="请输入姓名" :debounce=0
                         @select="handleSelect"
                         :fetch-suggestions="querySearch"
                         :trigger-on-focus="false"
                         @keyup.enter.native="onKeyDown"
                         autocomplete="on" clearable v-model="inputSearch">
          <el-button slot="append" icon="el-icon-search"
                     @click="searchBtn">
          </el-button>
        </el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-plus"
          @click="dialogVisible=true"
        >添加
        </el-button>
        <el-button
          size="small"
          type="danger"
          icon="el-icon-delete"
          @click="deleteListClicked"
        >删除
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      size="mini"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      height="580"
      align="center"
      stripe
      v-loading="tableLoading"
      :header-cell-style="{
                       'background-color': '#F9F9F9',
                       'text-align':'center',
                        'font-size': '1rem'
        }"
      :cell-style="{'text-align':'center', 'font-size': '1rem'}"
      highlight-current-row
      border
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        :selectable="handleSelectable"
        width="50">
      </el-table-column>
      <el-table-column
        prop="idCard"
        width="200"
        label="证件">
        <template scope="scope">
          <el-link :underline="false" type="primary">
            {{ scope.row.idCard }}
          </el-link>
        </template>

      </el-table-column>
      <el-table-column
        prop="sys_type"
        width="150"
        label="类型">
        <template scope="scope">
          <el-tag size="mini" disable-transitions :type="scope.row.labelTag.tag">
            {{ scope.row.labelTag.label }}
          </el-tag>
          <el-tag type="success" size="mini" v-if="scope.row.isCurrent">当前用户</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sys_user_name"
        width="150"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="sys_user_account"
        width="150"
        label="登录账号">
      </el-table-column>
      <el-table-column
        prop="phone"
        width="150"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="org_id"
        width="200"
        label="机构">
      </el-table-column>
      <el-table-column
        prop="register_time"
        width="200"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="account_change_time"
        width="200"
        label="变动时间">
      </el-table-column>
      <el-table-column
        prop="create_by"
        width="200"
        label="创建者">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
        <template scope="scope">
          {{ scope.row.statusText }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="handleRowClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">权限编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableTotal">
    </el-pagination>
    <add-user-dialog
      :dialog-visible="dialogVisible"
      @update-viable="dialogVisible=false"
      @creat-success="creatSuccess"
    >

    </add-user-dialog>
    <detail-user-dialog
      :dialog-visible="detailVisible"
      @update-viable="detailVisible=false"
      :sysUserDetail="userDetail"
      @save-success="saveSuccess"
    >

    </detail-user-dialog>
  </div>

</template>

<script>
import {handleLabel, handleStatus} from "@/views/physical/sys-user-manage/utils";
import {handlefForMatTime} from '@/utils/plugin/utils'
import detailUserDialog from '@/views/physical/sys-user-manage/components/detail-sys-user-dialog/index'
import addUserDialog from '@/views/physical/sys-user-manage/components/add-sys-user-dialog/index'
import {deepClone} from "@/utils/handle";

export default {
  components: {
    addUserDialog,
    detailUserDialog,
  },
  data() {
    return {
      inputSearch:'',
      dialogVisible: false,
      userDetail: {},
      detailVisible: false,
      tableLoading: false,
      tableTotal: 0, // 总数据
      currentPage: 1, // 当前页
      pageSize: 10, // 每页数据
      tableData: [],
      selfId: 0,
      selectionList: [],
      dataList: [],
    }
  },
  async created() {
    await this.getSysUserData()
  },
  methods: {
    // 建议回调选中
    handleSelect(item) {
      this.requestSearch(item.sys_user_name)
    },
    async querySearch(queryString, cb) { // 输入框建议回调
      if (!queryString) return
      await this.$get('/sys-search-suggestions', {
        keyWords: queryString,
        noLoading: true
      }).then(res => {
        if (res.data.status === 200) {
          this.dataList = []
          // this.dataList = res.data.result
          res.data.result.forEach(item => {
            item.value = item.sys_user_name;
            this.dataList.push(item)
          })
        }
        console.log(this.dataList,25)
      })
      var results = queryString ? this.dataList.filter(this.createFilter(queryString)) : this.dataList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    onKeyDown(e) { // 监听键盘回车键
      if (e.keyCode === 13 && this.inputSearch !== '') {
        this.pageSize = 20
        this.currentPage = 1
        this.requestSearch(this.inputSearch)
      } else {
        this.messageTip('请输入搜索内容','error')
      }
    },
    async requestSearch(searchText = '') { // 搜索请求
      this.tableLoading = true
      await this.$get(
        '/sys-like-search',
        {
          searchText: searchText,
          page: this.currentPage,
          limit: this.pageSize,
          timestamp: new Date(),
          noLoading: true
        }
      ).then(res => {
        if (res.data.status === 200) {
          console.log(res)
          this.tableTotal = res.data.result.total
          this.tableData = res.data.result.lt
          // console.log(this.tableData,9799)
          this.handleData()
        }
        else {
          this.messageTip(res.data.msg,'error')
        }
      }).catch(error => {
        console.log(error)
      })
      this.tableLoading = false
    },
    // 搜索
    searchBtn() {
      this.pageSize = 20
      this.currentPage = 1
      if (this.inputSearch !== '') {
        this.pageSize = 20
        this.currentPage = 1
        this.requestSearch(this.inputSearch)
      } else {
        this.getSysUserData()
      }
    },
    saveSuccess() {
      this.detailVisible = false;
      this.getSysUserData()
    },
    async deleteListClicked() { //删除操作
      if (this.selectionList.length > 0) {
        let array = []
        this.selectionList.forEach(item => {
          array.push({idCard: item.idCard})
        })
        await this.$post('/delete-sys-user', {
          list: JSON.stringify(array)
        }).then(res => {
          this.messageTip(res.data.msg)
          setTimeout(() => {
            this.getSysUserData()
          }, 1500)
        })

      } else {
        this.messageTip('请至少选择一项', 'error')
      }
    },
    // 创建成功回调
    creatSuccess() {
      this.dialogVisible = false
      this.getSysUserData()
    },
    handleRowClick(row) {
      this.detailVisible = true
      this.userDetail = deepClone(row)
      console.log(row)
    },
    async getSysUserData() {
      this.tableLoading = true
      this.selfId = this.$store.state.BaseStore.user.user_id;
      await this.$get('/query_sys_user-list', {
        page: this.currentPage,
        limit: this.pageSize,
        noLoading: true
      }).then(res => {
        if (res.data.status === 200) {
          this.tableTotal = res.data.result.total;
          this.tableData = res.data.result.lt;
          this.handleData()
        } else {
          this.messageTip(res.data.msg, 'error')
        }
      })
      this.tableLoading = false
    },
    handleData() {
      try {
        let array = []
      this.tableData.forEach(item => {
        item.labelTag = handleLabel(item.sys_type);
        item.isCurrent = item.user_id === this.selfId;
        item.statusText = handleStatus(item.status);
        item.register_time = handlefForMatTime(item.register_time)
        item.account_change_time = handlefForMatTime(item.account_change_time)
        if (item.isCurrent) {
          array.unshift(item)
        } else {
          array.push(item)
        }

      })
      this.tableData = array;
      console.log(this.tableData,222)
      }catch (e) {
        console.log(e)
      }

    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.selectionList = val;
      console.log(this.selectionList)
    },
    // 处理是否可选择
    handleSelectable(row, index) {
      if (row.user_id === this.selfId) {
        return false
      }
      return true

    },
    // 每页数据改变
    handleSizeChange(val) {
      this.pageSize = val
      this.getSysUserData()
    },
    // 切换当前页
    handleCurrentChange(val) {
      this.currentPage = val
      this.getSysUserData()
    },
    /**
     *信息弹窗提示
     * */
    messageTip(msg, type = 'success') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
  }
}
</script>

<style scoped lang="scss">
.user-search {
  margin-top: 20px;
}
</style>
