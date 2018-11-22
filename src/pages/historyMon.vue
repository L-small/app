<template>
  <div class="score">
    <div class="condition">
      <p>选择日期：</p>
      <el-date-picker
        v-model="time"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
    <div class="button">
      <el-button class="btn" type="success" @click="init">查询</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column label="工作内容">
        <template slot-scope="{row,$index}">
          <p>{{row.job}}({{row.dimension}})</p>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="时间" width="100">
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
        userInfo: {},
        month: ''
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
      this.init()
    },
    methods: {
      init() {
        let params = {
          id: this.userInfo.id,
          month: new Date(this.time).getMonth() + 2
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.tableData = JSON.parse(res.body.data)
            // this.handelData()
          }
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
.condition {
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
}
</style>
