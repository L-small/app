<template>
  <div class="admin-mon-score">
    <Header :title="'设定月度得分'"></Header>
    <el-table class="table" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column label="基础分">
        <template slot-scope="{row,$index}">
          <el-input type="number" v-model="row.totalValue"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="月度调整加分">
        <template slot-scope="{row,$index}">
          <el-input type="number" v-model="row.addValue"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button class="btn" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        ajaxQueue: [],
        ajaxData: [],
        ajaxFg: false
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getData()
    },
    methods: {
      handleScore() {
        this.tableData.map((item) => {
          if (!item.totalValue) {
            item.totalValue = 0
          }
          if (!item.addValue) {
            item.addValue = 0
          }
        })
      },
      submit() {
        if (this.ajaxFg) {
          return 
        }
        this.ajaxFg = true
        this.handleScore()
        const list = []
        this.tableData.map((item, index) => {
          let params = {
            month: new Date().getMonth() + 1,
            id: item.id,
            totalvalue: item.totalValue,
            addscore: item.addValue
          }
          let name = this.$http.get('http://112.74.55.229:8090/bc/addvalueuser.xhtml', {params: params})
          list.push(name)
        })
        Promise.all(list).then((res) => {
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
          if (res.length !== list.length) {
            failFg = true
          }
          if (failFg) {
            this.$message('提交失败')
          } else {
            this.$message('提交成功')
            history.go(-1)
          }
        })
        .catch((err) => {
          this.$message('提交失败')
        })
      },
      handleData() {
        const list = []
        this.ajaxData.map((item) => {
          list.push({
            id: item.id,
            name: item.name,
            totalValue: item.totalvalue,
            addValue: item.addvalue
          })
        })
        this.tableData = list
        console.log(this.tableData)
      },
      checknum(obj){   
        if(/^\d+\.?\d{0,2}$/.test(obj.value)){
            obj.value = obj.value;
        }else{
            obj.value = obj.value.substring(0,obj.value.length-1);
        }     
      },
      getData() {
        let params = {
          month: new Date().getMonth() + 1,
          id: this.userInfo.id
        }
        this.$http.get('http://112.74.55.229:8090/bc/getalluseraddvalue.xhtml', {params: params})
        // this.$http.get('http://112.74.55.229:8090/bc/getalluser.xhtml')
        .then((res) => {
          if (res.body.code === 200) {
            this.ajaxData = JSON.parse(res.body.data)
            this.handleData()
          } else {
            this.$message(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
.admin-mon-score {
  margin-top: 50px;
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
    color: #fff;
    background: #50a095;
  }
  .admin-mon-score {
    margin-bottom: 50px;
  }
</style>
<style>
@media screen and (max-width: 700px) {
  .admin-mon-score .table{
    font-size: 12px;
  }
}
</style>
