<template>
  <div class="login">
    <p class="title">三宝巡维中心设备主人管理</p>
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <el-form-item label="班组选择">
        <el-select class="item" v-model="form.group" placeholder="请选择" @change="changeClass">
          <el-option v-for="item in groups" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户名">
        <el-select class="item" v-model="form.userName" placeholder="请选择" @change="changeUser">
          <el-option v-for="item in userNames" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="item" v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button class="button" @click="submit">登录</el-button>
    </div>
  </div>
</template>

<script>
  import userList from '../tools/userList.json'
  export default {
    data() {
      return {
        form: {
          group: '0',
          userName: '田金周',
          password: ''
        },
        groups: [{
          value: '0',
          label: '一班'
        }, {
          value: '1',
          label: '二班'
        }],
        userNames: [],
        userInfo: {},
        ajaxFg: false,
        scoreList: []
      }
    },
    created() {
      if (localStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.getToday()
      }
      this.changeClass()
      this.serchLastMonScore()
    },
    methods: {
      // 每月月初插入基础分数据
      insertValue() {
        const all = []
        this.scoreList.map((item) => {
          let params = {
            id: item.id,
            addscore: 0,
            totalvalue: item.totalvalue,
            month: new Date().getMonth() + 1
          }
          let name = this.$http.get('http://112.74.55.229:8090/bc/insertvalueuser.xhtml', {params: params})
          all.push(name)
        })
        Promise.all(all).then(() => {
          this.getToday()
        })
      },
      serchLastMonScore() {
        let params = {
          month: this.lastMon(),
          id: 1
        }
        this.$http.get('http://112.74.55.229:8090/bc/getalluseraddvalue.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.scoreList = JSON.parse(res.body.data)
            this.insertValue()
          }
        })
      },
      lastMon() {
        const month = new Date().getMonth() + 1
        if (month === 1) {
          return 12
        } else {
          return month - 1
        }
      },
      init() {
        if (localStorage.getItem('userInfo')) {
          this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
          if (this.userInfo.uid === '1') {
            this.$router.push({name: 'adminIndex'})
            } else {
            this.$router.push({name: 'index'})
          }
        }
      },
      changeClass() {
        this.userNames = userList.user[this.form.group].list
      },
      changeUser() {
        this.form.password = ''
      },
      // getUserName() {
      //   this.$http.get('http://112.74.55.229:8090/bc/getuser.xhtml')
      //   .then((res) => {
      //     if (res.data.code === 200) {
      //     }
      //   })
      // },
      submit() {
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        let params = {
          name: this.form.userName,
          password: this.form.password
        }
        this.$http.get('http://112.74.55.229:8090/bc/loginuser.xhtml', {params: params})
        .then((res) => {
          this.ajaxFg = false
          if (res.body.code === 200) {
            localStorage.setItem('userInfo', JSON.stringify(JSON.parse(res.body.data)[0]))
            this.userInfo = JSON.parse(res.body.data)[0]
            if (this.userInfo.uid === '1') {
              this.$router.push({name: 'adminIndex'})
            } else {
              this.$router.push({name: 'index'})
            }
          } else {
            this.$message('登录失败');
          }
        })
        .catch((err) => {
          this.ajaxFg = false
          this.$message('登录失败');
          console.log(err)
        })
      },
      getToday() {
        const params = {
          id: this.userInfo.id
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplantoday.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            const data = JSON.parse(res.body.data)
            if (data.length !== 0) {
              this.$message(`您今日有${data.length}条任务待完成`);
            }
            this.init()
          } else {
            this.$message(res.body.msg);
          }
        })
        .catch((err) => {
          this.$message(err);
        })
      }
    },
    components: {
  
    }
  }
</script>


<style scoped>
  .login {
    background: url('../assets/login.png') no-repeat top;
    background-position: 50% 10%;
    background-size: contain;
  }
  .bg {
    position: fixed;
    top: 8%;
    left: 8%;
    width: 400px;
    z-index: -1; 
  }

  .title {
    padding: 100px 0 40px 0;
    margin: 0px auto;
    font-size: 18px;
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
    color: #fff;
    background: #50a095;
  }

  @media screen and (max-width: 700px) {
    .title {
      margin: 0px auto;
      font-size: 18px;
      text-align: center;
    }
    
    .form {
      width: 80%;
      margin: 200px auto 0 auto;
    }
    
    .form .item {
      width: 100%;
    }

    .footer {
      width: 80%;
      margin: 0 auto;
    }

    .footer .button {
      width: 100%;
      color: #fff;
      background: #50a095;
    }
  }
</style>
