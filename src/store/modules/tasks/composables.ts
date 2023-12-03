import { Task } from "@/services/tasks";
import store from "@/store";
import { computed } from "vue";
import { TasksActions, TasksGetters } from "./type";

export function useTasks() {
  const tasksLists = computed<Task[]>(() => store.getters[TasksGetters.LIST]);
  const getTasks = () => store.dispatch(TasksActions.GET_LIST);
  return { tasksLists, getTasks };
}
