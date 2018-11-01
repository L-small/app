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
          stationName: '35kV高家村变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '陈娟',
          equipB: '吴鑫',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 2,
          stationName: '35kV上坡坡变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '吴鑫',
          equipB: '陈娟',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }]
      }
    },
    methods: {},
    components: {
  
    }
  }
</script>

