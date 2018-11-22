<template>
  <div class="score">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column label="中心全部30%绩效金额总和">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.personal"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="实际分配所得">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.real"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="差额">
        <template slot-scope="{row,$index}">
          <el-input v-model="row.diff"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        tableData: [{
          index: 1,
          name: '朱金勇',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 2,
          name: '王金斌',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 3,
          name: '马锦波',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 4,
          name: '高红',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 5,
          name: '代红丽',
          personal: '',
          real: '',
          diff: ''
        }, {
          index: 6,
          name: '吴鑫',
          personal: '',
          real: '',
          diff: ''
        }]
      }
    },
    created() {
      this.getData()
    },
    methods: {
      submit() {
        console.log(this.tableData)
        let params = {
          uid: '',
          info: JSON.stringify(this.tableData)
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            alert('设定绩效成功')
            history.go(-1)
          } else {
            alert(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      getData() {
        let params = {
          uid: ''
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            this.tableData = res.data
          } else {
            alert(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
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
