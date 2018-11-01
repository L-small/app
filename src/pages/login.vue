<template>
  <div class="login">
    <p class="title">三宝巡维中心设备主人管理</p>
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <el-form-item label="班组选择">
        <el-select class="item" v-model="form.group" placeholder="请选择">
          <el-option v-for="item in groups" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户名">
        <el-select class="item" v-model="form.userName" filterable placeholder="请选择">
          <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="item" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button">取消</el-button>
        <el-button class="button" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
  .title {
    margin: 180px;
    text-align: center;
  }
  
  .form {
    width: 400px;
    margin: 270px auto 0 auto;
  }
  
  .form .item {
    width: 320px;
  }

  .form .button {
    width: 150px;
  }
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          group: '一班',
          userName: '田金周',
          password: ''
        },
        groups: [{
          value: '一班',
          label: '一班'
        }, {
          value: '二班',
          label: '二班'
        }],
        userNames: [{
          value: '田金周',
          label: '田金周'
        }, {
          value: '王金斌',
          label: '王金斌'
        }, {
          value: '刘钢',
          label: '刘钢'
        }, {
          value: '孙琼仙',
          label: '孙琼仙'
        }, {
          value: '马锦波',
          label: '马锦波'
        }, {
          value: '陈娟2',
          label: '陈娟2'
        }, {
          value: '吴鑫',
          label: '吴鑫'
        }]
      }
    },
    methods: {
      onSubmit() {
        if (this.form.userName === '田金周' || this.form.userName === '马锦波' || this.form.userName === '王金斌') {
          this.$router.push({name: 'adminIndex'})
        } else {
          this.$router.push({name: 'index'})
        }
      }
    },
    components: {
  
    }
  }
</script>

