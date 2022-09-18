<template>
  <div class="home-container">
    <div class="home-header">
      <ContainerBox class="pie">
        <PieCharts/>
      </ContainerBox>
      <ContainerBox>
      
      </ContainerBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import PieCharts from './components/pie-charts/index.vue'
</script>

<style scoped lang="less">
.home-container {
  .home-header {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 20px;
    .pie {
      flex: 1;
      min-width: 430px;
    }
  }
}
</style>