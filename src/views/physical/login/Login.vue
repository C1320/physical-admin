<template>
  <div class="login-box">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
      <h3 class="title">欢迎使用网关管理系统</h3>
      <el-form-item prop="name">
        <el-input
          v-model="loginForm.name"
          autocomplete="off"
          placeholder="账 号: admin"
          prefix-icon="el-icon-goods">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="textType"
                  v-model="loginForm.password"
                  @keyup.native.enter="login('loginForm')"
                  autocomplete="off"
                  placeholder="密 码: admin"
                  prefix-icon="el-icon-time">
          <i slot="suffix" class="el-input__icon el-icon-view btn-eye" @click="changeType"></i>
        </el-input>
      </el-form-item>
      <el-form-item v-show="showMsg" style="margin-bottom:0;">
        <span class="text-danger">提示：用户名或密码错误，请重试！</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')" class="login-btn" v-loading="loading">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        name: '202020',
        password: 'cyq202020'
      },
      rules: {
        name: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      },
      loading: false,
      showMsg: false,
      textType: 'password'
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /*
            检验成功，首先都数据进行加密
            向服务器发送请求
             */
          let data = this.$SM4EnCrypto(JSON.stringify(this.loginForm)) // 需要对json转字符串处理
          // testMsg需要与服务器对应
          this.$get('/login', { login: data })
            .then((response) => {
              console.log(response)
              if (response.status === 200) {
                // 0登录成功，1登录失败
                if (response.data.status === 200) {
                  let user = {
                    name: response.data.result.name,
                    org_id: response.data.result.org_id,
                    user_id: response.data.result.user_id
                  }
                  /*
                     1. 登录成功，将菜单更新通过mutations中的UpdateMenus方法至state中的menus
                     2. 将用户信息更新通过mutations中的UpdateUser方法至state中的user
                       */
                      console.log(response.data.result.menu)
                  this.$store.commit('BaseStore/UpdateMenus', response.data.result.menu)
                  this.$store.commit('BaseStore/UpdateUser', user)
                  sessionStorage.setItem('user', JSON.stringify(this.loginForm))
                  // sessionStorage.setItem('token', response.data.token)
                  // 登录成功显示
                  this.LoginSuccess(response.data.msg)
                } else {
                  this.LoginFail(response.data.msg)
                }
              }
            })
            .catch((error) => {
              console.log(error)
              // this.LoginFail('哎呀，出错啦！')
            })
        } else {
          console.log('login failed')
          return false
        }
      })
    },
    // 登录
    LoginSuccess (msg) { // 登录成功
      // this.$message({
      //   showClose: true,
      //   message: msg,
      //   type: 'success'
      // })
      setTimeout(() => {
        // this.$router.push('index')
        // this.$router.push('/')
        this.$router.push({ path: '/index' })
        // 登录成功，保存该用户的token
        // 页面跳转刷新，防止停留在缓存中
        //   setTimeout(()=>{
        // 登录后刷新页面，加载菜单
        //     window.location.reload();
        //   },2000)
      }, 500)
      // eslint-disable-next-line standard/object-curly-even-spacing
      // window.sessionStorage.setItem('rememberIsChecked', JSON.stringify({ rememberChecked: this.checked}))
      // if (this.checked) { // 记住密码保存
      //   window.sessionStorage.setItem('rememberUserLogin', JSON.stringify(this.loginForm))
      // }
    },
    LoginFail (msg) { // 登录失败
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      })
    },
    changeType () {
      this.textType = (this.textType === 'password' ? 'text' : 'password')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #20222A;
  background: url("https://s1.ax1x.com/2022/04/30/OpMkY6.jpg");
  //background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.book118.com%2Fsr1%2FM00%2F1B%2F33%2FwKh2Al8urGiIMWOiAAF0g3qh0C8AAkhtQEo7NUAAXSb396.jpg&refer=http%3A%2F%2Fimg.book118.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654066555&t=b36a5df43c8f9d593f5c7edbfb877c4b");
  //background: url("https://s1.ax1x.com/2022/04/24/L5fieH.jpg");
  position: fixed;
  background-size: 100% 100%;

  .login-form {
    border-radius: 10px;
    background-clip: padding-box;
    margin: 180px 100px 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    //background: #f5f5f5;
    background: rgba(245,245,245,0.6);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }

    .btn-eye {
      cursor: pointer;
    }

    .text-danger {
      color: #F56C6C;
    }

    .login-btn {
      margin: 35px 0 10px 0;
      width: 100%;
    }
  }
}

</style>
