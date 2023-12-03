<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ value: boolean; title?: string; body?: string }>();
const emit = defineEmits<{
  (e: "input", value: boolean): void;
  (e: "confirm"): void;
}>();

const modelBinding = computed({
  get: () => props.value,
  set: (value: boolean) => emit("input", value),
});
const confirm = () => {
  emit("confirm");
  modelBinding.value = false;
};
</script>

<template>
  <v-dialog v-bind="$attrs" max-width="500" v-model="modelBinding">
    <v-card>
      <v-card-title class="pa-4">
        <slot name="title">
          <span class="text-body-1">{{ title }}</span>
        </slot>
      </v-card-title>
      <v-divider></v-divider>
      <v-container class="px-4">
        <slot name="body"> {{ body }} </slot>
      </v-container>
      <v-card-actions class="pb-4">
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="modelBinding = false">
          Close
        </v-btn>
        <v-btn color="primary" @click="confirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
