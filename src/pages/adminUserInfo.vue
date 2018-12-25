<template>
  <div class="reset-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="name" label="类别">
        <template slot-scope="scope">
          <el-select v-model="scope.row.classify" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <!-- <el-table-column label="差额">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.diff"></el-input>
        </template>
      </el-table-column> -->
    </el-table>
    <div class="notify">
      <el-button class="btn" @click="change">确认变更</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        userInfo: '',
        ajaxFg: false,
        options: [{
          label: '生产类',
          value: '1'
        }, {
          label: '辅助类',
          value: '2'
        }, {
          label: '生产类和辅助类',
          value: '3'
        }]
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      change() {
        let all = []
        this.tableData.map((item) => {
          let params = {
            id: item.id,
            classify: item.classify
          }
          let name = this.$http.get('http://112.74.55.229:8090/bc/updateuserclassify.xhtml', {params: params})
          all.push(name)
        })
        Promise.all(all).then((res) => {
          let failFg = false
          res.map((item) => {
            if (item.body.code !== 200) {
              failFg = true
            }
          })
          if (res.length === 0) {
            failFg = true
          }
          if (res.length !== all.length) {
            failFg = true
          }
          if (failFg) {
            alert('修改失败')
          } else {
            alert('修改成功')
            history.go(-1)
          }
        })
        .catch(() => {
          alert('修改失败')
        })
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        let params = {
          id: id,
          password: 123
        }
        this.$http.get('http://112.74.55.229:8090/bc/updateclassify.xhtml', {params: params})
        .then((res) => {
          this.ajaxFg = false
          if (res.body.code === 200) {
            alert('重置成功')
          } else {
            alert("重置失败")
          }
        })
        .catch((err) => {
          this.ajaxFg = false
          alert("重置失败")
        })
      },
      getData() {
        this.$http.get('http://112.74.55.229:8090/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            alert("请求失败")
          }
        })
        .catch((err) => {
          alert("请求失败")
          console.log(err)
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
.notify {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
  }
.notify .btn {
  color: #fff;
  background: #50a095;
}
</style>
