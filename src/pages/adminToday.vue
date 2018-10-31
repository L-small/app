<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="王金斌的今日计划" name="1">
        <div class="item">
          <p>检查变电站是否建立应有、现有图档清册</p>
          <div class="option">
            <el-button type="danger">驳回</el-button>
            <el-button type="success" @click="submit">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="马锦波的今日计划" name="2">
        <div class="item">
          <p>参与运行检修规程审查</p>
          <div class="option">
            <el-button type="danger">驳回</el-button>
            <el-button type="success" @click="submit">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="朱金勇的今日计划" name="3">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <div class="option">
            <el-button type="danger">驳回</el-button>
            <el-button type="success" @click="submit">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="高红的今日计划" name="4">
        <div class="item">
          <p>根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符</p>
          <div class="option">
            <el-button type="danger">驳回</el-button>
            <el-button type="success" @click="submit">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
  .col .el-collapse-item__header {
    background: #409EFF;
  }
  /* .item {
    display: flex;
    justify-content: space-between;
  } */
  .option {
    float: right;
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
        // console.log(val);
      },
      submit() {
        alert('审核成功')
      }
    },
    components: {
  
    }
  }
</script>

