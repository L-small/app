  <template>
    <div class="admin-mon-detail">
      <ul class="container">
        <li class="item" v-for="item in details">
          <p>{{item.job}}</p>
          <p>{{item.time}}</p>
        </li>
      </ul>
      <div class="footer">
        <el-button class="btn" @click="back">驳回</el-button>
        <el-button class="btn" type="success" @click="submit">同意</el-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          details: {},
          userInfo: ''
        }
      },
      filters: {
        filterTime() {
          
        }
      },
      created() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.getData()
      },
      methods: {
        getData() {
          let params = {
            id: this.userInfo.id
          }
          this.$http.get('http://192.168.0.101:8080/bc/showpeopleplan.xhtml', {params: params})
          .then((res) => {
            if (res.body.code === 200) {
              this.ajaxData = JSON.parse(res.body.data)
              this.handelData()
            }
          })
        },
        submit() {
          let params = {

          }
          this.$http.get('', {params: params})
          .then((res) => {
            if (res.code === 200) {
              alert('审批完成')
              history.go(-1)
            } else {
              alert(res.msg)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        }
      }
    }
  </script>

  <style scoped>
    .admin-mon-detail {
      padding: 15px;
      background: #fff;
    }
    .container {
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
  