<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="设备台账资料（基本要求）" name="1">
        <div class="item">
          <p>检查变电站是否建立应有、现有图档清册</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查现有清册是否与应有清册一致</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查现场存放纸质图档是否和现有清册一致</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查现场是否有借出归还记录</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查新设备的图档资料是否按时移交及齐全</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查新设备的电子化资料按时移交及齐全</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备台账资料（精益要求）" name="2">
        <div class="item">
          <p>参与运行检修规程审查</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查新设备投产后运规是否及时得到更新，并且更新内容正确无误</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查已发现问题是否按时得到整改</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（基本要求）" name="3">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item">
          <p>检查生产设备管理部是否发布设备管控策略</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（精益要求）" name="4">
        <div class="item">
          <p>根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备运维管理（基本要求）" name="5">
        <div class="item">
          <p>检查运维策略、运维计划已制定</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备运维管理（精益要求）" name="6">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备检修试验管理（基本要求）" name="7">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备检修试验管理（精益要求）" name="8">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备报废管理（基本要求）" name="9">
        <div class="item">
          <p>检查是否按期开展设备状态评价及基准风险评估</p>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
  .col .el-collapse-item__header {
    background: #409EFF;
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
  export default {
    name: 'month',
    data() {
      return {
        activeNames: ['1'],
        value1: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.form.userName === '田金周' || this.form.userName === '马锦波') {
          this.$router.push({
            name: 'index',
            params: {
              type: 'admin'
            }
          })
        } else {
          this.$router.push({
            name: 'index',
            params: {
              type: 'user'
            }
          })
        }
      }
    },
    components: {
  
    }
  }
</script>

