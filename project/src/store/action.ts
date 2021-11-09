import {ActionType} from '../types/action';
import {Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/auth-data';

export const changeCity = (currentCity: string) => ({
  type: ActionType.ChangeCity,
  payload: currentCity,
} as const);

export const changeSort = (selectedSort: string) => ({
  type: ActionType.ChangeSort,
  payload: selectedSort,
} as const);

export const setActiveCard = (selectedOfferId: number | null) => (
  selectedOfferId ?
    {
      type: ActionType.MouseEnter,
      payload: selectedOfferId,
    } as const
    : {
      type: ActionType.MouseLeave,
      payload: selectedOfferId,
    } as const
);

export const loadOffers = (offers: Offers) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireLogout,
  payload: authStatus,
} as const);

export const saveUserData = (data: UserData) => ({
  type: ActionType.SaveUserData,
  payload: data,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
