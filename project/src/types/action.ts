export enum ActionType {
  ChangeCity = 'change-city',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type Action = ChangeCityAction;
