<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="设备台账资料（基本要求）" name="1">
        <div class="item">
          <p class="name">检查变电站是否建立应有、现有图档清册</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">参与运行检修规程审查</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">检查是否按期开展设备状态评价及基准风险评估</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符</p>
          <p class="success">已完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备台账资料（精益要求）" name="2">
        <div class="item">
          <p class="name">参与运行检修规程审查</p>
          <p class="success">已完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（基本要求）" name="3">
        <div class="item">
          <p class="name">检查是否按期开展设备状态评价及基准风险评估</p>
          <p class="fail">未完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（精益要求）" name="4">
        <div class="item">
          <p class="name">根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符</p>
          <p class="fail">未完成</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.success {
  color: #67c23a;
}
.fail {
  color: #f56c6c;
}
.name {
  width: 85%;
}
.success, .fail {
  width: 15%;
  text-align: right;
}

</style>

<script>
  export default {
    name: 'month',
    data() {
      return {
        activeNames: ['1']
      }
    },
    methods: {
      handleChange() {
      }
    },
    components: {
  
    }
  }
</script>

