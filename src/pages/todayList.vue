<template>
  <div class="today">
    <ul v-for="(item, index) in todayList" :key="index">
      <li v-for="(subItem, index) in item.list" :key="index">
        <p>{{subItem.name}}</p>
        <el-button type="primary" @click="toSubmit(item, subItem)">去提交</el-button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      todayList: [{
        title: '设备台账资料',
        type: '基本要求',
        list: [{
          label: '检查变电站是否建立应有、现有图档清册'
        }]
      }, {
        title: '设备台账资料',
        type: '基本要求',
        list: [{
          label: '检查现有清册是否与应有清册一致'
        }]
      }, {
        title: '设备台账资料',
        type: '基本要求',
        list: [{
          label: '检查现场存放纸质图档是否和现有清册一致'
        }]
      }]
    }
  },
  created() {
    this.initData()
  },
  methods: {
    toSubmit(item, subItem) {
      this.$router.push({name: 'submit', query: {id: subItem.id, title: item.title, type: item.type}})
    },
    initData() {
      this.$http.get('')
      .then((res) => {
        if (res.code === 200) {
          this.todayList = res.data
        } else {
          alert(res.msg)
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
