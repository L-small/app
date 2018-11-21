<template>
  <div class="list">
    <div class="condition">
      <div class="item">
        <p>选择日期：</p>
        <el-date-picker
          v-model="time"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
      <div class="item">
        <p>分类：</p>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in types"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="button">
      <el-button class="btn" type="success" @click="getData">查询</el-button>
    </div>
    <el-collapse v-model="activeNames" v-for="item in tableData">
      <el-collapse-item v-for="(subItem, index) in item.list" class="col" :title="item.name + '的月计划'" :name="index">
        <div class="item">
          <p class="name">{{subItem.name}}</p>
          <p class="success" :class="{'success': subItem.status === 'success', 'fail': subItem.status === 'fail'}">{{subItem.status}}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeNames: '1',
        time: '',
        types: ['生产类', '辅助类'],
        type: '',
        tableData: [{
          name: '王金斌',
          list: [{
            name: '设备生产资料',
            status: 'success'
          }]
        }]
      }
    },
    created() {
      this.getData();
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
      getData() {
        let params = {
          time: '',
          type: ''
        }
        this.$http.get(url, {params: params})
        .then((res) => {
          if (res.code === 200) {
            this.tableData = res.data
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
  .notify {
    margin-top: 40px;
    text-align: center;
  }
  .condition {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .condition .item {
    display: flex;
    align-items: center;
  }
  .button {
    margin: 15px auto 35px;
    text-align: center;
  }
  .button .btn {
    width: 200px;
  }
  .col .item {
    display: flex;
    justify-content: space-between;
  }
</style>