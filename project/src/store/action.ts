import {ActionType, ChangeCityAction, ChangeOptionAction, MouseEnterAction, MouseLeaveAction} from '../types/action';

export const changeCity = (currentCity: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: currentCity,
});

export const changeOption = (currentOption: string): ChangeOptionAction => ({
  type: ActionType.ChangeOption,
  payload: currentOption,
});

export const enterMouse = (selectedOfferId: string): MouseEnterAction => ({
  type: ActionType.MouseEnter,
  payload: selectedOfferId,
});

export const leaveMouse = (): MouseLeaveAction => ({
  type: ActionType.MouseLeave,
});
