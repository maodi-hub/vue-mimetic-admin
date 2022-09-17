<template>
  <transition name="mimetic" appear>
    <div class="mimetic box">
      <slot></slot>
    </div>
  </transition>
  
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.box {
  padding: 10px;
  min-width: 56px;
  min-height: 56px;
  width: 56px;
  height: 56px;
}
</style>