<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="35">
      </el-table-column>
      <el-table-column prop="stationName" label="变电站名称" width="80">
      </el-table-column>
      <el-table-column prop="equipName" label="设备名称" width="140">
      </el-table-column>
      <el-table-column prop="equipA" label="设备主人A角" width="65">
      </el-table-column>
      <el-table-column prop="equipB" label="设备主人B角" width="65">
      </el-table-column>
      <el-table-column prop="gourp" label="所在班组" width="80">
      </el-table-column>
      <el-table-column prop="content" label="设备范围">
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
  
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tableData: [{
          index: 1,
          stationName: '500kV曲靖站',
          equipName: '220kV第一、二、四串间隔所有一次设备',
          equipA: '马锦波',
          equipB: '王金斌',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、避雷器、阻波器、结合滤波器等一次设备'
        }, {
          index: 2,
          stationName: '500kV曲靖站',
          equipName: '220kV第五、六、七串间隔所有一设备',
          equipA: '王金斌',
          equipB: '马锦波',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、避雷器、阻波器、结合滤波器等一次设备'
        }]
      }
    },
    methods: {},
    components: {
  
    }
  }
</script>

