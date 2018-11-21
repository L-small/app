<template>
  <div class="login">
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="原密码">
        <el-input class="item" v-model="form.password"></el-input>
      </el-form-item> -->
      <el-form-item label="新密码">
        <el-input class="item" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input class="item" v-model="form.again"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button class="button">取消</el-button> -->
        <el-button class="button" type="primary" @click="submit">确认</el-button>
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
    margin: 70px auto 0 auto;
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
    data() {
      return {
        form: {
          password: '',
          again: ''
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
        }],
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    methods: {
      submit() {
        if (this.form.password !== this.form.again) {
          alert('请确认密码一致')
          return
        }
        let params = {
          id: this.userInfo.id,
          password: this.form.password
        }
        this.$http.get('http://192.168.0.101:8080/bc/passworduser.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            alert('修改成功')
            history.go(-1)
          }
        })
      }
    },
    components: {
  
    }
  }
</script>

