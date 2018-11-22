<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="status" label="计划编辑情况">
        <template slot-scope="scope">
          <p>{{scope.row.flag | filterFlag}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button v-if="!scope.row.flag" @click="notify">提醒</el-button>
          <el-button v-if="scope.row.flag === '1'" @click="toApproval(scope.row)">审批</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="notify">
      <el-button type="primary" @click="notifyAll">通知所有未编辑人员</el-button>
    </div>
  </div>
</template>

<style scoped>
  .notify {
    margin-top: 40px;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.init();
    },
    filters: {
      filterFlag(flag) {
        switch(flag) {
          case '3': 
            return "已驳回"
          case '2':
            return "已通过"
          case '1': 
            return "已提交"
          case '0':
            return "未提交"
          default: 
            return "未提交"
        }
      }
    },
    methods: {
      notify(item) {
        let params = {
          list: [item.id]
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            alert('已通知所有未完成人员')
          } else {
            alert('请重试')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      nextMonth() {
        let month = new Date().getMonth() + 1
        if (month + 1 > 12) {
          month = 1
        } else {
          month = month + 1
        }
        return month
      },
      notifyAll() {
        let array = []
        this.tableData.map((item) => {
          if (item.status) {
            array.push(item.id)
          }
        })
        let params = {
          list: array
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            alert('已通知所有未完成人员')
          } else {
            alert('请重试')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      init() {
        // let url = ''
        // if (this.$route.query.type === 'prod') {
        //   url = ''
        // } else {
        //   url = ''
        // }
        let params = {
          month: this.nextMonth()
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleallplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            console.log(JSON.parse(res.body.data))
            this.tableData = JSON.parse(res.body.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      toApproval(item) {
        this.$router.push({name: 'adminMonDetail', params: {planUser: item.userid}})
      }
    },
    components: {
  
    }
  }
</script>

