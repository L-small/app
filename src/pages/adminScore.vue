<template>
  <div class="admin-score">
    <Header :title="'设定绩效'"></Header>
    <div class="money">
      <div class="month">
        <p class="title">月份</p>
        <el-date-picker
          class="picker"
          v-model="time"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
      <div class="count">
        <p class="title">中心全部30%绩效金额总和</p>
        <el-input type="number" placeholder="请输入绩效金额总和" class="money-input" v-model="allMoney"></el-input>
      </div>
    </div>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column label="中心全部30%绩效金额总和">
        <template slot-scope="{row,$index}">
          <p>{{allMoney}}</p>
        </template>
      </el-table-column>
      <!-- <el-table-column label="差额">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.diff"></el-input>
        </template>
      </el-table-column> -->
    </el-table>
    <div class="footer">
      <el-button class="btn" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        allMoney: '',
        userInfo: '',
        ajaxData: [],
        ajaxFg: false,
        time: ''
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
      this.time = this.lastMon()
    },
    methods: {
      lastMon() {
        const date = new Date()
        const y = date.getFullYear()
        const d = date.getDay()
        const h = date.getHours()
        const min = date.getMinutes()
        const s = date.getSeconds()
        const month = new Date().getMonth() + 1
        if (month === 1) {
          return `${y}-${12}-${d} ${h}:${min}:${s}`
        } else {
        return `${y}-${month - 1}-${d} ${h}:${min}:${s}`
        }
      },
      submit() {
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        const list = []
        this.tableData.map((item, index) => {
          let params = {
            month: new Date(this.time).getMonth() + 1,
            id: item.id,
            score30: this.allMoney
          }
          let name = this.$http.get('http://112.74.55.229:8090/bc/adduserget.xhtml', {params: params})
          list.push(name)
        })
        Promise.all(list).then((res) => {
          this.ajaxFg = false
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
            this.$message('提交失败')
          } else {
            this.$message('提交成功')
            history.go(-1)
          }
        })
        .catch((err) => {
          this.ajaxFg = false
          this.$message('提交失败')
        })
      },
      handleData() {
        const list = []
        this.ajaxData.map((item) => {
          list.push({
            id: item.id,
            name: item.name,
            score30: this.allMoney
          })
        })
        this.tableData = list
        console.log(this.tableData)
      },
      getData() {
        this.$http.get('http://112.74.55.229:8090/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
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

<style scoped>
  .admin-score {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .money {
    width: 75%;
    margin: 20px auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .money .month,.money .count {
    display: flex;
    align-items: center;
  }
  .money .count {
    margin-left: 20px;
  }
  .money .month .title {
    width: 40px;
  }
  .money .count .title {
    width: 100px;
  }
  .title {
    font-size: 14px;
    color: #333;
    margin-right: 10px;
  }
  .money-input {
    width: 190px;
  }
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
<style>
@media screen and (max-width: 700px) {
  .admin-score .money {
    display: block;
  }
  .admin-score .month .picker {
    width: 220px
  }
  .admin-score .money .count {
    margin-top: 10px;
    margin-left: 0px;
  }
  .admin-score .table {
    font-size: 12px;
  }
}
</style>
