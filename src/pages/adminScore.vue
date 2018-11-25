<template>
  <div class="score">
    <div class="money">
      <p class="title">中心全部30%绩效金额总和</p>
      <el-input placeholder="请输入绩效金额总和" class="money-input" v-model="allMoney"></el-input>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
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
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        allMoney: '',
        userInfo: '',
        ajaxData: []
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      submit() {
        const list = []
        this.tableData.map((item, index) => {
          let params = {
            month: new Date().getMonth() + 1,
            id: item.id,
            score30: this.allMoney
          }
          let name = this.$http.get('http://192.168.0.100:8080/bc/adduserget.xhtml', {params: params})
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
            score30: this.allMoney
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
  .money {
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-size: 14px;
    color: #333;
    margin-right: 10px;
  }
  .money-input {
    width: 220px;
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
