<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in userFuns">
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
        userFuns: [{
          type: 'month',
          icon: require('../assets/icon_prod.png'),
          name: '个人计划编辑(生产类)'
        }, {
          type: 'monthHelper',
          icon: require('../assets/icon_helper.png'),
          name: '个人计划编辑(辅助类)'
        }, {
          type: 'today',
          icon: require('../assets/icon_table.png'),
          name: '提交计划'
        }, {
          type: 'score',
          icon: require('../assets/icon_score.png'),
          name: '查看绩效'
        }, {
          type: 'list',
          icon: require('../assets/icon_assist.png'),
          name: '管辖设备'
        }, {
          type: 'monList',
          icon: require('../assets/icon_list.png'),
          name: '查看计划完成情况'
        }]
      }
    },
    created() {
    },
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
    width: 110px;
    height: 120px;
    margin: 20px auto;
    padding: 40px 5px 0px;
    border: 1px solid #ddd;
    text-align: center;
    color: #fff;
  }
  
  .item img {
    width: 24px;
    height: 24px;
  }
  
  .item.icon {
    background: #19BBFE;
  }
</style>
