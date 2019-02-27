<template>
  <div class="index">
    <Header :title="'设备主人'"></Header>
    <div class="user" v-if="userInfo.name">
      <p>当前用户：{{userInfo.name}}</p>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col class="cell" :span="6" v-for="(item, index) in adminFuns">
          <div class="item icon" @click="toFun(item)">
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    data() {
      return {
        adminFuns: [{
          type: 'adminToday',
          icon: require('../assets/icon_approval.png'),
          name: '审批计划'
        }, {
          type: 'adminMonth',
          icon: require('../assets/icon_prod.png'),
          name: '审批月计划(生产类)'
        }, {
          type: 'adminAssistMonth',
          icon: require('../assets/icon_assist.png'),
          name: '审批月计划(辅助类)'
        }, {
          type: 'adminHistoryMon',
          icon: require('../assets/icon_list.png'),
          name: '查看月计划'
        }, {
          type: 'adminScore',
          icon: require('../assets/icon_score.png'),
          name: '设定绩效'
        }, {
          type: 'adminScoreList',
          icon: require('../assets/icon_history.png'),
          name: '查看绩效'
        },  {
          type: 'adminMonScore',
          icon: require('../assets/icon_monscore.png'),
          name: '设定月度得分'
        }, {
          type: 'adminMonScoreList',
          icon: require('../assets/icon_monlist.png'),
          name: '查看月度得分'
        }, {
          type: 'adminAdjust',
          icon: require('../assets/icon_adjust.png'),
          name: '设备信息维护'
        }, {
          type: 'list',
          query: 'admin',
          icon: require('../assets/icon_device.png'),
          name: '设备主人清单'
        }, {
          type: 'adminUserInfo',
          icon: require('../assets/icon_userinfo.png'),
          name: '维护人员信息'
        }, {
          type: 'adminResetPassword',
          icon: require('../assets/icon_password.png'),
          name: '重置用户密码'
        }, {
          type: '',
          icon: require('../assets/icon_changeuser.png'),
          name: '退出'
        }],
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    methods: {
      toFun(item) {
        if (item.type) {
          this.$router.push({name: item.type, query: {type: item.query}})
        } else {
          localStorage.setItem('userInfo', '')
          this.$router.push({name: 'login'})
        }
      },
      // getToday() {
      //   const params = {
      //     id: this.userInfo.id
      //   }
      //   this.$http.get('http://112.74.55.229:8090/bc/showpeopleplantoday.xhtml', {params: params})
      //   .then((res) => {
      //     if (res.body.code === 200) {
      //       if (res.body.data.length !== 0) {
              
      //       }
      //       this.todayList = JSON.parse(res.body.data)
      //     } else {
      //       this.successFg = false
      //       alert("请求失败")
      //     }
      //   })
      //   .catch((err) => {
      //     alert("请求失败")
      //   })
      // }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
.index {
  margin-top: 50px;
}
  .content {
    padding: 15px;
  }

  .user {
    display: flex;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    color: #000;
    border-bottom: 1px solid #ddd;
  }

  .fun {
    display: flex;
    justify-content: flex-start;
  }
  
  .item {
    position: relative;
    width: 110px;
    height: 120px;
    margin: 20px auto;
    padding: 30px 5px 0px;
    /* border: 1px solid #ddd; */
    text-align: center;
    color: #333;
  }
  .cell {
    position: relative;
  }
  .cell:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0px;
    width: 1px;
    height: 80%;
    background: #ddd;
    transform: translateY(-50%);
  }
  .cell:nth-of-type(4n):after {
    display: none;
  }
  .cell::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 80%;
    height: 1px;
    background: #ddd;
    transform: translateX(-50%);
  }
  
  .item img {
    width: 35px;
    height: 35px;
    margin-bottom: 15px;
  }
  
  .item.icon {
    /* background: #50a095; */
  }

  @media screen and (max-width: 700px) {
    .user {
      font-size: 12px;
    }
    .item {
      width: auto;
      height: 80px;
      margin: 10px auto;
      padding: 10px 0px 0px;
      text-align: center;
      color: #333;
      font-size: 12px;
    }
    .item img {
      width: 35px;
      height: 35px;
      margin-bottom: 8px;
    }
  }
</style>
