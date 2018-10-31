<template>
  <div class="user">
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
          type: 'info',
          icon: require('../assets/icon_table.png'),
          name: '提交今日计划'
        }, {
          type: 'score',
          icon: require('../assets/icon_score.png'),
          name: '查看绩效'
        }, {
          type: 'list',
          icon: require('../assets/icon_table.png'),
          name: '管辖设备'
        }, {
          type: 'userInfo',
          icon: require('../assets/icon_user.png'),
          name: '个人信息'
        }]
      }
    },
    created() {
      try {
        localStorage.setItem('test', '123')
      } catch(e) {
        console.log(e)
        alert('buxing')
      }
      try {
        document.title = '测试'
      } catch(e) {
        console.log(e)
        alert('title buxing')
      }
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
  
  .item.icon {
    background: #19BBFE;
  }
</style>
