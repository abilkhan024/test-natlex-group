import { Task } from "@/services/tasks";

export type TasksModuleState = {
  list: Task[];
};

export enum TasksModuleActions {
  CREATE = "TasksModuleActions/CREATE",
  GET_LIST = "TasksModuleActions/LIST",
  UPDATE = "TasksModuleActions/UPDATE",
  DELETE = "TasksModuleActions/DELETE",
  GET_BY_ID = "TasksModuleActions/GET_BY_ID",
}

export enum TasksModuleGetters {
  LIST = "TasksModuleGetters/LIST",
  CURRENT_ITEM = "TasksModuleGetters/CURRENT_ITEM",
}

export enum TasksModuleMutations {
  SET_LIST = "TasksModuleMutations/SET_LIST",
  SET_CURRENT_ITEM = "TasksModuleMutations/SET_CURRENT_ITEM",
}
