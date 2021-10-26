import {
  ActionType,
  ChangeCityAction,
  ChangeSortAction,
  MouseAction,
  LoadOffers,
  RequireAuthorization, RequireLogout
} from '../types/action';
import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const changeCity = (currentCity: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: currentCity,
});

export const changeSort = (selectedSort: string): ChangeSortAction => ({
  type: ActionType.ChangeSort,
  payload: selectedSort,
});

export const setActiveCard = (selectedOfferId: number | null): MouseAction => (
  selectedOfferId ?
    {
      type: ActionType.MouseEnter,
      payload: selectedOfferId,
    }
    : {
      type: ActionType.MouseLeave,
      payload: selectedOfferId,
    }
);

export const loadOffers = (offers: Offers): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = (authStatus: AuthorizationStatus): RequireLogout => ({
  type: ActionType.RequireLogout,
  payload: authStatus,
});

