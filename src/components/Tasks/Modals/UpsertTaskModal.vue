<script lang="ts" setup>
import { Task, TaskCreateData } from "@/services/tasks";
import { computed, ref } from "vue";
import { TASKS_STATUSES } from "@/constants/tasks";
import { normalizeString } from "@/utils/shared";

const props = defineProps<{ task: Task | null; value: boolean }>();
const emit = defineEmits<{ (e: "input", value: boolean): void }>();
const isEdit = computed(() => Boolean(props.task));
const defaultValues: TaskCreateData = {
  title: "",
  body: "",
  status: TASKS_STATUSES[0],
};
const getDefaultValue = () =>
  isEdit.value ? ({ ...props.task } as TaskCreateData) : { ...defaultValues };
const formData = ref<TaskCreateData>(getDefaultValue());
const taskStatuses = computed(() =>
  TASKS_STATUSES.map((status) => ({
    text: normalizeString(status),
    value: status,
  }))
);
const modelBinding = computed({
  get: () => {
    if (props.value) formData.value = getDefaultValue();
    return props.value;
  },
  set: (value: boolean) => emit("input", value),
});
</script>

<template>
  <v-dialog v-bind="$attrs" max-width="500" v-model="modelBinding">
    <template v-slot:activator="props">
      <slot name="activator" v-bind="props" />
    </template>
    <v-card>
      <v-card-title class="pa-4">
        <span class="text-h5">{{ isEdit ? "Edit task" : "New task" }}</span>
      </v-card-title>
      <v-container class="px-4">
        <v-text-field
          v-model="formData.title"
          label="Title"
          required
        ></v-text-field>
        <v-textarea v-model="formData.body" label="Body" required></v-textarea>
        <v-select
          v-model="formData.status"
          :items="taskStatuses"
          label="Task status"
          required
        ></v-select>
      </v-container>
      <v-card-actions class="pb-4">
        <v-btn color="error" @click="modelBinding = false"> Close </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="modelBinding = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
