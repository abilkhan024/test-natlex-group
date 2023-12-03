<script lang="ts" setup>
import { ref } from "vue";
import { useAlerts } from "./store/modules/ui/composables";

const techStack = ["Vue", "VueX", "Vuetify"];

const routes = [
  { link: "/", title: "Dashboard" },
  { link: "/tasks", title: "My tasks" },
];
const { alertsList } = useAlerts();

const drawerOpen = ref(false);
</script>

<template>
  <v-app>
    <div class="v-alerts__container">
      <v-alert
        v-for="alert in alertsList"
        :key="alert.id"
        :type="alert.type"
        dense
      >
        {{ alert.text }}
      </v-alert>
    </div>
    <v-navigation-drawer v-model="drawerOpen" app>
      <v-col>
        <nav>
          <v-list dense nav class="mt-14 mt-lg-0">
            <v-list-item v-for="route in routes" :key="route.title" link>
              <v-list-item-content>
                <RouterLink class="text-h5" :to="route.link">
                  {{ route.title }}
                </RouterLink>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </nav>
      </v-col>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn color="primary" class="mr-4" @click="drawerOpen = !drawerOpen">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <h1 class="text-h6 text-md-h5 font-weight-bold">
        {{ $route?.meta?.title }}
      </h1>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <v-footer app>
        <div class="py-3">
          <h3 class="mb-2">Test assignment for "Natlex Group"</h3>

          <div class="d-flex align-center flex-wrap gap-2">
            <b>Main stack:</b>
            <v-chip color="green" v-for="library in techStack" :key="library">
              <span class="white--text font-weight-bold">{{ library }}</span>
            </v-chip>
            <v-chip color="green">
              <span class="white--text font-weight-bold">
                And more in package.json 😊
              </span>
            </v-chip>
          </div>
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>
