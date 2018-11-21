<template>
  <div class="submit">
    <ul>
      <li class="name">
        <label class="label" for="">任务名：</label>
        <p>{{name}}</p>
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
        id: '',
        name: ''
      }
    },
    created() {
      this.id = this.$route.query.id
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
      submit() {
        let params = {
          id: this.id,
          desc: this.desc,
          title: this.$route.query.title,
          type: this.$route.query.type
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            history.go(-1)
          } else {
            alert(res.msg)
          }
        })
      },
      initData() {
        let params = {
          id: ''
        }
        this.$http.get('', {params: params})
        .then((res) => {
          if (res.code === 200) {
            this.name = res.data.name
          }
        })
        .catch((err) => {
          // console.log(err)
        })
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