<template>
  <div class="score">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column label="基础分">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.totalValue"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="月度调整加分">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.addValue"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button class="btn" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        ajaxQueue: [],
        ajaxData: []
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      handleScore() {
        this.tableData.map((item) => {
          if (!item.totalValue) {
            item.totalValue = 0
          }
          if (!item.addValue) {
            item.addValue = 0
          }
        })
      },
      submit() {
        this.handleScore()
        const list = []
        this.tableData.map((item, index) => {
          let params = {
            month: new Date().getMonth() + 1,
            id: item.id,
            totalvalue: item.totalValue,
            addscore: item.addValue
          }
          let name = this.$http.get('http://192.168.0.100:8080/bc/addvalueuser.xhtml', {params: params})
          list.push(name)
        })
        Promise.all(list).then((res) => {
          let failFg = false
          res.map((item) => {
            if (item.body.code !== 200) {
              failFg = true
            }
          })
          if (res.length === 0) {
            failFg = true
          }
          if (res.length !== list.length) {
            failFg = true
          }
          if (failFg) {
            alert('提交失败')
          } else {
            alert('提交成功')
            history.go(-1)
          }
        })
        .catch((err) => {
          alert('提交失败')
        })
      },
      handleData() {
        const list = []
        this.ajaxData.map((item) => {
          list.push({
            id: item.id,
            name: item.name,
            totalValue: '',
            addValue: ''
          })
        })
        this.tableData = list
        console.log(this.tableData)
      },
      getData() {
        this.$http.get('http://192.168.0.100:8080/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
          } else {
            alert(res.msg)
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
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: #fff;
  }
  
  .footer .btn {
    width: 300px;
    color: #fff;
    background: #50a095;
  }
</style>
