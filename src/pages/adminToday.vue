<template>
  <div class="admin-today">
    <el-collapse v-model="activeNames" @change="handleChange">
      <p class="business"><i class="el-icon-edit"></i>&nbsp;生产类</p>
      <el-collapse-item v-for="(item, index) in prodLists" class="col" :title="item.name" :name="index * 2 + 1">
        <div class="item" v-for="(subItem, subIndex) in item.list">
          <p class="label">{{subItem.dimension}}</p>
          <p class="type">{{subItem.job}}（{{subItem.correlation}}）</p>
          <p class="desc">{{subItem.define}}</p>
          <div class="img" v-if="subItem.file">
            <div v-for="(imgItem, imgIndex) in subItem.file" @click="showBigImg(subItem, imgIndex)" class="img-item">
              <img :src="imgItem" alt="">
            </div>
          </div>
          <div class="option">
            <el-button @click="submit(item, index, subItem, subIndex, 'off')">驳回</el-button>
            <el-button type="success" @click="submit(item, index, subItem, subIndex, 'ok')">确认完成</el-button>
          </div>
        </div>
      </el-collapse-item>
      <p class="business"><i class="el-icon-edit"></i>&nbsp;辅助类</p>
      <el-collapse-item v-for="(item, index) in assistLists" class="col" :title="item.people" :name="(index + 1) * 2">
        <div class="item" v-for="(subItem, subIndex) in item.list">
          <p class="label">{{subItem.label}}</p>
          <p class="type">{{item.title}}（{{item.type}}）</p>
          <p class="desc">{{subItem.desc}}</p>
          <div class="img">
            <div v-for="(imgItem, imgIndex) in subItem.img" @click="showBigImg(subItem, imgIndex)" class="img-item">
              <img :src="imgItem" alt="">
            </div>
          </div>
          <div class="option">
            <el-button @click="submit(item, index, subItem, subIndex, 'off')">驳回</el-button>
            <el-button type="success" @click="submit(item, index, subItem, subIndex, 'ok')">确认完成</el-button>
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
</style>

<style scoped>
.business {
  width: 100%;
  height: 45px;
  padding-left: 10px;
  line-height: 45px;
  font-size: 14px;
  color: #fff;
  background: #409EFF;
}
.item {
  padding: 20px;
}

.label, .type, .desc, .img {
  margin-top: 0px;
  margin-bottom: 10px;
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
</style>

<script>
  import { ImagePreview } from 'vant';
  export default {
    name: 'month',
    data() {
      return {
        activeNames: ['1'],
        prodLists: [],
        assistLists: [],
        userInfo: {},
        ajaxData: ''
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.init()
    },
    methods: {
      init() {
        let params = {
          id: this.userInfo.id
          // month: new Date().getMonth() + 1
        }
        this.$http.get('http://112.74.55.229:8090/bc/showpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handelData()
          }
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
          if (item.classify === '1' && item.flag === 1) {
            prodData.push(item)
          } 
          if (item.classify !== '1' && item.flag === 1) {
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
              list.push(subItem)
            }
          })
          obj.list = list
          this.assistLists.push(obj)
        })
      },
      handleChange() {
        // console.log(val);
      },
      remove(arr, val) {
        arr.splice(index, 1);
      },
      submit(item, index, subItem, subIndex, status) {
        let params = {
          flag: 3,
          time: new Date(subItem.time).getTime(),
          userid: this.userInfo.id,
          planid: subItem.id,
          define: subItem.define,
          file: subItem.file
        }
        this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.code === 200) {
            if (item.list.length > 1) {
              this.remove(item.list, subIndex)
            }
            alert('成功');
          }
        })
      },
      showBigImg(item, index) {
        ImagePreview({
          images: item.img,
          startPosition: index,
        });
      }
    },
    components: {
  
    }
  }
</script>

