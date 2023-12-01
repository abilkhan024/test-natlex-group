<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // alert("asd");
  },
});
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <router-view /> -->
  </nav>
</template>
