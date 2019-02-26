<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <ol>
      <li>麻雀虽小，五脏六腑俱全</li>
      <li>Vue常用属性与方法</li>
      <li>集成vue-router、vuex、axios及element-ui等插件</li>
      <li>自定义指令、全局过滤器</li>
      <li>封装全局使用.svg图标的组件</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Vue App'
    }
  }
}
</script>

<style scoped lang="less">
.hello {

}
</style>
