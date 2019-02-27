<template>
  <div class="admin-today">
    <Header :title="'审批计划'"></Header>
    <el-collapse v-model="activeNames" @change="handleChange">
      <p class="business"><i class="el-icon-edit"></i>&nbsp;生产类</p>
      <el-collapse-item v-for="(item, index) in prodLists" class="col" :title="item.name" :name="index * 2 + 1">
        <div class="submit-all">
          <el-button class="btn" type="success" @click="submitAll(item, index)">批量完成</el-button>
        </div>
        <div class="item" v-for="(subItem, subIndex) in item.list" v-if="subItem.flag === '6'">
          <p class="label">{{subItem.dimension}}</p>
          <p class="type">（{{subItem.correlation}}）{{subItem.job}}</p>
          <p class="desc">{{subItem.define}}</p>
          <div class="img" v-if="subItem.file">
            <div v-for="(imgItem, imgIndex) in subItem.file" @click="showBigImg(imgItem, imgIndex)" class="img-item">
              <img :src="'http://112.74.55.229:8090/bc/' + imgItem" alt="">
            </div>
          </div>
          <div class="option">
            <el-button class="btn" @click="submit(item, index, subItem, subIndex, 8)">驳回</el-button>
            <el-button class="btn" type="success" @click="submit(item, index, subItem, subIndex, 7)">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
      <p class="business"><i class="el-icon-edit"></i>&nbsp;辅助类</p>
      <el-collapse-item v-for="(item, index) in assistLists" class="col" :title="item.people" :name="(index + 1) * 2">
        <div class="submit-all">
          <el-button class="btn" type="success" @click="submitAll(item, index)">批量完成</el-button>
        </div>
        <div class="item" v-for="(subItem, subIndex) in item.list" v-if="subItem.flag === '6'">
          <p class="label">{{subItem.dimension}}</p>
          <p class="type">（{{subItem.correlation}}）{{subItem.job}}</p>
          <p class="desc">{{subItem.define}}</p>
          <div class="img">
            <div v-for="(imgItem, imgIndex) in subItem.file" @click="showBigImg(imgItem, imgIndex)" class="img-item">
              <img :src="'http://112.74.55.229:8090/bc/' + imgItem" alt="">
            </div>
          </div>
          <div class="option">
            <el-button class="btn" @click="submit(item, index, subItem, subIndex, 8)">驳回</el-button>
            <el-button class="btn" type="success" @click="submit(item, index, subItem, subIndex, 7)">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
.admin-today .el-collapse-item__header{
  font-size: 14px;
  padding-left: 15px;
}
@media screen and (max-width: 700px) {
  .admin-today .el-collapse-item__header{
    font-size: 13px;
  }
  .admin-today .business {
    font-size: 14px;
  }
  .admin-today .submit-all .btn {
    font-size: 12px;
  }
  .admin-today .item {
    font-size: 12px;
  }
  .admin-today .option .btn {
    font-size: 12px;
  }
}
</style>

<style scoped>
.admin-today {
  margin-top: 50px;
}
.business {
  width: 100%;
  height: 45px;
  /* padding-left: 10px; */
  line-height: 45px;
  font-size: 14px;
  color: #fff;
  background: #50a095;
}
.business i {
  margin-left: 10px;
}
.item {
  padding: 20px;
}

.label, .type, .desc, .img {
  margin-top: 0px;
  margin-bottom: 5px;
}
.label {
  font-size: 14px;
  color: #000;
}
.img {
  display: flex;
}
.img .img-item {
  width: 140px;
  height: 140px;
  margin-right: 10px;
  object-fit: cover;
  overflow: hidden;
}
.img .img-item img {
  width: 100%;
}
.type {
  font-size: 10px;
  color: #666;
}
.option {
  margin-bottom: 20px;
  float: right;
}
.submit-all {
  display: flex;
  justify-content: flex-end;
}
.submit-all .btn {
  margin-right: 15px;
}
</style>

<script>
  import { ImagePreview } from 'vant';
  import Header from '../components/Header.vue'
  export default {
    name: 'month',
    data() {
      return {
        activeNames: ['1'],
        prodLists: [],
        assistLists: [],
        userInfo: {},
        ajaxData: '',
        ajaxFg: false
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.init()
    },
    methods: {
      nextMonth() {
        let month = new Date().getMonth() + 1
        if (month + 1 > 12) {
          month = 1
        } else {
          month = month + 1
        }
        return month
      },
      init() {
        let params = {
          month: new Date().getMonth() + 1
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplanalltoday.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handelData()
          } else {
            this.$message('请求失败')
          }
        })
        .catch((err) => {
          this.$message('请求失败')
          console.log(err)
        })
      },
      handelData() {
        let prodData = [],
            assistData = [],
            prodNames = [],
            assistNames = [],
            prodString = '',
            assistString = ''
        this.ajaxData.map((item) => {
          if (item.classify === '1') {
            prodData.push(item)
          } 
          if (item.classify !== '1') {
            assistData.push(item)
          }
        })
        prodData.map((item, index) => {
          if (prodString.indexOf(item.name) === -1) {
            prodString += item.name + ','
          }
        })
        prodNames = prodString.split(',')
        prodNames.pop()
        assistData.map((item, index) => {
          if (assistString.indexOf(item.name) === -1) {
            assistString += item.name + ','
          }
        })
        assistNames = assistString.split(',')
        assistNames.pop()
        prodNames.map((item) => {
          const obj = {}
          const list = []
          obj.name = item
          prodData.map((subItem) => {
            if (subItem.name === item) {
              if (subItem.file) {
                subItem.file = subItem.file.split(',')
              }
              list.push(subItem)
            }
          })
          obj.list = list
          this.prodLists.push(obj)
        })
        assistNames.map((item) => {
          const obj = {}
          const list = []
          obj.name = item
          assistData.map((subItem) => {
            if (subItem.name === item) {
              if (subItem.file) {
                subItem.file = subItem.file.split(',')
              }
              list.push(subItem)
            }
          })
          obj.list = list
          this.assistLists.push(obj)
        })
      },
      handleChange() {
      },
      remove(arr, index) {
        console.log(index)
        arr.splice(index, 1);
      },
      submitAll(item, index) {
        console.log(item)
        let all = []
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        item.list.map((listItem, listIndex) => {
          let params = {
            flag: 7,
            month: new Date().getMonth() + 1,
            time: new Date(listItem.time).getTime(),
            userid: listItem.userid,
            planid: listItem.id,
            define: listItem.define,
            file: listItem.file
          }
          let name = this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
          all.push(name)
        })
        Promise.all(all).then((res) => {
          console.log(res)
          this.ajaxFg = false
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
            this.$message('提交失败')
          } else {
            this.$message('提交成功')
            this.$router.go(0)
          }
        })
        .catch((err) => {
          console.log(err)
          this.ajaxFg = false
          this.$message('提交失败')
        })
      },
      submit(item, index, subItem, subIndex, status) {
        if (this.ajaxFg) {
          return
        }
        this.ajaxFg = true
        let params = {
          flag: status,
          month: new Date().getMonth() + 1,
          time: new Date(subItem.time).getTime(),
          userid: subItem.userid,
          planid: subItem.id,
          define: subItem.define,
          file: subItem.file
        }
        this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
        .then((res) => {
          this.ajaxFg = false
          console.log(res.body.code)
          if (res.body.code === 200) {
            if (item.list.length > 1) {
              this.remove(item.list, subIndex)
            } else {
              this.$router.go(0)
            }
            this.$message('成功')
          } else {
            this.$message('请求失败')
          }
        })
        .catch((err) => {
          this.ajaxFg = false
          console.log(err)
          this.$message('请求失败')
        })
      },
      showBigImg(item, index) {
        ImagePreview({
          images: [`http://112.74.55.229:8090/bc/${item}`],
          startPosition: index,
        });
      }
    },
    components: {
      Header
    }
  }
</script>

