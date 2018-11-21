<template>
  <div class="month">
    <el-collapse v-model="activeNames">
      <el-collapse-item class="col" :title="`${item.title}`" :name="index" v-for="(item, index) in monList">
        <div class="item" v-for="subItem in item.list">
          <p>（{{subItem.reuire | filterRequire}}）{{subItem.job}}</p>
          <el-date-picker class="picker" v-model="subItem.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">提交计划</el-button>
    </div>
  </div>
</template>

<style scoped>
  .col .el-collapse-item__header {
    background: #409EFF;
  }
  
  .item {
    padding-left: 20px;
    display: flex;
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

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        monList: [],
        submitData: [],
        ajaxData: [],
        titles: [],
        userInfo: ''
      }
    },
    created() {
      this.init()
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
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
      submit() {
        let all = []
        this.monList.map((item) => {
          item.list.map((subItem, index) => {
            let params = {
              flag: 1,
              time: new Date(subItem.time).getTime(),
              userid: this.userInfo.id,
              planid: subItem.id,
              define: '',
              file: ''
            }
            var index = new Promise((resolve, reject) => {
              this.$http.get('http://192.168.0.101:8080/bc/commitpeopleplan.xhtml', {params: params})
              .then((res) => {
                all.push(index)
                resolve(res)
              })
              .catch(() => {
                reject()
              })
            })
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
        this.$http.get('http://192.168.0.101:8080/bc/getplan.xhtml')
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
