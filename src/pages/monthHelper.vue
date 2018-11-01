<template>
  <div class="month">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="col" title="消防设施（基本要求）" name="1">
        <div class="item" v-for="item in dataList1">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="消防设施（精益要求）" name="2">
        <div class="item" v-for="item in dataList1">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="标识、划线" name="3">
        <div class="item" v-for="item in dataList2">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="通风照明" name="4">
        <div class="item" v-for="item in dataList3">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="建筑物构筑物" name="5">
        <div class="item" v-for="item in dataList4">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="防小动物设施" name="6">
        <div class="item" v-for="item in dataList5">
          <p>{{item.label}}</p>
          <el-date-picker class="picker" v-model="item.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item class="col" title="生活设施" name="7">
        <div class="item" v-for="item in dataList6">
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
          label: '检查变电站是否建立应有、现有消防设施图档清册',
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
          label: '检查消防设施的图档资料是否按时移交及齐全',
          time: ''
        }, {
          label: '负责已发现问题是否按时得到整改（图纸纠错）',
          time: ''
        }, {
          label: '检查基础数据是否正确、完备',
          time: ''
        }, {
          label: '检查电子台账、卡物一致性',
          time: ''
        }, {
          label: '负责已发现问题是否按时得到整改（台账纠错）',
          time: ''
        }, {
          label: '检查运维计划已制定',
          time: ''
        }, {
          label: '检查巡视表单是否填写',
          time: ''
        }, {
          label: '检查需报废物资是否上报报废物资需求计划',
          time: ''
        }, {
          label: '检查物资管理人员是否按报废物资计划及相关制度时限进行物资报废',
          time: ''
        }],
        dataList2: [{
          label: '参与运行检修规程审查',
          time: ''
        }, {
          label: '检查已发现问题是否按时得到整改',
          time: ''
        }],
        dataList3: [{
          label: '验收记录',
          time: ''
        }, {
          label: '检查运维计划已制定',
          time: ''
        }, {
          label: '是否上报维护需求计划及计划闭环情况',
          time: ''
        }],
        dataList4: [{
          label: '验收记录',
          time: ''
        }, {
          label: '检查运维计划已制定',
          time: ''
        }, {
          label: '是否上报维护需求计划及计划闭环情况',
          time: ''
        }, {
          label: '检查电子台账、卡物一致性',
          time: ''
        }, {
          label: '负责已发现问题是否按时得到整改',
          time: ''
        }],
        dataList5: [{
          label: '验收记录',
          time: ''
        }, {
          label: '检查运维计划已制定',
          time: ''
        }, {
          label: '是否上报维护需求计划',
          time: ''
        }],
        dataList6: [{
          label: '验收记录',
          time: ''
        }, {
          label: '检查运维计划已制定',
          time: ''
        }, {
          label: '是否上报维护需求计划及计划闭环情况',
          time: ''
        }, {
          label: '建立管理要求',
          time: ''
        }],
        dataList6: [{
          label: '验收记录',
          time: ''
        }, {
          label: '定期进行检查',
          time: ''
        }, {
          label: '是否上报维护需求计划',
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

