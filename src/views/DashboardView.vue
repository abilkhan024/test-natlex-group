<script lang="ts" setup>
import { useTasks } from "@/store/modules/tasks/composables";
import { useLoader } from "@/composables/loader";
import TasksPerDayStatsChart from "@/components/Tasks/Stats/TasksPerDayStatsChart.vue";
import TasksByStatusChart from "@/components/Tasks/Stats/TasksByStatusChart.vue";

const { tasksLists, getTasks } = useTasks();
const [loading] = useLoader(getTasks());
const CHART_HEIGHT = 300;
</script>

<template>
  <div>
    <v-row class="d-md-flex d-block" no-gutters>
      <v-col class="pa-3">
        <v-skeleton-loader
          :loading="loading"
          :height="CHART_HEIGHT"
          type="image"
          class="v-skeleton-loader--image-full"
        >
          <TasksPerDayStatsChart :height="CHART_HEIGHT" :tasks="tasksLists" />
        </v-skeleton-loader>
      </v-col>
      <v-col class="pa-3">
        <v-skeleton-loader
          :loading="loading"
          :height="CHART_HEIGHT"
          type="image"
          class="v-skeleton-loader--image-full"
        >
          <TasksByStatusChart :height="CHART_HEIGHT" :tasks="tasksLists" />
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center pa-3" no-gutters>
      <h3 class="text-center">
        Try adding new task or delete existing in
        <RouterLink to="/tasks">tasks page</RouterLink> to see changes in charts
      </h3>
    </v-row>
  </div>
</template>
