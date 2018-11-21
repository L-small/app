<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="35">
      </el-table-column>
      <el-table-column prop="substationname" label="变电站名称" width="80">
      </el-table-column>
      <el-table-column prop="devicemanager" label="设备名称" width="140">
      </el-table-column>
      <el-table-column prop="aName" label="设备主人A角" width="65">
      </el-table-column>
      <el-table-column prop="bName" label="设备主人B角" width="65">
      </el-table-column>
      <el-table-column prop="class" label="所在班组" width="80">
      </el-table-column>
      <el-table-column prop="list" label="设备范围">
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
    methods: {
      handleData() {
        for (let i = 0, len = this.ajaxData.length; i < len; i++) {
          for (let j = i + 1; j < len; j++ ) {
            if (this.ajaxData[i].id === this.ajaxData[j].id) {
              this.ajaxData[i].aName = this.ajaxData[i].name
              this.ajaxData[i].bName = this.ajaxData[j].name
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
            uid: 0
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

