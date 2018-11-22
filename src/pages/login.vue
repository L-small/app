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
    </el-form>
    <div class="footer">
      <el-button class="button" type="primary" @click="submit">登录</el-button>
    </div>
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

  .footer {
    width: 400px;
    margin: 0 auto;
  }

  .footer .button {
    width: 100%;
  }
</style>

<script>
  export default {
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
          label: '田金周',
          permission: 'admin'
        }, {
          value: '王金斌',
          label: '王金斌',
          permission: 'admin'
        }, {
          value: '刘钢',
          label: '刘钢',
          permission: 'user'
        }, {
          value: '孙琼仙',
          label: '孙琼仙',
          permission: 'user'
        }, {
          value: '马锦波',
          label: '马锦波',
          permission: 'admin'
        }, {
          value: '陈娟2',
          label: '陈娟2',
          permission: 'user'
        }, {
          value: '吴鑫',
          label: '吴鑫',
          permission: 'user'
        }],
        userInfo: {}
      }
    },
    created() {
      // this.getUserName()
    },
    methods: {
      onSubmit() {
        let permission;
        this.userNames.map((item) => {
          if (item.value === this.form.userName) {
            permission = item.permission
          }
        })
        this.$router.push({name: 'index', query: {permission: permission}})
      },
      getUserName() {
        this.$http.get('http://112.74.55.229:8090/bc/getuser.xhtml')
        .then((res) => {
          if (res.data.code === 200) {
            // console.log(res.data)
          }
        })
      },
      submit() {
        let params = {
          name: this.form.userName,
          password: this.form.password
        }
        this.$http.get('http://112.74.55.229:8090/bc/loginuser.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            localStorage.setItem('userInfo', JSON.stringify(JSON.parse(res.body.data)[0]))
            this.userInfo = JSON.parse(res.body.data)[0]
            if (this.userInfo.uid === '1') {
              this.$router.push({name: 'index', query: {permission: 'admin'}})
            } else {
              this.$router.push({name: 'index', query: {permission: 'user'}})
            }
          } else {
            alert('登录失败')
          }
        })
      }
    },
    components: {
  
    }
  }
</script>

