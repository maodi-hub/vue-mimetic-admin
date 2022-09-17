<template>
  <el-menu-item :index="index">
    <el-icon><icon-menu /></el-icon>
    <span>首页</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

interface Props {
  index: string
}
defineProps<Props>()
</script>

<style scoped lang="less">
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
</style>