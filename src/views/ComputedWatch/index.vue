<template>
  <div class="container">
    <h2 :class="activedClass">计算属性绑定class</h2>
    <el-button @click='changeColor'>切换颜色</el-button>
    <h2>{{watchData}}</h2>
    <el-button @click='handleClick'>改变data</el-button>
    <h2>侦听结果:{{watchResult}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActived: false,
      watchData: '侦听属性watch data 的变化',
      watchResult: ''
    }
  },
  computed: {
    activedClass () {
      return {
        actived: this.isActived
      }
    }
  },
  methods: {
    changeColor () {
      this.isActived = !this.isActived
    },
    handleClick () {
      this.watchData += 1
    }
  },
  watch: {
    watchData: function (newData, oldData) {
      this.watchResult = newData
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .actived {
    color: red;
    transition: color 0.5s;
  }
}
</style>
