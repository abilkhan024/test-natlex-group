import Vue from "vue";
import Vuex from "vuex";
import tasksModule from "./modules/tasks/index";
import uiModule from "./modules/ui/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasksModule,
    uiModule,
  },
});

export default store;
