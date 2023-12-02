<script lang="ts" setup>
const options = {};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];
</script>

<template>
  <div>
    <a-chart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></a-chart>
  </div>
</template>
