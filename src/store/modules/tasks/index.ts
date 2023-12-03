import taskService, {
  Task,
  TaskCreateData,
  TaskEditData,
} from "@/services/tasks";
import { ActionContext } from "@/store/type";
import dayjs from "dayjs";
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
    const result = await taskService.getList();
    ctx.commit(TasksMutations.SET_LIST, result);
    return result;
  },
  async [TasksActions.DELETE_BY_ID](ctx: TasksActionContext, id: number) {
    const result = await taskService.deleteById(id);
    if (result.success) {
      await ctx.dispatch(TasksActions.GET_LIST);
    }
    return result;
  },
  async [TasksActions.CREATE](
    ctx: TasksActionContext,
    payload: TaskCreateData
  ) {
    const result = await taskService.create(payload);
    if (result.success) {
      await ctx.dispatch(TasksActions.GET_LIST);
    }
    return result;
  },
  async [TasksActions.EDIT_BY_ID](
    ctx: TasksActionContext,
    payload: TaskEditData
  ) {
    const result = await taskService.editById(payload);
    if (result.success) {
      await ctx.dispatch(TasksActions.GET_LIST);
    }
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
