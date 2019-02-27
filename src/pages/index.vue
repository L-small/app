<template>
  <div class="index">
    <Header :title="'设备主人'"></Header>
    <div class="user" v-if="userInfo.name">
      <p>当前用户：{{userInfo.name}}</p>
      <p>用户类别：{{userInfo.classify === '1' ? '生产类' : '辅助类'}}</p>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col class="cell" :span="6" v-for="(item, index) in userFuns">
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
        userFuns: [{
          type: 'month',
          icon: require('../assets/icon_prod.png'),
          name: '个人计划编辑(生产类)'
        }, {
          type: 'assistMonth',
          icon: require('../assets/icon_assist.png'),
          name: '个人计划编辑(辅助类)'
        }, {
          type: 'todayList',
          icon: require('../assets/icon_plan.png'),
          name: '提交计划'
        }, {
          type: 'score',
          icon: require('../assets/icon_score.png'),
          name: '查看绩效'
        }, {
          type: 'list',
          query: 'user',
          icon: require('../assets/icon_device.png'),
          name: '管辖设备'
        }, 
        // {
        //   type: 'equipApply',
        //   icon: require('../assets/icon_list.png'),
        //   name: '设备主人调整申请'
        // }, 
        {
          type: 'historyMonth',
          icon: require('../assets/icon_history.png'),
          name: '查看月计划'
        }, {
          type: 'monScoreList',
          icon: require('../assets/icon_monlist.png'),
          name: '查看月度得分'
        }, {
          type: 'changePassword',
          icon: require('../assets/icon_password.png'),
          name: '修改密码'
        }, {
          type: '',
          icon: require('../assets/icon_changeuser.png'),
          name: '退出'
        } 
        // {
        //   type: 'delay',
        //   icon: require('../assets/icon_delay.png'),
        //   name: '滞后计划'
        // }
        ],
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.diffPlan()
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
      diffPlan() {
        if (this.userInfo.classify === '1') {
          this.userFuns.splice(1,1)
        } else if (this.userInfo.classify === '2') {
          this.userFuns.splice(0,1)
        }
      }
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
    justify-content: space-between;
    height: 35px;
    padding: 0 15px;
    line-height: 35px;
    font-size: 14px;
    /* background: #48a4bf; */
    background: #fff;
    color: #000;
    border-bottom: 1px solid #ddd;
  }

  .fun {
    display: flex;
    justify-content: flex-start;
  }
  
  .item {
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
