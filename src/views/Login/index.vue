<template>
  <div class="login-container">
    <div v-if="!isAuth">
      <p>输入你喜欢的名字！😀</p>
      <el-form ref="form" :model="form" :rules="rules" inline label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input :style="{width: '200px'}" v-model="form.userName" />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogin('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
   <div v-else>
     <h2>已登录</h2>
     <el-button @click="handleLogout">登出</el-button>
   </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  data () {
    return {
      form: {
        userName: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'login',
      'logout'
    ]),
    handleLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/')
          this.login({ ...this.form, token: 'I am token' })
          this.resetForm(formName)
        }
      })
    },
    handleLogout () {
      this.logout()
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  margin-top: 20px;
}
</style>
