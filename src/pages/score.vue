<template>
  <div class="score">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="score" label="个人30%绩效">
      </el-table-column>
      <el-table-column prop="detail" label="实际分配所得">
      </el-table-column>
      <el-table-column prop="diff" label="差额">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'score',
    data() {
      return {
        tableData: [{
          name: '王金斌',
          score: 631,
          detail: 654,
          diff: 87
        }]
      }
    },
    created() {
  
    },
    methods: {},
    components: {
  
    }
  }
</script>

<style scoped>
</style>
