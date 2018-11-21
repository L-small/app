<template>
  <div class="index">
    <div v-if="permission === 'user'">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in userFuns">
          <div class="item icon" @click="toFun(item)">
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="permission === 'admin'">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in adminFuns">
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
  export default {
    data() {
      return {
        permission: 'user',
        userFuns: [{
          type: 'month',
          query: 'prod',
          icon: require('../assets/icon_prod.png'),
          name: '个人计划编辑(生产类)'
        }, {
          type: 'month',
          query: 'assist',
          icon: require('../assets/icon_helper.png'),
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
          name: '查看历史计划'
        }, {
          type: '',
          icon: require('../assets/icon_changeuser.png'),
          name: '切换用户'
        }, {
          type: 'changePassword',
          icon: require('../assets/icon_password.png'),
          name: '修改密码'
        }, 
        // {
        //   type: 'delay',
        //   icon: require('../assets/icon_delay.png'),
        //   name: '滞后计划'
        // }
        ],
        adminFuns: [{
          type: 'adminToday',
          icon: require('../assets/icon_approval.png'),
          name: '审批计划'
        }, 
        // {
        //   type: 'delay',
        //   icon: require('../assets/icon_delay.png'),
        //   name: '滞后计划'
        // }, 
        {
          type: 'adminMonth',
          query: 'prod',
          icon: require('../assets/icon_prod.png'),
          name: '审批月计划(生产类)'
        }, {
          type: 'adminMonth',
          query: 'assist',
          icon: require('../assets/icon_helper.png'),
          name: '审批月计划(辅助类)'
        }, {
          type: 'adminScore',
          icon: require('../assets/icon_score.png'),
          name: '设定绩效'
        }, {
          type: 'adminScoreList',
          icon: require('../assets/icon_history.png'),
          name: '查看历史绩效'
        }, {
          type: 'adminAdjust',
          icon: require('../assets/icon_adjust.png'),
          name: '设备主人调整'
        }, {
          type: 'list',
          query: 'admin',
          icon: require('../assets/icon_device.png'),
          name: '设备主人清单'
        }, {
          type: 'adminHistoryMon',
          icon: require('../assets/icon_list.png'),
          name: '查看月计划'
        }]
      }
    },
    created() {
      this.initData()
    },
    methods: {
      toFun(item) {
        if (item.type) {
          this.$router.push({name: item.type, query: {type: item.query}})
        } else {
          this.$router.push({name: 'login'})
        }
      },
      initData() {
        this.permission = this.$route.query.permission
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
  .index {
    padding: 15px;
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
    border: 1px solid #ddd;
    text-align: center;
    color: #fff;
  }
  
  .item img {
    width: 28px;
    height: 28px;
    margin-bottom: 15px;
  }
  
  .item.icon {
    background: #19BBFE;
  }
</style>
