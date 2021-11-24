import {
  changeCity,
  changeSort,
  loadOffers,
  loadOffer,
  loadOfferNearBy,
  loadOfferComments,
  setActiveCard,
  requireAuthorization,
  requireLogout,
  saveUserData,
  redirectToRoute,
  disabledForm
} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSort = 'main/changeSort',
  MouseEnter = 'main/mouseEnter',
  MouseLeave = 'main/mouseLeave',
  LoadOffers = 'main/loadOffers',
  LoadOffer = 'property/loadOffer',
  LoadOfferNearBy = 'property/loadOfferNearBy',
  LoadOfferComments = 'property/loadOfferComments',
  RequireAuthorization = 'login/requireAuthorization',
  RequireLogout = 'login/requireLogout',
  SaveUserData = 'login/saveUserData',
  RedirectToRoute = 'main/redirect-to-route',
  DisabledForm = 'property/disabledForm',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSort>
  | ReturnType<typeof setActiveCard>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadOffer>
  | ReturnType<typeof loadOfferNearBy>
  | ReturnType<typeof loadOfferComments>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof saveUserData>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof disabledForm>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
