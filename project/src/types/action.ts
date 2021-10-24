export enum ActionType {
  ChangeCity = 'change-city',
  ChangeOption = 'change-option',
  MouseEnter = 'mouse-enter',
  MouseLeave = 'mouse-leave',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type ChangeOptionAction = {
  type: ActionType.ChangeOption,
  payload: string,
}

export type MouseEnterAction = {
  type: ActionType.MouseEnter,
  payload: string,
}

export type MouseLeaveAction = {
  type: ActionType.MouseLeave,
}

export type Actions = ChangeCityAction | ChangeOptionAction | MouseEnterAction | MouseLeaveAction;
