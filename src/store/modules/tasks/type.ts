import { Task } from "@/services/tasks";

export type TasksState = {
  list: Task[];
};

export enum TasksActions {
  CREATE = "TasksActions/CREATE",
  GET_LIST = "TasksActions/LIST",
  UPDATE = "TasksActions/UPDATE",
  DELETE = "TasksActions/DELETE",
  GET_BY_ID = "TasksActions/GET_BY_ID",
}

export enum TasksGetters {
  LIST = "TasksGetters/LIST",
  CURRENT_ITEM = "TasksGetters/CURRENT_ITEM",
}

export enum TasksMutations {
  SET_LIST = "TasksMutations/SET_LIST",
  SET_CURRENT_ITEM = "TasksMutations/SET_CURRENT_ITEM",
}
