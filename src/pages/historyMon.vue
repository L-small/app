<template>
  <div class="score">
    <div class="condition">
      <p>选择日期：</p>
      <el-date-picker
        v-model="time"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
    <div class="button">
      <el-button class="btn" type="success" @click="getData">查询</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'score',
    data() {
      return {
        tableData: [{
          name: '吴鑫',
          score: 631,
          detail: 354,
          diff: 87
        }],
        time: '',
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      getData() {
        let params = {
          time: this.time,
          user: this.userInfo
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            this.tableData = res.data
          } else {
            alert(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
.condition {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  margin: 15px auto 35px;
  text-align: center;
}
.button .btn {
  width: 200px;
}
</style>
