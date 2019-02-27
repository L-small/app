<template>
  <div class="score">
    <Header :title="'员工绩效'"></Header>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="count" label="奖励单元总数">
      </el-table-column>
      <el-table-column prop="score" label="绩效分数">
      </el-table-column>
      <el-table-column prop="rank" label="绩效等级">
      </el-table-column>
      <el-table-column prop="finial" label="最终得分">
      </el-table-column>
      <el-table-column prop="smallMoney" label="划小奖励金额">
      </el-table-column>
      <el-table-column prop="deviceMaster" label="设备主人奖励单元">
      </el-table-column>
      <el-table-column prop="deviceScore" label="设备主人获得绩效">
      </el-table-column>
      <el-table-column prop="distance" label="公里费">
      </el-table-column>
      <el-table-column prop="news" label="新闻考核">
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        tableData: [{
          index: 1,
          name: '朱金勇',
          count: '10842',
          score: '88',
          rank: 'B',
          finial: '90',
          smallMoney: '744',
          deviceMaster: '11406',
          deviceScore: '511',
          distance: '23',
          news: '0'
        }, {
          index: 2,
          name: '王金斌',
          count: '10842',
          score: '92',
          rank: 'A',
          finial: '100',
          smallMoney: '764',
          deviceMaster: '12406',
          deviceScore: '691',
          distance: '10',
          news: '0'
        }, {
          index: 3,
          name: '马锦波',
          count: '10842',
          score: '110',
          rank: 'A',
          finial: '110',
          smallMoney: '864',
          deviceMaster: '12806',
          deviceScore: '711',
          distance: '0',
          news: '0'
        }, {
          index: 4,
          name: '高红',
          count: '10842',
          score: '92',
          rank: 'B',
          finial: '80',
          smallMoney: '644',
          deviceMaster: '12806',
          deviceScore: '511',
          distance: '0',
          news: '0'
        }, {
          index: 5,
          name: '吴鑫',
          count: '10842',
          score: '80',
          rank: 'B',
          finial: '90',
          smallMoney: '564',
          deviceMaster: '10806',
          deviceScore: '341',
          distance: '32',
          news: '0'
        }]
      }
    },
    created() {
  
    },
    methods: {
      submit() {
        this.$message('评分成功')
        history.go(-1);
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
.score {
  margin-top: 50px;
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
