import {
  changeCity,
  changeSort,
  loadOffers,
  setActiveCard,
  requireAuthorization,
  requireLogout,
  saveUserData,
  redirectToRoute
} from '../store/action';
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
  SaveUserData = 'save-user-data',
  RedirectToRoute = 'redirect-to-route',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSort>
  | ReturnType<typeof setActiveCard>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof saveUserData>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
