
<template>
  <div class="loginbg">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="height: 100px; margin-top:35%;margin-left:35%"
    >
      <el-form-item label="用户名：" prop="username" style="width:361px;">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password" style="width:361px;">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState,mapMutations,mapAction } from 'vuex'
import axios from 'axios'

export default {
  name: 'UserLogin',
  data () {
    return {
       userToken:"",
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
            { min: 1, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      ...mapMutations(['changeLogin']),
      submitForm(){
        let _this=this;
        axios.post('https://api.shisanshui.rtxux.xyz/auth/login', {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        })
        .then(function (response) {
          //_this.userToken=response.data.data.token;
          //console.log(response.data.data.token)
          
            console.log(_this.userToken)//获取到的token
            _this.changeLogin({ Authorization:response.data.data.token,UserId:response.data.data.user_id });
             _this.$router.push({path:'/BeginView'});
            alert('登陆成功');
            
        })
        .catch(function (error) {
          console.log(error);
        })
      },
        
     
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.loginbg {
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("../assets/bg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  -ms-interpolation-mode: bicubic;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

  .el-input {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .el-input el-input--suffix {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>
