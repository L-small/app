<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="设备台账资料（基本要求）" name="1">
        <div class="item" v-for="item in dataList1">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备台账资料（精益要求）" name="2">
        <div class="item" v-for="item in dataList2">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（基本要求）" name="3">
        <div class="item" v-for="item in dataList3">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备状态评价及风险评（精益要求）" name="4">
        <div class="item" v-for="item in dataList4">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备运维管理（基本要求）" name="5">
        <div class="item" v-for="item in dataList5">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备运维管理（精益要求）" name="6">
        <div class="item" v-for="item in dataList6">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备检修试验管理（基本要求）" name="7">
        <div class="item" v-for="item in dataList7">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备检修试验管理（精益要求）" name="8">
        <div class="item" v-for="item in dataList8">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="设备报废管理（基本要求）" name="9">
        <div class="item" v-for="item in dataList9">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">提交计划</el-button>
    </div>
  </div>
</template>

<style scoped>
  .col .el-collapse-item__header {
    background: #409EFF;
  }
  
  .item {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .picker {
    height: 40px;
  }
  
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: #fff;
  }
  
  .footer .btn {
    width: 300px;
  }
</style>

<script>
  export default {
    name: 'month',
    data() {
      return {
        activeNames: ['1'],
        dataList1: [{
          label: '检查变电站是否建立应有、现有图档清册',
          time: ''
        }, {
          label: '检查现有清册是否与应有清册一致',
          time: ''
        }, {
          label: '检查现场存放纸质图档是否和现有清册一致',
          time: ''
        }, {
          label: '检查现场是否有借出归还记录',
          time: ''
        }, {
          label: '检查新设备的图档资料是否按时移交及齐全',
          time: ''
        }, {
          label: '检查新设备的电子化资料按时移交及齐全',
          time: ''
        }, {
          label: '负责已发现问题是否按时得到整改',
          time: ''
        }, {
          label: '检查基础数据是否正确、完备',
          time: ''
        }, {
          label: '检查CSGII系统台账移交是否及时',
          time: ''
        }, {
          label: '检查CSGII系统账、卡物一致性',
          time: ''
        }, {
          label: '检查变电站是否及时在CSGII系统填报设备变更',
          time: ''
        }, {
          label: '检查运行部门是否及时在MIS系统审核变更单',
          time: ''
        }, {
          label: '负责已发现问题是否按时得到整改',
          time: ''
        }],
        dataList2: [{
          label: '参与运行检修规程审查',
          time: ''
        }, {
          label: '检查新设备投产后运规是否及时得到更新，并且更新内容正确无误',
          time: ''
        }, {
          label: '检查已发现问题是否按时得到整改',
          time: ''
        }],
        dataList3: [{
          label: '检查是否按期开展设备状态评价及基准风险评估',
          time: ''
        }, {
          label: '检查生产设备管理部是否发布设备管控策略',
          time: ''
        }, {
          label: '检查特殊运行方式、设备健康状况、天气情况等因素引起的风险变化后，是否开展动态评价工作',
          time: ''
        }, {
          label: '检查专业专责是否有设备运维计划的制定',
          time: ''
        }, {
          label: '检查巡维中心/专业班组是否有设备工作计划的制定',
          time: ''
        }],
        dataList4: [{
          label: '根据设备缺陷、隐患、异常跟踪等情况，负责设备状态评价，确保设备状态评价结果是否与设备实际情况相符',
          time: ''
        }],
        dataList5: [{
          label: '检查运维策略、运维计划已制定',
          time: ''
        }, {
          label: '检查巡视表单是否填写',
          time: ''
        }, {
          label: '检查特殊运行方式、设备健康状况、天气情况等因素引起的风险变化后，是否根据动态评价结果，采取动态管控',
          time: ''
        }, {
          label: '核对反措计划是否和反措文件的要求时间一致',
          time: ''
        }, {
          label: '检查运维计划是否涵盖要求开展的家族缺陷控制内容',
          time: ''
        }, {
          label: '检查缺陷是否及时上报，并重点关注试验、运维、检修过程中发现的缺陷',
          time: ''
        }, {
          label: '检查CSGII系统中缺陷定级是否准确，流转过程是否及时',
          time: ''
        }, {
          label: '检查专业专责是否制定消缺计划的时间节点',
          time: ''
        }, {
          label: '检查缺陷是否按期消缺',
          time: ''
        }, {
          label: '检查隐患是否及时上报',
          time: ''
        }, {
          label: '检查CSGII系统检修维护模块计划闭环情况',
          time: ''
        }],
        dataList6: [{
          label: '负责每月对巡视数据进行汇总分析，完成月度运行分析报告编制',
          time: ''
        }, {
          label: '检查设备运维策略内容是否正确合理',
          time: ''
        }, {
          label: '检查特殊巡视、专业巡视效果',
          time: ''
        }, {
          label: '跟踪反措计划执行情况及工作内容是否合理',
          time: ''
        }],
        dataList7: [{
          label: '在规定时间内检查计划的发布情况是否及时',
          time: ''
        }, {
          label: '检查发布后的计划内容（定检/预试/检修的类别、周期、下次停电时间一致）是否和运行规程的专业维护策略一致',
          time: ''
        }, {
          label: '核对反措计划是否和反措文件的要求时间一致',
          time: ''
        }, {
          label: '检查计划（巡视、维护）是否完成，记录是否完善',
          time: ''
        }],
        dataList8: [{
          label: '检查设备检修策略是否正确合理',
          time: ''
        }, {
          label: '检查试验结论是否正确',
          time: ''
        }],
        dataList9: [{
          label: '检查需报废物资是否上报报废物资需求计划',
          time: ''
        }, {
          label: '检查物资管理人员是否按报废物资计划及相关制度时限进行物资报废',
          time: ''
        }]
      }
    },
    methods: {
      handleChange() {
        // console.log(val);
      },
      submit() {
        alert('提交成功');
        history.go(-1);
      }
    },
    components: {
  
    }
  }
</script>

