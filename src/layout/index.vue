<template>
  <el-container>
    <el-aside width="200px">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import Aside from './Aside/index.vue'
  import Header from './Header/index.vue'
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  .el-aside {
    overflow: visible;
  }
}
</style>