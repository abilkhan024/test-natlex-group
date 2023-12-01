import {
  TasksModuleActions,
  TasksModuleGetters,
  TasksModuleState,
} from "./type";

const state: TasksModuleState = {
  list: [],
};

const tasksModule = {
  state,
  getters: {
    [TasksModuleGetters.LIST](s: TasksModuleState) {
      return s.list;
    },
  },
  mutations: {},
  actions: {
    [TasksModuleActions.GET_LIST]() {
      console.log("getting list...");
    },
  },
};

export default tasksModule;
