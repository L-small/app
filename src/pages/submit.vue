<template>
  <div>
    <Header :title="'提交计划'"></Header>
    <div class="submit">
      <ul>
        <li class="name">
          <label class="label" for="">任务名：</label>
          <p>{{info.job}}</p>
        </li>
        <li>
          <label class="label" for="">描述：</label>
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10}" placeholder="请输入内容" v-model="desc">
          </el-input>
        </li>
        <li>
          <label class="label">上传图片或附件：</label>
          <el-upload action="http://112.74.55.229:8090/bc/FileUploadServlet" list-type="picture-card" :on-success="uploadSucc" :on-error="uploadErr" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="imgUrl" alt="">
          </el-dialog>
        </li>
      </ul>
      <div class="footer">
        <el-button class="btn" type="success" @click="submit">确认提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
  export default {
    data() {
      return {
        imgUrl: [],
        dialogVisible: false,
        desc: '',
        info: {},
        userInfo: {}
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.info = JSON.parse(this.$route.params.info)
      this.initData()
    },
    methods: {
      getFileName() {
        return Math.random() + new Date().getTime()
      },
      handleRemove(file, fileList) {
      },
      handlePictureCardPreview(file) {
        this.imgUrl = file.url;
        this.dialogVisible = true;
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
      uploadSucc(file) {
        this.imgUrl.push(file)
      },
      uploadErr() {

      },
      submit() {
        let params = {
          flag: 6,
          month: new Date().getMonth() + 1,
          // month: this.nextMonth(),
          time: new Date(this.info.time).getTime(),
          userid: this.userInfo.id,
          planid: this.info.planid,
          define: this.desc,
          file: this.imgUrl.toString()
        }
        this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            this.$message("提交成功")
            history.go(-1)
          } else {
            this.$message(res.msg)
          }
        })
      },
      initData() {
        this.name = this.$route.params.name
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  .submit {
    margin-top: 50px;
    padding: 15px;
  }
  ul {
    margin: 0;
    list-style: none;
  }
  
  li {
    padding: 10px 0;
  }

  .label {
    display: block;
    margin-bottom: 15px;
  }
  
  .name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  
  .name .label {
    position: absolute;
    left: 0;
    margin-bottom: 0;
  }

  .name p {
    margin-left: 70px;
  }

  .footer {
    margin-top: 40px;
    text-align: center;
  }
  .footer .btn {
    width: 200px;
    color: #fff;
    background: #50a095;
  }
  @media screen and (max-width: 700px) {
  .submit ul li{
    font-size: 12px;
  }
  .submit .name p {
    margin-left: 55px;
  }
  .submit .label {
    font-size: 13px;
  }
}
</style>