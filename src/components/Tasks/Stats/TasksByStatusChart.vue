<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { Task } from "@/services/tasks";
import { getTasksCountBySameStatus } from "@/utils/tasks";
import { computed } from "vue";

const props = defineProps<{ tasks: Task[] }>();

const statsData = computed(() => getTasksCountBySameStatus(props.tasks));
const options = computed(() => ({
  theme: { mode: vuetify?.preset?.theme?.dark ? "dark" : "light" },
  labels: Object.keys(statsData.value),
  title: {
    text: "Tasks by status",
    align: "center",
    style: { fontSize: "18px" },
  },
  legend: { fontWeight: 600 },
}));
const series = computed(() => Object.values(statsData.value));
</script>

<template>
  <a-chart
    v-bind="$attrs"
    type="donut"
    :options="options"
    :series="series"
  ></a-chart>
</template>
