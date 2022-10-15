<template>
  <div class="aside-container">
    <AsideHeader/>
    <AsideMenu/>
  </div>
</template>

<script setup lang="ts">
import AsideHeader from './components/aside-header/index.vue'
import AsideMenu from './components/aside-menu/index.vue'

</script>

<style scoped lang="less">
.aside-container {
  height: calc(100% - 40px);
  margin: 20px 0 20px 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>