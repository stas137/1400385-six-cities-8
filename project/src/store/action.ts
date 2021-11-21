import {ActionType} from '../types/action';
import {Offers, Offer, Comments} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../utils/const';
import {UserData} from '../types/offers';

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

export const loadOffer = (offer: Offer) => ({
  type: ActionType.LoadOffer,
  payload: offer,
} as const);

export const loadOfferNearBy = (offers: Offers) => ({
  type: ActionType.LoadOfferNearBy,
  payload: offers,
} as const);

export const loadOfferComments = (comments: Comments) => ({
  type: ActionType.LoadOfferComments,
  payload: comments,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const saveUserData = (data: UserData) => ({
  type: ActionType.SaveUserData,
  payload: data,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const disabledForm = (isDisabledForm: boolean) => ({
  type: ActionType.DisabledForm,
  payload: isDisabledForm,
} as const);
