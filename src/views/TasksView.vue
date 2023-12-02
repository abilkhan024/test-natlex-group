<script lang="ts" setup>
import { useTasks } from "@/store/modules/tasks/composables";
import TaskFullTable from "@/components/Tasks/Tables/TaskFullTable.vue";
import { useLoader } from "@/composables/loader";

const { tasksLists, getTasks } = useTasks();
const [loading] = useLoader(getTasks());
</script>

<template>
  <v-skeleton-loader type="table" :loading="loading">
    <TaskFullTable :tasks="tasksLists" />
  </v-skeleton-loader>
</template>
