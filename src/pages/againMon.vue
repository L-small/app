<template>
  <div class="again-month">
    <div class="item" v-for="item in tableData">
      <p class="title">{{item.title}}</p>
      <div class="list">
        <div class="list-item" v-for="subItem in item.list">
          <p class="name">{{subItem.job}}</p>
          <p class="time">{{subItem.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'score',
    data() {
      return {
        tableData: [],
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.init()
      console.log(this.$route.params.info)
    },
    methods: {
      init() {
        if (this.$route.params.info) {
          this.tableData = JSON.parse(this.$route.params.info)
        }
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
.title {
  padding: 0 15px;
  line-height: 40px;
  color: #fff;
  background: #50a095;
}
.list {
  padding-left: 15px;
}
.list-item {
  display: flex;
  justify-content: space-between;
}
.list-item .name {
  flex: 1;
}
.list-itme .time {
  width: 100px;
  margin-right: 15px;
}
</style>
