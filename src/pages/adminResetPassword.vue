<template>
  <div class="reset-table">
    <el-table :data="tableData" stripe style="width: 100%">
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
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        userInfo: '',
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      reset(id) {
        let params = {
          id: id,
          password: 123
        }
        this.$http.get('http://192.168.0.100:8080/bc/passworduser.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            alert('重置成功')
          } else {
            alert("重置失败")
          }
        })
        .catch((err) => {
          alert("重置失败")
        })
      },
      getData() {
        this.$http.get('http://192.168.0.100:8080/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            alert(res.body.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
</style>
