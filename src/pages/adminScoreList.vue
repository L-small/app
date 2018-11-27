<template>
  <div class="score">
    <div class="condition">
      <p class="title">选择日期：</p>
      <el-date-picker
        v-model="time"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
    <div class="button">
      <el-button class="btn" @click="getData">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50">
    </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="30score" label="中心全部30%绩效金额总和">
      </el-table-column>
      <el-table-column prop="actual" label="实际分配所得">
        <template slot-scope="{row,$index}">
          <p>{{parseFloat(row.actual).toFixed(2)}}</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        time: '',
        tableData: [],
        userInfo: '',
        time: '',
        month: ''
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
      this.getData()
    },
    methods: {
      handleTime() {
        const date = new Date(this.time)
        this.month = date.getMonth() + 1
      },
      getData() {
        this.tableData = []
        this.handleTime()
        let params = {
          id: this.userInfo.id,
          month: this.month
        }
        this.$http.get('http://112.74.55.229:8090/bc/getalluserget.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            alert("请求失败")
          }
        })
        .catch((err) => {
          alert("查询失败")
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
  .title {
    color: #333;
    font-size: 14px;
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
  }

  .condition {
    padding-top: 20px;
    display: flex;
    justify-content: center;
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
</style>
