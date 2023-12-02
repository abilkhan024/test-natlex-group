import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.css";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import VueApexCharts from "vue-apexcharts";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.component("a-chart", VueApexCharts);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
