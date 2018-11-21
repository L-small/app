<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="class" label="班次">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="status" label="计划编辑情况">
      </el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status === '未提交'" @click="notify">提醒</el-button>
          <el-button v-if="scope.row.status === '已提交'" @click="toApproval(scope.row)">审批</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="notify">
      <el-button type="primary" @click="notifyAll">通知所有未编辑人员</el-button>
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
          status: '未提交'
        }, {
          
          class: 2,
          name: '朱金勇',
          status: '已提交'
        }, {
          
          class: 1,
          name: '张丽珍',
          status: '已提交'
        }, {
          
          class: 1,
          name: '吴鑫',
          status: '已通过'
        }]
      }
    },
    created() {
      this.init();
    },
    methods: {
      notify(item) {
        let params = {
          list: [item.id]
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            alert('已通知所有未完成人员')
          } else {
            alert('请重试')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      notifyAll() {
        let array = []
        this.tableData.map((item) => {
          if (item.status) {
            array.push(item.id)
          }
        })
        let params = {
          list: array
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            alert('已通知所有未完成人员')
          } else {
            alert('请重试')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      init() {
        let url = ''
        if (this.$route.query.type === 'prod') {
          url = ''
        } else {
          url = ''
        }
        this.$http.get(url)
        .then((res) => {
          if (res.code === 200) {
            this.tableData = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      toApproval(item) {
        this.$router.push({name: 'adminMonDetail', query: {userId: item.name}})
      }
    },
    components: {
  
    }
  }
</script>

