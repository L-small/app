<template>
  <div class="today">
    <ul>
      <li v-for="item in todays">
        <p>{{item.name}}</p>
        <el-button type="primary" @click="toSubmit">去提交</el-button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      todays: [{
        name: '检查变电站是否建立应有、现有图档清册'
      }, {
        name: '检查现有清册是否与应有清册一致'
      }, {
        name: '检查现场存放纸质图档是否和现有清册一致'
      }]
    }
  },
  methods: {
    toSubmit() {
      this.$router.push({name: 'submit'})
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
