<template>
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
        <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        imgUrl: '',
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
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
      submit() {
        let params = {
          flag: 6,
          month: this.nextMonth(),
          time: new Date(this.info.time).getTime(),
          userid: this.userInfo.id,
          planid: this.info.planid,
          define: this.desc,
          file: this.imgUrl
        }
        this.$http.get('http://112.74.55.229:8090/bc/commitpeopleplan.xhtml', {params: params})
        .then((res) => {
          if (res.body.code === 200) {
            alert("提交成功")
            history.go(-1)
          } else {
            alert(res.msg)
          }
        })
      },
      initData() {
        this.name = this.$route.params.name
      }
    },
    components: {
  
    }
  }
</script>

<style scoped>
  ul {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
  
  li {
    padding: 15px 0;
  }
  
  .label {
    display: block;
    margin-bottom: 15px;
  }
  
  .name {
    display: flex;
    align-items: center;
  }
  
  .name .label {
    margin-right: 20px;
    margin-bottom: 0;
  }

  .footer {
    margin-top: 40px;
    text-align: center;
  }
  .footer .btn {
    width: 200px;
  }
</style>