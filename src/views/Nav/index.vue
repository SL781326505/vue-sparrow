<template>
  <div class="nav">
    <router-link
      class="nav-item"
      v-for="item in navList"
      :key="item.name"
      tag="div"
      exact
      :to="item.path"
    >
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
import { asyncRoutes } from '@/router'

export default {
  computed: {
    navList () {
      return asyncRoutes.filter(item => item.name)
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  box-sizing: border-box;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  .nav-item {
    color: #eee;
    padding: 3px;
    margin-top: 4px;
    margin-right: 4px;
    box-sizing: inherit;
    border-radius: 2px;
    background-color: #2e8b57;
    &:hover {
      background-color: #3cb371;
      cursor: pointer;
    }
    &.router-link-active {
      color: #fff;
      background-color: #3cb371;
    }
  }
}
</style>
