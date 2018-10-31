<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in adminFuns">
        <div class="item icon" @click="toFun(item)">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        adminFuns: [{
          type: 'adminToday',
          icon: require('../assets/icon_table.png'),
          name: '查看今日计划'
        }, {
          type: 'adminMonth',
          icon: require('../assets/icon_prod.png'),
          name: '查看班组月计划'
        }, {
          type: 'adminScore',
          icon: require('../assets/icon_score.png'),
          name: '设定绩效'
        }, {
          type: 'adminList',
          icon: require('../assets/icon_assist.png'),
          name: '设备主人清单'
        }, {
          type: 'adminMonList',
          icon: require('../assets/icon_list.png'),
          name: '查看月计划完成情况'
        }]
      }
    },
    created() {},
    methods: {
      toFun(item) {
        this.$router.push({
          name: item.type
        })
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
    height: 120px;
    max-width: 140px;
    max-height: 180px;
    margin: 20px auto;
    padding: 40px 5px 0px;
    border: 1px solid #ddd;
    text-align: center;
    color: #fff;
  }
  
  .item.icon {
    background: #19BBFE;
  }
  .item img {
    width: 24px;
    height: 24px;
  }
</style>
