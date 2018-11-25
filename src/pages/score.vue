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
      <el-button class="btn" type="success" @click="getData">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="30score" label="中心全部30%绩效金额总和">
      </el-table-column>
      <el-table-column prop="actual" label="实际分配所得">
        <template slot-scope="{row,$index}">
          <p>{{parseFloat(row.actual).toFixed(2)}}</p>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="diff" label="差额">
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'score',
    data() {
      return {
        tableData: [{
          name: '吴鑫',
          score: 631,
          detail: 354,
          diff: 87
        }],
        time: '',
        month: '',
        userInfo: {}
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
        this.handleTime()
        let params = {
          month: this.month,
          id: this.userInfo.id
        }
        this.$http.get('http://192.168.0.100:8080/bc/getuserget.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            alert("查询失败")
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
.condition {
  margin-top: 20px;
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
