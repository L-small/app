<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="class" label="班次">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="group" label="设备主人分类">
      </el-table-column>
      <el-table-column prop="status" label="计划编辑情况">
      </el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status !== '已编辑'">提醒</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="notify">
      <el-button type="primary" @click="notify">通知所有未编辑人员</el-button>
    </div>
  </div>
</template>

<style scoped>
  .notify {
    margin-top: 40px;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tableData: [{
          class: 1,
          name: '王金斌',
          group: '辅助类',
          status: '已编辑'
        }, {
          
          class: 2,
          name: '朱金勇',
          group: '辅助类',
          status: ''
        }, {
          
          class: 1,
          name: '张丽珍',
          group: '辅助类',
          status: ''
        }, {
          
          class: 1,
          name: '吴鑫',
          group: '辅助类',
          status: '已编辑'
        }]
      }
    },
    methods: {
      notify() {
        alert('已发送通知给相关人员')
        history.go(-1)
      }
    },
    components: {
  
    }
  }
</script>

