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
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50">
    </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="personal" label="个人30%绩效">
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
    name: 'index',
    data() {
      return {
        time: '',
        tableData: [{
          index: 1,
          name: '朱金勇',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 2,
          name: '王金斌',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 3,
          name: '马锦波',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 4,
          name: '高红',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 5,
          name: '代红丽',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 6,
          name: '吴鑫',
          personal: '',
          real: '',
          diff: ''
        }]
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        let params = {
          uid: '',
          time: this.time
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
