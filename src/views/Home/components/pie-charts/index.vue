<template>
  <div class="pie-charts-container" ref="pieCharts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted, ref } from 'vue';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

const pieCharts = ref<HTMLElement>()

onMounted(() => {
  
  if (!pieCharts.value) return
  console.log('hha');
  const myChart = echarts.init(pieCharts.value)


  const option = {
    title: {
      text: 'Status'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      icon: 'circle',
      left: 'right',
      top: 'center',
      data: [
        'rose 1',
        'rose 2',
        'rose 3',
        'rose 4',
      ]
    },
    series: [
      {
        name: 'Area Mode',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 30, name: 'rose 2' },
          { value: 20, name: 'rose 3' },
          { value: 10, name: 'rose 4' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener('resize', (function () {
    let count = 0
    return function () {
      count ++
      if (!(count % 5)) myChart.resize()
    }
    

  })())
})


</script>

<style scoped lang="less">
.pie-charts-container {
  width: 100%;
  height: 400px;
}
</style>