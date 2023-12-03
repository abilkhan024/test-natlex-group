import { ALERT_DURATION_IN_MS } from "@/constants/ui";
import { ActionContext } from "@/store/type";
import { Alert, UiActions, UiGetters, UiMutations, UiState } from "./type";

const state: UiState = { alerts: [] };

const mutations = {
  [UiMutations.ADD_ALERT](s: UiState, payload: Alert) {
    s.alerts.push(payload);
  },
  [UiMutations.DELETE_ALERT](s: UiState, id: number) {
    const index = s.alerts.findIndex((alert) => alert.id === id);
    if (index !== -1) {
      s.alerts.splice(index, 1);
    }
  },
};

const getters = { [UiGetters.GET_ALERTS]: (s: UiState) => s.alerts };

const actions = {
  async [UiActions.ADD_ALERT](ctx: UiActionContext, payload: Alert) {
    const id = ctx.getters[UiGetters.GET_ALERTS].length + 1;
    ctx.commit(UiMutations.ADD_ALERT, { ...payload, id });
    setTimeout(() => {
      ctx.commit(UiMutations.DELETE_ALERT, id);
    }, ALERT_DURATION_IN_MS);
  },
};

const uiModule = { state, getters, mutations, actions };

type UiActionContext = ActionContext<UiState, typeof mutations, typeof getters>;

export default uiModule;
