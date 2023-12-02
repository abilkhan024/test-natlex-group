<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { Task } from "@/services/tasks";
import { getTasksPerDayStats } from "@/utils/tasks";
import { computed } from "vue";

const props = defineProps<{ tasks: Task[] }>();

const statsData = computed(() => getTasksPerDayStats(props.tasks));
const options = computed(() => ({
  chart: { type: "area" },
  theme: { mode: vuetify?.preset?.theme?.dark ? "dark" : "light" },
  dataLabels: { enabled: false },
  title: {
    text: "Tasks created per day",
    align: "center",
    offsetY: 10,
    style: { fontSize: "18px" },
  },
  stroke: { curve: "smooth" },
  xaxis: {
    type: "datetime",
    categories: Object.keys(statsData.value),
  },
  tooltip: { x: { format: "dd.MM.yy HH:mm" } },
}));
const series = computed(() => [
  {
    name: "Tasks created",
    data: Object.values(statsData.value),
  },
]);
</script>

<template>
  <a-chart :options="options" :series="series"></a-chart>
</template>
