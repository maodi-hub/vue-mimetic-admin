<template>
  <el-container>
    <el-aside width="200px">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <transition name="main-container" appear>
          <div class="main-container mimetic"></div>
        </transition>
      </el-main>
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
  .el-header {
    height: 90px;
  }
  .el-main {
    .main-container {
      padding: 10px;
      height: calc(100% - 20px);
      background-color: rgba(255, 255, 255, .1);
    }
  }
}

.main-container-enter-from,
.main-container-leave-to {
  opacity: 0;
  box-shadow:
    7px 7px 12px rgba(0, 0, 0, 0),
    -7px -7px 12px rgba(255, 255, 255, 0),
    inset 0 0 0 rgba(255, 255, 255, 0),
    inset 0 0 0 rgba(0, 0, 0, 0);
}

.main-container-enter-to,
.main-container-leave-from {
  opacity: 1;
  box-shadow:
    7px 7px 12px rgba(0, 0, 0, .1),
    -7px -7px 12px rgba(255, 255, 255, .9),
    inset 0 0 0 rgba(255, 255, 255, .9),
    inset 0 0 0 rgba(0, 0, 0, .1);
}

.main-container-enter-active,
.main-container-leave-active {
  transition: .5s linear ;
}
</style>