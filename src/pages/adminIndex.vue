<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in adminFuns">
        <div class="item" :class="item.class" @click="toFun(item)">
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
          class: 'icon1',
          type: 'adminToday',
          icon: require('../assets/icon_prod.png'),
          name: '查看今日计划'
        }, {
          class: 'icon1',
          type: 'adminMonth',
          icon: require('../assets/icon_prod.png'),
          name: '查看班组月计划'
        }, {
          class: 'icon1',
          type: 'adminScore',
          icon: require('../assets/icon_prod.png'),
          name: '设定绩效'
        }, {
          class: 'icon1',
          type: 'adminList',
          icon: require('../assets/icon_prod.png'),
          name: '设备主人清单'
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
