import { ActionContext as VuexActionContext } from "vuex";

export type ActionContext<
  TState,
  TMutatations extends Record<string, (...args: any) => any>,
  TGetters extends Record<string, (...args: any) => any>
> = {
  commit<K extends keyof TMutatations>(
    key: K,
    payload: Parameters<TMutatations[K]>[1]
  ): ReturnType<TMutatations[K]>;
  getters: Record<keyof TGetters, ReturnType<TGetters[keyof TGetters]>>;
} & Omit<VuexActionContext<TState, {}>, "commit" | "getters">;
