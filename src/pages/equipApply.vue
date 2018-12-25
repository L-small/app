<template>
  <div class="list">
    <div>
      <p class="title">原设备信息</p>
    </div>
    <div>
      <p class="title">调整为</p>
    </div>
    
    <el-table :data="tableData2" stripe style="width: 100%">
      <el-table-column prop="stationName" label="变电站名称" width="90">
      </el-table-column>
      <el-table-column prop="equipName" label="设备名称" width="140">
      </el-table-column>
      <el-table-column prop="equipA" label="设备主人A角">
        <template slot-scope="scope">
          <el-select class="item" v-model="userNameA" filterable placeholder="请选择">
            <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="equipB" label="设备主人B角">
        <template slot-scope="scope">
          <el-select class="item" v-model="userNameB" filterable placeholder="请选择">
            <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div class="notify">
      <el-button @click="change">确认变更</el-button>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-size: 18px;
    text-align: center;
    color: #f56c6c;
  }
  .notify {
    margin-top: 40px;
    text-align: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          stationName: '500kV曲靖站',
          equipName: '500kV第一、二串间隔、500kVⅠⅡ母线间隔；500kV#1、#2主变一次设备',
          equipA: '李懋',
          equipB: '高红',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、高压电抗器、避雷器、阻波器、结合滤波器及500kV#1、#2主变本体'
        }],
        tableData2: [{
          stationName: '500kV曲靖站',
          equipName: '500kV第一、二串间隔、500kVⅠⅡ母线间隔；500kV#1、#2主变一次设备',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、高压电抗器、避雷器、阻波器、结合滤波器及500kV#1、#2主变本体'
        }],
        userNameA: '',
        userNameB: '',
        userNames: [{
          value: '田金周',
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
          value: '吴鑫',
          label: '吴鑫'
        }]
      }
    },
    methods: {
      change() {
        alert('变更完成')
        history.go(-1)
      }
    },
    components: {
  
    }
  }
</script>

