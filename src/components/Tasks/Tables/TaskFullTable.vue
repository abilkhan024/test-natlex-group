<script lang="ts" setup>
import { Task } from "@/services/tasks";
import { normalizeString } from "@/utils/shared";
import { formatToReadbableDate } from "@/utils/date";
import { ref } from "vue";

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

const createModalIsOpen = ref(false);
</script>

<template>
  <div>
    <v-data-table :headers="headers" :items-per-page="-1" :items="tasks">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My tasks</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="createModalIsOpen" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New task
              </v-btn>
            </template>
          </v-dialog>
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
        <v-btn block color="cyan">
          <v-icon>mdi-pencil</v-icon>
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
