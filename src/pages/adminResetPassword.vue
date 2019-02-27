<template>
  <div class="admin-reset-pass">
    <Header :title="'重置用户密码'"></Header>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row,$index}">
          <el-button @click="reset(row.id)">重置密码</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column label="差额">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.diff"></el-input>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        userInfo: '',
        ajaxFg: false
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      reset(id) {
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        let params = {
          id: id,
          password: 123
        }
        this.$http.get('http://112.74.55.229:8090/bc/passworduser.xhtml', {params: params})
        .then((res) => {
          this.ajaxFg = false
          if (res.body.code === 200) {
            this.$message('重置成功')
          } else {
            this.$message('重置失败')
          }
        })
        .catch((err) => {
          this.ajaxFg = false
          this.$message('重置失败')
        })
      },
      getData() {
        this.$http.get('http://112.74.55.229:8090/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            this.$message('请求失败')
          }
        })
        .catch((err) => {
          this.$message('请求失败')
          console.log(err)
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style>
.admin-reset-pass {
  margin-top: 50px;
}
@media screen and (max-width: 700px) {
  .admin-reset-pass .table {
    font-size: 12px;
  }
  .admin-reset-pass .el-button {
    font-size: 12px;
  }
}
</style>