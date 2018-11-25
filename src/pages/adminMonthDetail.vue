  <template>
    <div class="admin-mon-detail">
      <el-table :data="details" stripe>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column label="工作内容">
          <template slot-scope="{row,$index}">
            <p>{{row.job}}({{row.dimension}})</p>
          </template>
        </el-table-column>
      <el-table-column prop="time" label="时间" width="100">
      </el-table-column>
    </el-table>
      <div class="footer">
        <el-button class="btn" @click="submit(3)">驳回</el-button>
        <el-button class="btn" type="success" @click="submit(2)">同意</el-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          details: [],
          userInfo: ''
        }
      },
      filters: {
        filterTime() {
          
        }
      },
      created() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.planUser = this.$route.params.planUser
        this.getData()
      },
      methods: {
        getData() {
          let params = {
            id: this.planUser,
            month: this.nextMonth()
          }
          this.$http.get('http://192.168.0.100:8080/bc/showpeopleplan.xhtml', {params: params})
          .then((res) => {
            if (res.body.code === 200) {
              this.details = JSON.parse(res.body.data)
              // this.handelData()
            }
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
        submit(flag) {
          let all = []
          this.details.map((item) => {
            let params = {
              flag: flag,
              month: this.nextMonth(),
              time: new Date(item.time).getTime(),
              userid: item.userid,
              planid: item.planid,
              define: '',
              file: ''
            }
            let name = this.$http.get('http://192.168.0.100:8080/bc/commitpeopleplan.xhtml', {params: params})
            all.push(name)
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
      }
    }
  </script>

  <style scoped>
    .admin-mon-detail {
      padding: 15px;
      background: #fff;
    }
    .item {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;
      align-items: center;
    }
    .item:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #eee;
    }
    .item label {
      width: 80px;
    }
    .item p {
      flex: 1;
    }
    .img-container label {
      display: block;
      margin-bottom: 20px;
    }
    .img-container img {
      width: 80px;
      height: 80px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
    }
    .footer .btn {
      width: 150px;
    }
  </style>
  