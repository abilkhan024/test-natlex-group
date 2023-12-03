export type AlertType = "error" | "success";

export type Alert = {
  id?: number;
  type: AlertType;
  title: string;
};

export type UiState = {
  alerts: Alert[];
};

export enum UiActions {
  ADD_ALERT = "UiActions/ADD_ALERT",
}

export enum UiGetters {
  GET_ALERTS = "UiGetters/GET_ALERTS",
}

export enum UiMutations {
  ADD_ALERT = "UiMutations/ADD_ALERT",
  DELETE_ALERT = "UiMutations/DELETE_ALERT",
}
