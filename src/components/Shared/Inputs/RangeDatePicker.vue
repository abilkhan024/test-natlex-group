<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps<{ value: string[] }>();
const emit = defineEmits<{ (e: "input", value: string[]): void }>();
const dateVModel = computed({
  get: () => props.value,
  set: (value: string[]) => emit("input", value),
});

const menuRef = ref();
const menuOpen = ref(false);
</script>

<template>
  <v-menu
    ref="menuRef"
    v-model="menuOpen"
    :close-on-content-click="false"
    :return-value.sync="dateVModel"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateVModel"
        label="Choose date range"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker range v-model="dateVModel" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menuOpen = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="menuRef.save(dateVModel)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>
