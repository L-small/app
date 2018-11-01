<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="王金斌的月计划（生产类）" name="1">
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
      <el-collapse-item class="col" title="王金斌的月计划（辅助类）" name="2">
        <div class="item">
          <p class="name">检查变电站是否建立应有、现有消防设施图档清册</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">检查现有清册是否与应有清册一致</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">检查现场存放纸质图档是否和现有清册一致</p>
          <p class="success">已完成</p>
        </div>
        <div class="item">
          <p class="name">检查现场是否有借出归还记录</p>
          <p class="success">已完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="马锦波的月计划（生产类）" name="3">
        <div class="item">
          <p class="name">参与运行检修规程审查</p>
          <p class="success">已完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="马锦波的月计划（辅助类）" name="4">
        <div class="item">
          <p class="name">检查现场是否有借出归还记录</p>
          <p class="success">已完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="朱金勇的月计划（生产类）" name="5">
        <div class="item">
          <p class="name">检查是否按期开展设备状态评价及基准风险评估</p>
          <p class="fail">未完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="吴鑫的月计划（生产类）" name="6">
        <div class="item">
          <p class="name">检查CSGII系统台账移交是否及时</p>
          <p class="success">未完成</p>
        </div>
        <div class="item">
          <p class="name">检查变电站是否及时在CSGII系统填报设备变更</p>
          <p class="success">未完成</p>
        </div>
        <div class="item">
          <p class="name">负责已发现问题是否按时得到整改</p>
          <p class="success">未完成</p>
        </div>
        <div class="item">
          <p class="name">检查是否按期开展设备状态评价及基准风险评估</p>
          <p class="success">未完成</p>
        </div>
        <div class="item">
          <p class="name">专业班组是否有设备工作计划的制定</p>
          <p class="fail">未完成</p>
        </div>
        <div class="item">
          <p class="name">根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符</p>
          <p class="fail">未完成</p>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="吴鑫的月计划（辅助类）" name="7">
        <div class="item">
          <p class="name">检查现场是否有借出归还记录</p>
          <p class="fail">未完成</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.item {
  padding-left: 20px;
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
      handleChange(val) {
        console.log(val);
      }
    },
    components: {
  
    }
  }
</script>

