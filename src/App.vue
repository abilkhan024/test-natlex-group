<script lang="ts" setup>
import { ref } from "vue";
import store from "./store";
import { TasksModuleActions } from "./store/modules/tasks/type";

const techStack = ["Vue", "VueX", "Vuetify"];
const routes = [
  { link: "/", title: "Dashboard" },
  { link: "/tasks", title: "My tasks" },
];

store.dispatch(TasksModuleActions.GET_LIST)
const drawerOpen = ref(false);
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawerOpen" app>
      <v-col>
        <nav class="pt-4">
          <v-list dense nav>
            <v-list-item v-for="route in routes" :key="route.title" link>
              <v-list-item-content>
                <RouterLink class="text-h5" :to="route.link">
                  {{ route.title }}</RouterLink
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </nav>
      </v-col>
    </v-navigation-drawer>

    <v-app-bar app>
      <h1 class="text-h6 text-md-h4">
        Natlex Group task manager | {{ $route?.meta?.title }}
      </h1>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <v-footer app>
        <v-row class="px-3 py-3">
          <h3>Stack for this assignment:</h3>

          <v-chip v-for="library in techStack" class="ml-3" :key="library">{{
            library
          }}</v-chip>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>
