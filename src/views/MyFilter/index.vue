<template>
  <div class="container">
    <h2>定义全局过滤器</h2>
    <el-input v-model="inputValue"></el-input>
    <p>首字母大写: {{ inputValue | capitalize}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
