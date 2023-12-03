import store from "@/store";
import { computed } from "vue";
import { Alert, UiActions, UiGetters } from "./type";

export function useAlerts() {
  const alertsList = computed<Alert[]>(
    () => store.getters[UiGetters.GET_ALERTS]
  );
  const success = (text: string) => {
    store.dispatch(UiActions.ADD_ALERT, { type: "success", text });
  };
  const error = (text: string) => {
    store.dispatch(UiActions.ADD_ALERT, { type: "error", text });
  };

  return { alertsList, success, error };
}
