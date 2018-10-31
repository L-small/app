<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in funs">
        <div class="item" :class="item.class" @click="toFun(item)">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </div>
      </el-col>
    </el-row>
    <div class="fun">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        funs: [{
          class: 'icon1',
          type: 'month',
          icon: require('../assets/icon_prod.png'),
          name: '个人计划编辑(生产类)'
        }, {
          class: 'icon2',
          type: '',
          icon: require('../assets/icon_assist.png'),
          name: '个人计划编辑(辅助类)'
        }, {
          class: 'icon3',
          type: 'info',
          icon: require('../assets/icon_table.png'),
          name: '基本信息表'
        }, {
          class: 'icon4',
          type: 'score',
          icon: require('../assets/icon_score.png'),
          name: '查看得分'
        }, {
          class: 'icon5',
          type: 'list',
          icon: require('../assets/icon_table.png'),
          name: '查看设备主人清单'
        }, {
          class: 'icon6',
          type: 'userInfo',
          icon: require('../assets/icon_user.png'),
          name: '个人信息'
        }],
        curEnv: 'user'
      }
    },
    created() {
      if (this.$route.params.type === 'user') {
        this.curEnv = 'user'
      } else {
        this.curEnv = 'admin'
      }
    },
    methods: {
      toFun(item) {
        this.$router.push({name: item.type})
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
  .fun {
    display: flex;
    justify-content: flex-start;
  }
  
  .item {
    width: 130px;
    height: 140px;
    max-width: 140px;
    max-height: 180px;
    margin: 20px auto;
    padding: 20px 5px 0px;
    border: 1px solid #ddd;
    text-align: center;
    color: #fff;
  }
  .item.icon1 {
    background: #19BBFE;
  } 
  .item.icon2 {
    background: #FF7262;
  }
  .item.icon3 {
    background: #E5910A;
  }
  .item.icon4 {
    background: #BE3C0B;
  }
  .item.icon5 {
    background: #1B3F53;
  }
  .item.icon6 {
    background: #34790E;
  }
  .item.icon7 {
    background: #52A84C;
  }
</style>
