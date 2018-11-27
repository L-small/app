<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="35">
      </el-table-column>
      <el-table-column prop="substationname" label="变电站名称" width="80">
      </el-table-column>
      <el-table-column prop="devicemanager" label="设备名称" width="100">
      </el-table-column>
      <el-table-column prop="aName" label="设备主人A角" width="65">
      </el-table-column>
      <el-table-column prop="bName" label="设备主人B角" width="65">
      </el-table-column>
      <el-table-column prop="userclass" label="所在班组" width="80">
        <template slot-scope="scope">
          <p v-if="scope.row.userclass">{{scope.row.userclass | filterClass}}</p>
          <p v-else>{{scope.row | filterClass}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="explain" label="设备范围">
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
  
</style>

<script>
  export default {
    data() {
      return {
        tableData: [],
        userInfo: {},
        ajaxData: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.initData()
    },
    filters: {
      filterClass(value) {
        if (value.userclass1) {
          if (value.userclass1 === '1' && value.userclass2 === '1') {
            return "一班"
          } else if (value.userclass1 === '2' && value.userclass2 === '2') {
            return "二班"
          } else {
            return "一班、二班"
          }
        } else {
          if (value === '1') {
            return "一班"
          } else {
            return "二班"
          }
        }
      }
    },
    methods: {
      // TODO 添加班组
      handleData() {
        for (let i = 0, len = this.ajaxData.length; i < len; i++) {
          for (let j = i + 1; j < len; j++ ) {
            if (this.ajaxData[i].id === this.ajaxData[j].id) {
              this.ajaxData[i].aName = this.ajaxData[i].name
              this.ajaxData[i].bName = this.ajaxData[j].name
              this.ajaxData[i].userclass1 = this.ajaxData[i].userclass
              this.ajaxData[i].userclass2 = this.ajaxData[j].userclass
              this.tableData.push(this.ajaxData[i])
            }
          }
        }
      },
      initData() {
        let params
        if (this.$route.query.type === 'user') {
          params = {
            id: this.userInfo.uid,
            uid: 2
          }
        } else {
          params = {
            id: this.userInfo.uid,
            uid: 1
          }
        }
        this.$http.get('http://112.74.55.229:8090/bc/getdevice.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
          } else {
            alert(res.msg)
          }
        })
        .catch((err) => {
          alert(err)
        })
      }
    },
    components: {
  
    }
  }
</script>

