<template>
  <div class="score">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column label="个人30%绩效">
        <template slot-scope="scope">
          <el-input></el-input>
        </template>
      </el-table-column>
      <el-table-column label="实际分配所得">
        <template slot-scope="scope">
          <el-input></el-input>
        </template>
      </el-table-column>
      <el-table-column label="差额">
        <template slot-scope="scope">
          <el-input></el-input>
        </template>
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
          name: '朱金勇'
        }, {
          index: 2,
          name: '王金斌'
        }, {
          index: 3,
          name: '马锦波'
        }, {
          index: 4,
          name: '高红'
        }, {
          index: 5,
          name: '代红丽'
        }, {
          index: 6,
          name: '吴鑫'
        }]
      }
    },
    created() {
  
    },
    methods: {
      submit() {
        alert('评分成功');
        history.go(-1);
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
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
