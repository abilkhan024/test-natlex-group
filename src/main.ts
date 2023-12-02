import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.css";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.use(Vuetify);
Vue.component("a-chart", VueApexCharts);

const vuetify = new Vuetify();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
