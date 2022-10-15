<template>
  <el-menu
  :default-active="defaultActive"
  text-color="rgba(33,37,41,.5)"
  active-text-color="#212529"
  router>
      <MenuItems :menu-list="menu"/>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import MenuItems from './aside-menu-item/index.vue'

const $route = useRoute()

const menu = ref([
  {
    path: '/home',
    name: '主页',
    children: [
      {
        path: '/home/index',
        name: '首页',
        children: []
      },
      {
        path: '/home/charts',
        name: '图表' 
      }
    ]
  },

])

const defaultActive = computed(() => $route.path)


</script>

<style scoped lang="less">
  .el-menu {
    width: calc(100% - 20px);
    border-right: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    :deep(.el-menu) {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
</style>