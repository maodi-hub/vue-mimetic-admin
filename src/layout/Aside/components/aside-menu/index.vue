<template>
  <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#e9ecef"
        active-text-color="#333"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item in ['0','1','2','3','4']">
          <MenuItem :index="item"/>
        </template>
      </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './aside-menu-item/index.vue';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="less">
  .el-menu {
    border-right: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>