<template>
  <div class="month">
    <el-collapse v-model="activeNames" style="width:100%;">
      <el-collapse-item :title="`${item.title}`" :name="index" v-for="(item, index) in monList">
        <div class="item" v-for="subItem in item.list">
          <p class="name">（{{subItem.require | filterRequire}}）{{subItem.job}}</p>
          <el-date-picker class="picker" v-model="subItem.time" :default-value="defaultTime" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-dialog title="再次确认" :visible.sync="dialogVisible" center fullscreen>
      <el-collapse v-model="modalActiveNames" style="width:100%;">
        <el-collapse-item :title="`${item.title}`" :name="index" v-for="(item, index) in againData">
          <div class="item" v-for="subItem in item.list">
            <p class="name">（{{subItem.require | filterRequire}}）{{subItem.job}}</p>
            <el-date-picker disabled class="picker" v-model="subItem.time" :default-value="defaultTime" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-button class="btn" @click="again">确认计划</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        modalActiveNames: [],
        monList: [],
        submitData: [],
        ajaxData: [],
        titles: [],
        userInfo: {},
        defaultTime: '',
        againData: [],
        dialogVisible: false
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.defaultTime = new Date()
      this.defaultTime.setMonth(new Date().getMonth() + 1)
      this.verify()
      this.init()
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
      verify() {
        let params = {
          id: this.userInfo.id,
          month: new Date().getMonth() + 1
          // month: this.nextMonth()  todo
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            const list = JSON.parse(res.body.data)
            let flag = false
            list.map((item) => {
              // 已经提交之后的和辅助类的
              if ((item.flag || item.flag === '3') && item.classify === '1') {
                flag = true
              }
            })
            if (flag) {
              alert("已经编辑过下月计划")
              history.go(-1)
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
      again() {
        const data = []
        const info = JSON.parse(JSON.stringify(this.monList))
        info.map((item) => {
          item.list.map((subItem, index) => {
            if (subItem.time) {
              data.push(item)
            }
          })
        })
        data.map((item, index) => {
          const list = []
          item.list.map((subItem) => {
            if (subItem.time) {
              list.push(subItem)
            }
          })
          item.list = list
        })
        const filter = []
        let str = ''
        data.map((item) => {
          if (str.indexOf(item.title) === -1) {
            filter.push(item)
            str+=item.title
          }
        })
        filter.map((item, index) => {
          this.modalActiveNames.push(index)
        })
        this.againData = filter
        this.dialogVisible = true
      },
      submit() {
        let all = []
        this.monList.map((item) => {
          item.list.map((subItem, index) => {
            if (subItem.time) {
              let params = {
                flag: 1,
                // month: this.nextMonth(),   todo
                month: new Date().getMonth() + 1,
                time: new Date(subItem.time).getTime(),
                userid: this.userInfo.id,
                planid: subItem.id,
                define: '',
                file: ''
              }
              let name = this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
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
        let prodMonth = []
        this.ajaxData.map((item) => {
          if (item.classify === '1') {
            prodMonth.push(item)
          }
        })
        this.ajaxData = prodMonth
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
        this.$http.get('http://112.74.55.229:8090/bc/getplan.xhtml')
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
  .month .el-collapse-item__header {
    padding-left: 15px;
    color: #fff;
    background: #50a095;
  }
  .month .el-collapse-item__content {
    padding: 15px;
  }
  .month .el-date-editor  {
    width: 170px;
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
  .name {
    flex: 1;
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
    background: #50a095;
    color: #fff;
  }
</style>