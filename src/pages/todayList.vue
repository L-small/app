<template>
  <div class="today">
    <ul v-if="successFg">
      <li v-for="(item, index) in todayList" :key="index">
        <div class="item">
          <p class="dimension">{{item.dimension}}</p>
          <p>（{{item.require | filterRequire}}）{{item.job}}</p>
        </div>
        <el-button class="btn" @click="toSubmit(item)">提交</el-button>
      </li>
    </ul>
    <p v-else class="tip">暂无计划</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      todayList: [],
      userInfo: {},
      ajaxData: {},
      successFg: true
    }
  },
  filters: {
    filterRequire(item) {
      if (item === '1') {
        return '基本要求'
      } else {
        return '精益要求'
      }
    }
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.initData()
  },
  methods: {
    toSubmit(item) {
      this.$router.push({name: 'submit', params: {info: JSON.stringify(item)}})
    },
    getMonth() {
      const date = new Date()
      const year = date.getFullYear()
      const mon = date.getMonth() + 1
      const day = date.getDay()
      return `${yaer}-${mon}-${day}`
    },
    handleData() {
    },
    initData() {
      const params = {
        id: this.userInfo.id
      }
      this.$http.get('http://192.168.0.100:8080/bc/showpeopleplantoday.xhtml', {params: params})
      .then((res) => {
        if (res.body.code === 200) {
          if (JSON.parse(res.body.data).length === 0) {
            this.successFg = false
          } else {
            this.successFg = true
          }
          this.todayList = JSON.parse(res.body.data)
        } else {
          this.successFg = false
          alert(res.body.msg)
        }
      })
      .catch((err) => {
        alert(err)
      })
    }
  },
  components: {
    
  }
}
</script>

<style scoped>
ul {
  margin: 15px;
  padding: 0;
  list-style: none;
}
li {
  padding-bottom: 9px;
  margin-bottom: 9px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
}
li .item {
  display: block;
}
.item .dimension {
  margin-bottom: 8px;
  padding-left: 8px;
  color: #666;
}
li:after {
  position: absolute;
  bottom: 0px;
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #ddd;
}
li:last-of-type:after {
  display: none;
}
.btn {
  color: #fff;
  background: #50a095;
}
.tip {
  margin-top: 50px;
  text-align: center;
}
</style>
