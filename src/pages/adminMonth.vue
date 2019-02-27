<template>
  <div class="admin-mon">
    <Header :title="'审批月计划（生产类）'"></Header>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号">
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
          <!-- <el-button v-if="!scope.row.flag" @click="notify(scope.row)">提醒</el-button> -->
          <el-button class="btn" v-if="scope.row.flag === '1'" @click="toApproval(scope.row)">审批</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="notify">
      <el-button class="btn" @click="notifyAll">通知所有未编辑人员</el-button>
    </div> -->
  </div>
</template>

<style scoped>
.admin-mon {
  margin-top: 50px;
}
  .notify {
    margin-top: 40px;
    text-align: center;
  }
  .notify .btn {
    color: #fff;
    background: #50a095;
  }
</style>
<style>
@media screen and (max-width: 700px) {
  .admin-mon .table {
    font-size: 12px;
  }
  .admin-mon .btn {
    font-size: 12px;
  }
}
</style>


<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'login',
    data() {
      return {
        tableData: [],
        ajaxData: [],
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.init();
    },
    filters: {
      filterFlag(flag) {
        switch(flag) {
          case '9':
            return "提交失败"
          case '8':
            return "已驳回"
          case '7': 
            return "已通过"
          case '6': 
            return "已提交"
          case '4':
            return "提交失败"
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
          flag: 5,
          month: new Date().getMonth() + 1,
          time: 0,
          userid: item.userid,
          planid: item.id,
          define: '',
          file: ''
        }
        console.log(params)
        this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            if (item.list.length > 1) {
              this.remove(item.list, subIndex)
            }
            this.$message('成功')
          }
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
      handleData() {
        console.log(this.ajaxData)
        const list = []
        this.ajaxData.map((item) => {
          if (item.classify === '1') {
            list.push(item)
          } else if (item.classify === '3') {
            list.push(item)
          }
        })
        this.tableData = list
      },
      notifyAll() {
        let all = []
        this.monList.map((item) => {
          item.list.map((subItem, index) => {
            if (subItem.time) {
              let params = {
                flag: 1,
                month: new Date().getMonth() + 1,
                // month: this.nextMonth(),  todo
                time: new Date(subItem.time).getTime(),
                userid: this.userInfo.id,
                planid: subItem.id,
                define: '',
                file: ''
              }
              let name = this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
              all.push(name)
            }
          })
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
            this.$message('提交失败')
          } else {
            this.$message('提交成功')
            history.go(-1)
          }
        })
        .catch(() => {
          this.$message('提交失败')
        })
      },
      init() {
        let params = {
          // month: this.nextMonth()  todo
          month: new Date().getMonth() + 1,
          classify: 1
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleallplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
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
      Header
    }
  }
</script>

