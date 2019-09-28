
<template>
  <div class="loginbg" >
  
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="height: 100px; margin-top:35%;margin-left:35%">
  <el-form-item label="用户名：" prop="username" style="width:361px;">
    <el-input v-model="ruleForm.username" ></el-input>
  </el-form-item>

  <el-form-item label="密码：" prop="password" style="width:361px;">
    <el-input v-model="ruleForm.password"   show-password></el-input>
  </el-form-item>

 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
       ruleForm: {
          username: '',
          password:'',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功');
            this.$router.push({path:'/BeginView'});

          } else {
            console.log('登录失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.loginbg{
  
  position:absolute;
  width: 100%;
  height:100%;
 
  background: url("../assets/bg.jpg");
  background-size: contain;
 background-repeat: no-repeat;
   -ms-interpolation-mode: bicubic;
   background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  
  .el-input{
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .el-input el-input--suffix{
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

}

</style>
