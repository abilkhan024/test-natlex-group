import Vue from "vue";
import Vuex from "vuex";
import tasksModule from "./modules/tasks/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasksModule,
  },
});

export default store;
