<template>
  <template v-for="item in menuList">
    <template v-if="item.children && item.children.length">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon><IconMenu/></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <SELF :menu-list="item.children"/>
      </el-sub-menu>
    </template>
    <el-menu-item :index="item.path" v-else>
      <template #title>
        <el-icon><IconMenu/></el-icon>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import SELF from './index.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

interface MenuItem {
  path: string
  name: string
  children?: MenuItem[]
}

interface Props {
  menuList: MenuItem[]
}
defineProps<Props>()
</script>

<style scoped lang="less">
  .el-sub-menu {
    &.is-active {
      :deep(.el-sub-menu__title) {
        color: #67748e;
        font-size: 15px;
        background-color: #f6f9fc;
      }
    }
    :deep(.el-sub-menu__title) {
      border-radius: 10px;
      transition: .3s ease-in-out;
    }
  }
  .el-menu-item {
    border-radius: 10px;
    overflow: hidden;
    &.is-active {
      color: #212529;
    }
  }

.menu-item-enter-from,
.menu-item-leave-to {
  opacity: 0;
  transform: translateX(-110%)
}

.menu-item-enter-to,
.menu-item.leave-from {
  opacity: 1;
  transform: translateX(0)
}

.menu-item-enter-active,
.menu-item-leave-active {
  transition: .3s calc(var(--i) * .1s) ;
}

</style>