import {ThunkActionResult} from '../types/action';
import {loadOffers, requireAuthorization, requireLogout, saveUserData, redirectToRoute} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {AppRoute, APIRoute, AuthorizationStatus, HttpCode} from '../const';
import {Offer} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {adaptToClient} from '../common';
import {AxiosResponse} from 'axios';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(adaptToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.get(APIRoute.Login).then((responce: AxiosResponse) => {
      if (responce.status !== HttpCode.Unauthorized) {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      }
    });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<{'avatar_url': string, email: string, id: number, 'is_pro': boolean, name: string, token: Token}>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(saveUserData({avatarUrl: data.avatar_url, email: data.email, id: data.id, isPro: data.is_pro, name: data.name}));
    dispatch(redirectToRoute(AppRoute.Main));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout(AuthorizationStatus.NoAuth));
  };
