<template>
  <div class="container">
    <h2 v-if="isAuth">用户名: {{user}}</h2>
    <h2 v-else>未登录 <span class="login" @click="handleLogin">去登录</span></h2>
    <p>count: {{count}}</p>
    <p>double: {{double}}</p>
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // }
    ...mapState([
      'count',
      'user'
    ]),
    ...mapGetters([
      'double',
      'isAuth'
    ])
  },
  methods: {
    handleClick () {
      this.$store.commit('increment')
    },
    handleLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .login {
    font-size: 16px;
    font-weight: normal;
    color: blue;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
