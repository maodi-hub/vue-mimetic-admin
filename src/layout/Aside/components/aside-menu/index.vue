<template>
  <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#e9ecef"
        active-text-color="#333"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
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
    .el-menu-item {
      padding: 0;
      margin: 0 10px;
      background: #e9ecef;
      border-radius: 20px;
      transition: .2s linear;
      box-shadow:
        7px 7px 12px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9),
        inset 0 0 0 rgba(255, 255, 255, .9),
        inset 0 0 0 rgba(0, 0, 0, .4);
        &.is-active {
          box-shadow:
            0 0 0 rgba(0, 0, 0, .4),
            0 0 0 rgba(255, 255, 255, .9),
            inset -7px -7px 12px rgba(255, 255, 255, .9),
            inset 7px 7px 12px rgba(0, 0, 0, .4);
        }
    }
  }
</style>