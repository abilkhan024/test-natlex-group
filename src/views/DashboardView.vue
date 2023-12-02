<script lang="ts" setup>
import { useTasks } from "@/store/modules/tasks/composables";
import { useLoader } from "@/composables/loader";
import TasksPerDayStats from "@/components/Tasks/Stats/TasksPerDayStats.vue";

const { tasksLists, getTasks } = useTasks();
const [loading] = useLoader(getTasks());
</script>

<template>
  <div>
    <v-row class="d-md-flex d-block" no-gutters>
      <v-col class="pa-3">
        <v-skeleton-loader
          v-if="loading"
          height="200"
          type="card"
        ></v-skeleton-loader>
        <TasksPerDayStats v-else :tasks="tasksLists" />
      </v-col>
      <v-col class="pa-3">
        <v-skeleton-loader
          v-if="loading"
          height="200"
          type="card"
        ></v-skeleton-loader>
        <TasksPerDayStats v-else :tasks="tasksLists" />
      </v-col>
    </v-row>
    <v-row class="d-md-flex d-block" no-gutters>
      <v-col class="pa-3">
        <v-skeleton-loader
          v-if="loading"
          height="200"
          type="card"
        ></v-skeleton-loader>
        <TasksPerDayStats v-else :tasks="tasksLists" />
      </v-col>
      <v-col class="pa-3">
        <v-skeleton-loader
          v-if="loading"
          height="200"
          type="card"
        ></v-skeleton-loader>
        <TasksPerDayStats v-else :tasks="tasksLists" />
      </v-col>
    </v-row>
  </div>
</template>
