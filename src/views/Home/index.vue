<template>
  <div class='hello'>
    <h1 :class='titleClass'>{{ reverseMsg }}</h1>
    <h2>{{sayHi}}</h2>
    <el-button v-waves @click='handleClick' size='small' type='primary'>侦听</el-button>
    <el-button v-waves @click='changeColor' size='small'>变色</el-button>
    <h2>watch: {{afterHi}}</h2>

    <el-input v-model='inputValue'></el-input>
    <div>首字母大写: <span>{{ inputValue | capitalize }}</span></div>
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
  },
  computed: {
    reverseMsg: function () {
      return this.msg + '!!'
    },
    titleClass () {
      return {
        actived: this.isRed
      }
    }
  },
  data () {
    return {
      sayHi: 'hello',
      afterHi: '',
      isRed: false,
      inputValue: ''
    }
  },
  methods: {
    handleClick () {
      this.sayHi += 1
    },
    changeColor () {
      this.isRed = !this.isRed
    }
  },
  watch: {
    sayHi: function (newData, oldData) {
      this.afterHi = `new:${newData}, old:${oldData}`
    }
  }
}
</script>

<style scoped lang="less">
.hello {
  .actived {
    color: red;
    transition: 0.5s color;
  }

}
</style>
