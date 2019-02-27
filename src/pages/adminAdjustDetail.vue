<template>
  <div class="admin-adjust-detail">
    <Header :title="'设备调整详情'"></Header>
    <p class="title">原设备信息</p>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="substationname" label="变电站名称" width="65">
      </el-table-column>
      <el-table-column prop="devicemanager" label="设备名称" width="120">
      </el-table-column>
      <el-table-column prop="aName" label="设备主人A角" width="65">
      </el-table-column>
      <el-table-column prop="bName" label="设备主人B角" width="65">
      </el-table-column>
      <el-table-column prop="class" label="所在班组" width="60">
        <template slot-scope="scope">
          <!-- <p>{{scope.row | filterClass}}</p> -->
        </template>
      </el-table-column>
      <el-table-column prop="explain" label="设备范围">
      </el-table-column>
    </el-table>
    <p class="title">调整为</p>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="substationname" label="变电站名称" width="65">
      </el-table-column>
      <el-table-column label="设备名称" width="150">
        <template slot-scope="scope">
          <el-input class="item" type="textarea" v-model="deviceName" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="设备主人A角" width="100">
        <template slot-scope="scope">
          <el-select v-model="userNameA" placeholder="请选择">
            <el-option
              v-for="(item, index) in userNames"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="设备主人B角" width="100">
        <template slot-scope="scope">
          <el-select v-model="userNameB" placeholder="请选择">
            <el-option
              v-for="(item, index) in userNames"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="class" label="所在班组" width="60">
        <template slot-scope="scope">
          <!-- <p>{{scope.row.class | filterClass}}</p> -->
        </template>
      </el-table-column>
      <el-table-column prop="explain" label="设备范围">
      </el-table-column>
    </el-table>
    <div class="notify">
      <el-button class="btn" @click="change">确认变更</el-button>
    </div>
  </div>
</template>

<style scoped>
.admin-adjust-detail {
  margin-top: 50px;
}
  .title {
    margin-top: 25px;
    font-size: 18px;
    text-align: center;
    color: #50a095;
  }
  .notify {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .notify .btn {
    color: #fff;
    background: #50a095;
  }
</style>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'login',
    data() {
      return {
        tableData: [],
        userNameA: '',
        userNameB: '',
        userNames: [],
        ajaxFlag: false,
        deviceName: ''
      }
    },
    created() {
      this.tableData.push(JSON.parse(this.$route.params.info))
      this.deviceName = this.tableData[0].devicemanager
      this.getUser()
    },
    filters: {
      filterClass() {

      }
    },
    methods: {
      getUser() {
        this.$http.get('http://112.74.55.229:8090/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.userNames = JSON.parse(res.body.data)
          } else {
            this.$message('请求失败');
          }
        })
        .catch((err) => {
          this.$message('请求失败');
          console.log(err)
        })
      },
      change() {
        if (this.ajaxFlag) {
          return
        }
        this.ajaxFlag = true
        let firstFg = false
        let secondFg = false
        let firstParams = {
          id: this.tableData[0].id,
          role: 'a',
          userid: this.userNameA
        }
        const first = this.$http.get('http://112.74.55.229:8090/bc/changedevice.xhtml', {params: firstParams})
        let secondParams = {
          id: this.tableData[0].id,
          role: 'b',
          userid: this.userNameB
        }
        const second = this.$http.get('http://112.74.55.229:8090/bc/changedevice.xhtml', {params: secondParams})
        let thirdParams = {
          id: this.tableData[0].id,
          devicemanager: this.deviceName
        }
        const third = this.$http.get('http://112.74.55.229:8090/bc/changedevicem.xhtml', {params: thirdParams})
        Promise.all([first, second, third]).then((res) => {
          let alertFg = false
          res.map((item) => {
            if (item.body.code !== 200) {
              alertFg = true
            }
          })
          if (alertFg) {
            this.ajaxFlag = false
            this.$message('修改失败');
          } else {
            this.ajaxFlag = false
            this.$message('修改成功');
            history.go(-1)
          }
        })
        .catch((err) => {
          this.ajaxFlag = false
          this.$message('修改失败');
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style>
@media screen and (max-width: 700px) {
  .admin-adjust-detail .table{
    font-size: 12px;
  }
  .admin-adjust-detail .title {
    font-size: 14px;
  }
  .admin-adjust-detail .el-textarea__inner {
    font-size: 12px;
  }
  .admin-adjust-detail .el-input__inner {
    font-size: 12px;
  }
}
</style>