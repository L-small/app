<template>
  <div class="admin-history-mon">
    <div class="condition">
      <div class="item">
        <p class="title">选择日期：</p>
        <el-date-picker
          v-model="time"
          type="month"
          placeholder="选择月"
          @change="changeTime">
        </el-date-picker>
      </div>
    </div>
    <div class="button">
      <el-button class="btn" @click="init">查询</el-button>
    </div>
    <el-collapse v-model="activeNames" @change="changeColl" accordion>
      <el-collapse-item v-for="(item, index) in userList" class="col" :title="item.name + '的月计划'" :name="index">
        <el-table :data="tableData">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column label="工作内容">
            <template slot-scope="{row,$index}">
              <p>({{row.dimension}}){{row.job}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="时间" width="100"></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeNames: '1',
        time: '',
        types: ['生产类', '辅助类'],
        type: '',
        userList: [],
        tableData: [],
        userInfo: '',
        month: ''
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
      this.init();
    },
    methods: {
      // notify(item) {
      //   let params = {
      //     list: [item.id]
      //   }
      //   this.$http.get('', {params: params})
      //   .then((res) => {
      //     if (res.code === 200) {
      //       alert('已通知所有未完成人员')
      //     } else {
      //       alert('请重试')
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // },
      changeColl(item) {
        this.tableData = []
        if (item !== '') {
          this.getData(this.userList[item].id)
        }
      },
      // nextMonth() {
      //   let month = new Date().getMonth() + 1
      //   if (month + 1 > 12) {
      //     month = 1
      //   } else {
      //     month = month + 1
      //   }
      //   return month
      // },
      init() {
        this.handleTime()
        let params = {
          month: this.month
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleallplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.userList = JSON.parse(res.body.data)
          } else {
            alert("请求失败")
          }
        })
        .catch((err) => {
          console.log(err)
          alert("请求失败")
        })
      },
      changeTime() {
        this.userList = []
        this.tableData = []
      },
      // notifyAll() {
      //   let array = []
      //   this.tableData.map((item) => {
      //     if (item.status) {
      //       array.push(item.id)
      //     }
      //   })
      //   let params = {
      //     list: array
      //   }
      //   this.$http.get('', {params: params})
      //   .then((res) => {
      //     if (res.code === 200) {
      //       alert('已通知所有未完成人员')
      //     } else {
      //       alert('请重试')
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // },
      handleTime() {
        const date = new Date(this.time)
        this.month = date.getMonth() + 1
      },
      getData(id) {
        this.handleTime()
        if (id) {
          let params = {
            id: id,
            month: this.month
          }
          this.$http.get('http://112.74.55.229:8090/bc/showpeopleplan.xhtml', {params: params})
          .then((res) => {
            if (res.body.code === 200) {
              this.tableData = JSON.parse(res.body.data)
              // this.handelData()
            }
          })
        }
      }
    },
    components: {
  
    }
  }
</script>

<style>
.admin-history-mon .el-collapse-item__header {
  padding-left: 15px;
  background: #50a095;
  color: #fff;
}
.admin-history-mon .el-collapse-item__wrap {
  padding: 15px;
}
</style>

<style scoped>
  .notify {
    margin-top: 40px;
    text-align: center;
  }
  .condition {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    color: #333;
    font-size: 14px;
  }
  .condition .item {
    display: flex;
    align-items: center;
  }
  .button {
    margin: 15px auto 35px;
    text-align: center;
  }
  .button .btn {
    width: 200px;
    color: #fff;
    background: #50a095;
  }
  .col .item {
    display: flex;
    justify-content: space-between;
  }
</style>