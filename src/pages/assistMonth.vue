<template>
  <div class="assist-month">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="`${item.title}`" :name="index" v-for="(item, index) in monList">
        <div class="item" v-for="subItem in item.list">
          <p>（{{subItem.require | filterRequire}}）{{subItem.job}}</p>
          <el-date-picker class="picker" v-model="subItem.time" :default-value="defaultTime" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">提交计划</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        monList: [],
        submitData: [],
        ajaxData: [],
        titles: [],
        userInfo: {},
        defaultTime: ''
      }
    },
    created() {
      this.init()
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.defaultTime = new Date()
      this.defaultTime.setMonth(new Date().getMonth() + 1)
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
    methods: {
      filterPlan() {
        this.monList.map((item) => {
          let arrayItem = []
          item.list.map((subItem) => {
            if (subItem.time) {
              arrayItem.push(subItem)
            }
          })
          this.submitData.push({
            title: item.title,
            type: item.type,
            list: arrayItem
          })
        })
      },
      formatTime(stamp) {
        const time = new Date(stamp)
        const year = time.getFullYear()
        const month = time.getMonth() + 1
        const day = time.getDay()
        return `${year}-${month}-${day}`
      },
      nextMonth() {
        let month = new Date().getMonth() + 1
        if (month + 1 > 12) {
          month = 1
        } else {
          month = month + 1
        }
        return month
      },
      submit() {
        let all = []
        this.monList.map((item) => {
          item.list.map((subItem, index) => {
            if (subItem.time) {
              let params = {
                flag: 1,
                month: this.nextMonth(),
                time: new Date(subItem.time).getTime(),
                userid: this.userInfo.id,
                planid: subItem.id,
                define: '',
                file: ''
              }
              let name = this.$http.get('http://192.168.0.100:8080/bc/commitpeopleplan.xhtml', {params: params})
              all.push(name)
            }
          })
        })
        Promise.all(all).then((res) => {
          let failFg = false
          res.map((item) => {
            if (item.body.code !== 200) {
              failFg = true
            }
          })
          if (res.length === 0) {
            failFg = true
          }
          if (res.length !== all.length) {
            failFg = true
          }
          if (failFg) {
            alert('提交失败')
          } else {
            alert('提交成功')
            history.go(-1)
          }
        })
        .catch(() => {
          alert('提交失败')
        })
      },
      handleData() {
        let string = ''
        let assistMonth = []
        this.ajaxData.map((item) => {
          if (item.classify === '2') {
            assistMonth.push(item)
          }
        })
        this.ajaxData = assistMonth
        this.ajaxData.map((item) => {
          if (string.indexOf(item.dimension) === -1) {
            string += item.dimension + ','
          }
        })
        this.titles = string.split(',')
        this.titles.pop()
        this.titles.map((item) => {
          let list = []
          this.ajaxData.map((subItem) => {
            if (item === subItem.dimension) {
              list.push(subItem)
            }
          })
          this.monList.push({
            title: item,
            list: list
          })
        })
      },
      init() {
        this.$http.get('http://192.168.0.100:8080/bc/getplan.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
          }
        })
      }
    },
    components: {
  
    }
  }
</script>
<style>
  .assist-month .el-collapse-item__header {
    padding-left: 15px;
    color: #fff;
    background: #50a095;
  }
  .assist-month .el-collapse-item__content {
    padding: 15px;
  }
  .assist-month .el-input__inner {
    width: 170px;
  }
  .assist-month .el-date-editor {
    margin-left: 10px;
  }
</style>

<style scoped>
  .item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
  }
  
  .picker {
    height: 40px;
  }
  
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: #fff;
  }
  
  .footer .btn {
    width: 300px;
  }
</style>