<template>
  <div class="today">
    <ul>
      <li v-for="(item, index) in todayList" :key="index">
        <p>{{item.job}}</p>
        <el-button type="primary" @click="toSubmit(item)">去提交</el-button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      todayList: [],
      userInfo: {},
      ajaxData: {}
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
      this.$http.get('http://112.74.55.229:8090/bc/showpeopleplantoday.xhtml', {params: params})
      .then((res) => {
        if (res.body.code === 200) {
          this.todayList = JSON.parse(res.body.data)
          // this.handleData()
        } else {
          // alert(res.body.msg)
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
  margin: 20px;
  padding: 0;
  list-style: none;
}
li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
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
  height: 40px;
}
</style>
