<template>
  <div class="list">
    <p class="title">原设备信息</p>
    <el-table :data="tableData" stripe style="width: 100%">
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
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="substationname" label="变电站名称" width="65">
      </el-table-column>
      <el-table-column prop="devicemanager" label="设备名称" width="120">
      </el-table-column>
      <el-table-column label="设备主人A角" width="120">
        <template slot-scope="scope">
          <el-select class="item" v-model="userNameA" filterable placeholder="请选择">
            <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        </template>
      </el-table-column>
      <el-table-column label="设备主人B角" width="120">
        <template slot-scope="scope">
          <el-select class="item" v-model="userNameB" filterable placeholder="请选择">
            <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
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
  .title {
    margin-top: 25px;
    font-size: 18px;
    text-align: center;
    color: #50a095;
  }
  .notify {
    margin-top: 40px;
    text-align: center;
  }
  .notify .btn {
    color: #fff;
    background: #50a095;
  }
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tableData: [],
        userNameA: '',
        userNameB: '',
        userNames: [{
          value: '1',
          label: '田金周'
        }, {
          value: '王金斌',
          label: '王金斌'
        }, {
          value: '刘钢',
          label: '刘钢'
        }, {
          value: '孙琼仙',
          label: '孙琼仙'
        }, {
          value: '马锦波',
          label: '马锦波'
        }, {
          value: '陈娟2',
          label: '陈娟2'
        }, {
          value: '2',
          label: '吴鑫'
        }]
      }
    },
    created() {
      this.tableData.push(JSON.parse(this.$route.params.info))
    },
    filters: {
      filterClass() {

      }
    },
    methods: {
      handleData() {

      },
      change() {
        let firstFg = false
        let secondFg = false
        let firstParams = {
          id: this.tableData[0].id,
          role: 'a',
          userid: this.userNameA
        }
        const first = this.$http.get('http://192.168.0.100:8080/bc/changedevice.xhtml', {params: firstParams})
        let secondParams = {
          id: this.tableData[0].id,
          role: 'b',
          userid: this.userNameB
        }
        const second = this.$http.get('http://192.168.0.100:8080/bc/changedevice.xhtml', {params: secondParams})
        Promise.all([first, second]).then((res) => {
          let alertFg = false
          res.map((item) => {
            if (item.body.code !== 200) {
              alertFg = true
            }
          })
          if (alertFg) {
            alert('修改失败')
          } else {
            alert('修改成功')
            history.go(-1)
          }
        })
      }
    },
    components: {
  
    }
  }
</script>

