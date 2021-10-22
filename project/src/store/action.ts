import {ActionType, ChangeCityAction} from '../types/action';

export const changeCity = (currentCity: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: currentCity,
});
