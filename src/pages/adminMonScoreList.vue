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
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="totalvalue" label="基础分">
      </el-table-column>
      <el-table-column prop="subscore" label="未完成工作扣分">
        <template slot-scope="{row,$index}">
          <p>{{row.subscore | filterSubScore}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="addscore" label="月度调整加分">
      </el-table-column>
      <el-table-column prop="actual" label="月度实际得分">
        <template slot-scope="{row,$index}">
          <p>{{row.actual | filterActual}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="sub" label="未完成工作项数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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
    filters: {
      filterSubScore(value) {
        const data = parseFloat(value).toFixed(2)
        if (data) { 
          return -data
        } else {
          return data
        }
      },
      filterActual(value) {
        return parseFloat(value).toFixed(2)
      }
    },
    methods: {
      filterMon() {
        const time = new Date(this.time)
        this.month = time.getMonth() + 1
      },
      getData() {
        this.tableData = []
        this.filterMon()
        let params = {
          month: this.month,
          id: this.userInfo.id
        }
        this.$http.get('http://112.74.55.229:8090/bc/getalluseraddvalue.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
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
.condition {
  margin-top: 20px;
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
