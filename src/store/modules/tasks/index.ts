import taskService, { Task } from "@/services/tasks";
import { ActionContext } from "@/store/type";
import { TasksActions, TasksGetters, TasksMutations, TasksState } from "./type";

const state: TasksState = {
  list: [],
};

const mutations = {
  [TasksMutations.SET_LIST](s: TasksState, payload: Task[]) {
    s.list = payload;
  },
};

const getters = {
  [TasksGetters.LIST](s: TasksState) {
    return s.list;
  },
};

const actions = {
  async [TasksActions.GET_LIST](ctx: TasksActionContext) {
    const potentialCache = ctx.getters[TasksGetters.LIST];
    if (potentialCache.length) return potentialCache;
    const result = await taskService.getList();
    ctx.commit(TasksMutations.SET_LIST, result);
    return result;
  },
};

const tasks = { state, getters, mutations, actions };

type TasksActionContext = ActionContext<
  TasksState,
  typeof mutations,
  typeof getters
>;

export default tasks;
