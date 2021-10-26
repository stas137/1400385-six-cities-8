import {Offers} from './offers';
import {AuthorizationStatus} from '../const';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'change-city',
  ChangeSort = 'change-sort',
  MouseEnter = 'mouse-enter',
  MouseLeave = 'mouse-leave',
  LoadOffers = 'load-offers',
  RequireAuthorization = 'require-authorization',
  RequireLogout = 'require-logout',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type ChangeSortAction = {
  type: ActionType.ChangeSort,
  payload: string,
}

export type MouseAction = {
  type: ActionType.MouseEnter | ActionType.MouseLeave,
  payload: number | null,
}

export type LoadOffers = {
  type: ActionType.LoadOffers,
  payload: Offers,
}

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
}

export type RequireLogout = {
  type: ActionType.RequireLogout,
  payload: AuthorizationStatus,
}

export type Actions = ChangeCityAction | ChangeSortAction | MouseAction | LoadOffers | RequireAuthorization | RequireLogout;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
