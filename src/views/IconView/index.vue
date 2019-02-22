<template>
  <div class='icon'>
    <h2>封装全局'icon-svg'组件，传入.svg文件的名字即可全局使用</h2>
    <icon-svg class='svg' iconClass='debug'></icon-svg>
    <icon-svg class='svg edit' iconClass='edit'></icon-svg>
    <icon-svg class='svg' iconClass='file_music'></icon-svg>
  </div>
</template>

<style lang="less" scoped>
.icon {
  .svg {
    width: 50px;
    height: 50px;
    color: red;
    &.edit {
      width: 70px;
      height: 70px;
      color: blue;
    }
  }
}
</style>
