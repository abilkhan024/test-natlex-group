<script lang="ts" setup>
import { Task, TaskCreateData } from "@/services/tasks";
import { TasksActions } from "@/store/modules/tasks/type";
import { computed, ref } from "vue";
import { TASKS_STATUSES } from "@/constants/tasks";
import { normalizeString } from "@/utils/shared";
import store from "@/store";
import { useAlerts } from "@/store/modules/ui/composables";

const props = defineProps<{ task: Task | null; value: boolean }>();
const emit = defineEmits<{ (e: "input", value: boolean): void }>();
const isEdit = computed(() => Boolean(props.task));
const loading = ref(false);
const defaultValues: TaskCreateData = {
  title: "",
  body: "",
  status: TASKS_STATUSES[0],
};
const { success: alertSuccess, error } = useAlerts();
const getDefaultValue = () =>
  isEdit.value ? ({ ...props.task } as TaskCreateData) : { ...defaultValues };
const formData = ref<TaskCreateData>(getDefaultValue());
const taskStatuses = computed(() =>
  TASKS_STATUSES.map((status) => ({
    text: normalizeString(status),
    value: status,
  }))
);
const modalOpen = computed({
  get: () => {
    if (props.value) formData.value = getDefaultValue();
    return props.value;
  },
  set: (value: boolean) => emit("input", value),
});
const validate = () => {
  if (!formData.value.title) {
    throw "Title is required!";
  }
};

const onSave = async () => {
  loading.value = true;
  const action = isEdit.value ? editTask : createTask;
  try {
    const success = await action();
    if (success) {
      alertSuccess("Saved successfully");
      modalOpen.value = false;
    } else {
      error("Error during save");
    }
  } catch (validationError) {
    console.log(validationError);
    error(validationError as string);
  } finally {
    loading.value = false;
  }
};
const createTask = async () => {
  validate();
  const result = await store.dispatch(TasksActions.CREATE, formData.value);
  return result.success;
};
const editTask = async () => {
  validate();
  const result = await store.dispatch(TasksActions.EDIT_BY_ID, {
    ...formData.value,
    id: props.task!.id,
  });
  return result.success;
};
</script>

<template>
  <v-dialog v-bind="$attrs" max-width="500" v-model="modalOpen">
    <template v-slot:activator="props">
      <slot name="activator" v-bind="props" />
    </template>
    <v-card>
      <v-card-title class="pa-4">
        <span class="text-h5">{{ isEdit ? "Edit task" : "New task" }}</span>
      </v-card-title>
      <v-container class="px-4">
        <v-text-field v-model="formData.title" label="Title"></v-text-field>
        <v-textarea v-model="formData.body" label="Body"></v-textarea>
        <v-select
          v-model="formData.status"
          :items="taskStatuses"
          label="Task status"
        ></v-select>
      </v-container>
      <v-card-actions class="pb-4">
        <v-btn color="error" @click="modalOpen = false"> Close </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onSave" :loading="loading"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
