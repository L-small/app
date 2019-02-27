<template>
  <div class="mon-score">
    <Header :title="'查看月度得分'"></Header>
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
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="totalvalue" label="基础分">
      </el-table-column>
      <el-table-column prop="subscore" label="未完成工作扣分">
        <template slot-scope="scope">
          <p>{{parseFloat(scope.row.subscore).toFixed(2)}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="addscore" label="月度调整加分">
      </el-table-column>
      <el-table-column prop="actual" label="月度实际得分">
        <template slot-scope="scope">
          <p>{{parseFloat(scope.row.actual).toFixed(2)}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="sub" label="未完成工作项数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Header from '../components/Header'
  export default {
    name: 'score',
    data() {
      return {
        tableData: [],
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
      filterMon() {
        const time = new Date(this.time)
        this.month = time.getMonth() + 1
      },
      getData() {
        this.filterMon()
        let params = {
          month: this.month,
          id: this.userInfo.id
        }
        this.$http.get('http://112.74.55.229:8090/bc/getuseraddvalue.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
          } else {
            this.$message(res.msg)
          }
        })
        .catch((err) => {
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
.mon-score {
  margin-top: 50px;
}
.condition {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 14px;
  color: #333;
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

<style>
@media screen and (max-width: 700px) {
  .mon-score .title {
    font-size: 12px;
  }
  .mon-score input {
    font-size: 12px;
  }
  .mon-score .table {
    font-size: 12px;
  }
}
</style>
