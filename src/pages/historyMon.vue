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
      <el-button class="btn" @click="init">查询</el-button>
    </div>
    <div v-if="userInfo.classify === '1' || userInfo.classify === '3'">
      <p class="class">生产类</p>
      <el-table :data="tableData" stripe>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column label="工作内容">
          <template slot-scope="{row,$index}">
            <p>({{row.dimension}}){{row.job}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间" width="100">
        </el-table-column>
      </el-table>
    </div>
    <div v-if="userInfo.classify === '2' || userInfo.classify === '3'">
      <p class="class">辅助类</p>
      <el-table :data="assistData" stripe>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column label="工作内容">
          <template slot-scope="{row,$index}">
            <p>({{row.dimension}}){{row.job}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间" width="100">
        </el-table-column>
      </el-table>
    </div>
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
        month: '',
        ajaxData: [],
        assistData: []
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
          month: new Date(this.time).getMonth() + 1
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
          }
        })
      },
      handleData() {
        this.ajaxData.map((item) => {
          if (item.classify === '1') {
            this.tableData.push(item)
          } else {
            this.assistData.push(item)
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 14px;
  color: #333;
}
.class {
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
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
