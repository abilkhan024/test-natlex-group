<script lang="ts" setup>
import { useTasks } from "@/store/modules/tasks/composables";
import { useLoader } from "@/composables/loader";
import TasksPerDayStatsChart from "@/components/Tasks/Stats/TasksPerDayStatsChart.vue";
import TasksByStatusChart from "@/components/Tasks/Stats/TasksByStatusChart.vue";
import RangeDatePicker from "@/components/Shared/Inputs/RangeDatePicker.vue";
import { computed, ref } from "vue";
import dayjs from "dayjs";

const { tasksLists, getTasks } = useTasks();
const [loading] = useLoader(getTasks());
const CHART_HEIGHT = 300;
const dateFilter = ref([]);
const filteredTasks = computed(() => {
  const [fromDate, toDate] = dateFilter.value;
  if (!fromDate && !toDate) return tasksLists.value;
  return tasksLists.value.filter((task) => {
    const createdAt = dayjs(task.createdAt);
    return (
      createdAt.isAfter(`${fromDate} 00:00:00`) &&
      createdAt.isBefore(`${toDate} 23:59:59`)
    );
  });
});
</script>

<template>
  <div>
    <RangeDatePicker v-model="dateFilter" />
    <v-row class="d-md-flex d-block" no-gutters>
      <v-col class="pa-3">
        <v-skeleton-loader
          :loading="loading"
          :height="CHART_HEIGHT"
          type="image"
          class="v-skeleton-loader--image-full"
        >
          <TasksPerDayStatsChart
            :height="CHART_HEIGHT"
            :tasks="filteredTasks"
          />
        </v-skeleton-loader>
      </v-col>
      <v-col class="pa-3">
        <v-skeleton-loader
          :loading="loading"
          :height="CHART_HEIGHT"
          type="image"
          class="v-skeleton-loader--image-full"
        >
          <TasksByStatusChart :height="CHART_HEIGHT" :tasks="filteredTasks" />
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center pa-3" no-gutters>
      <h3 class="text-center mb-10">
        Try adding new task or delete existing in
        <RouterLink to="/tasks">tasks page</RouterLink> to see changes in charts
      </h3>
    </v-row>
  </div>
</template>
