<template>
  <div class="login-container">

    <el-form :model="ruleForm2" :rules="rules2"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>

      <el-checkbox
          v-model="checked"
          class="rememberme"
      >记住密码</el-checkbox>

      <el-row>
<!--      <el-form-item style="width:50%;">-->
        <el-col >
            <el-button type="primary" style="width: 120px" @click="handleSubmit" :loading="logining">用户登录</el-button>
          <a href="http://127.0.0.1:8000/admin/login/?next=/admin/">
            <el-button type="primary" style="margin-left: 20px" :loading="logining">管理员登录</el-button>
          </a>
          <!--      </el-form-item>-->
        </el-col>
<!--      <el-form-item style="width:50%;">-->

      </el-row>

    </el-form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data(){
    return {
      logining: false,
      ruleForm2: {
        username: '',
        password: '',
      },
      rules2: {
        username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
        password: [{required: true, message: 'enter your password', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit(event){
      axios.post("http://127.0.0.1:8000/api/user/login/", {
        "email": this.ruleForm2.username,
        "password": this.ruleForm2.password
      }).then(response => {
        let token = response.data.token
        localStorage.setItem("token", "Token "+ token)
        localStorage.setItem("show_inside", "true")
        this.$router.push('/')
      })
    }
    }
};

</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>