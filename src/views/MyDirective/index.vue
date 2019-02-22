<template>
  <div class="container">
    <h2>自定义v-waves指令，点击DOM有波纹特效</h2>
    <el-button v-waves type="primary" size="large">点我啊</el-button>
    <div class="waves-box" v-waves>点我试试</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .waves-box {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    margin-top: 20px;
    color: #fff;
    background: red;
  }
}
</style>
