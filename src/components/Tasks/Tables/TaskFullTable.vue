<script lang="ts" setup>
import { Task } from "@/services/tasks";
import { normalizeString } from "@/utils/shared";
import { formatToReadbableDate } from "@/utils/date";
import { ref } from "vue";
import UpsertTaskModal from "@/components/Tasks/Modals/UpsertTaskModal.vue";

const props = defineProps<{ tasks: Task[] }>();

const headers = [
  { text: "Title", value: "title" },
  { text: "Body", value: "body" },
  { text: "Created at", value: "createdAt" },
  { text: "Updated at", value: "updatedAt" },
  { text: "Status", value: "status" },
  { text: "Edit", value: "edit" },
  { text: "Delete", value: "delete" },
];

const upsertModalIsOpen = ref(false);
const taskToEdit = ref<null | Task>(null);
const editTask = (task: Task) => {
  taskToEdit.value = task;
  upsertModalIsOpen.value = true;
};
const createTask = () => {
  taskToEdit.value = null;
  upsertModalIsOpen.value = true;
};
</script>

<template>
  <div>
    <UpsertTaskModal :task="taskToEdit" v-model="upsertModalIsOpen" />
    <v-data-table :headers="headers" :items-per-page="-1" :items="tasks">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My tasks</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="createTask">
            New task
          </v-btn>
        </v-toolbar>
      </template>
      <template #item.createdAt="{ value }">
        {{ formatToReadbableDate(value) }}
      </template>
      <template #item.updatedAt="{ value }">
        {{ formatToReadbableDate(value) }}
      </template>
      <template #item.status="{ value }">
        {{ normalizeString(value) }}
      </template>
      <template #item.edit="{ item }">
        <v-btn @click="editTask(item)" block color="cyan">
          <v-icon color="white">mdi-pencil</v-icon>
        </v-btn>
      </template>
      <template #item.delete="{ item }">
        <v-btn block color="error">
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
