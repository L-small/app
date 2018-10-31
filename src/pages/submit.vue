<template>
  <div class="submit">
    <ul>
      <li class="name">
        <label class="label" for="">任务名：</label>
        <p>检查变电站是否建立应有、现有图档清册</p>
      </li>
      <li>
        <label class="label" for="">描述：</label>
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10}" placeholder="请输入内容" v-model="textarea3">
        </el-input>
      </li>
      <li>
        <label class="label" for="">上传图片或附件：</label>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </li>
    </ul>
    <div class="footer">
      <el-button class="btn" type="success" @click="submit">确认提交</el-button>
    </div>
  </div>
</template>

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

<script>
  export default {
    name: 'login',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        textarea3: ''
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submit() {
        alert('提交成功')
        history.go(-2)
      }
    },
    components: {
  
    }
  }
</script>

