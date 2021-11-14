import {ThunkActionResult} from '../types/action';
import {loadOffer, loadOffers, loadOfferNearBy, loadOfferComments, redirectToRoute, requireAuthorization, requireLogout, saveUserData} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, HttpCode} from '../const';
import {CommentPost, CommentsFromServer, OffersFromServer} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {adaptToClientOffer, adaptToClientOffers, adaptToClientComments} from '../common';
import {AxiosResponse} from 'axios';

enum StatusCode {
  Ok = 200,
}

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OffersFromServer>(APIRoute.Offers);
    dispatch(loadOffers(adaptToClientOffers(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.get(APIRoute.Login).then((responce: AxiosResponse) => {
      if (responce.status !== HttpCode.Unauthorized) {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      }
    });
  };

export const fetchOfferIdAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const responseOfferId = await api.get(`${APIRoute.Offers}/${offerId}`);

    if (responseOfferId.status === StatusCode.Ok) {
      dispatch(loadOffer(adaptToClientOffer(responseOfferId.data)));

      const responseOfferIdNearBy = await api.get(`${APIRoute.Offers}/${offerId}/nearby`);
      dispatch(loadOfferNearBy(adaptToClientOffers(responseOfferIdNearBy.data)));

      const responseOfferIdComments = await api.get(`${APIRoute.Comments}/${offerId}`);
      dispatch(loadOfferComments(adaptToClientComments(responseOfferIdComments.data)));

      const url = `/offer/${offerId}`;
      dispatch(redirectToRoute(url as AppRoute));
    } else {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<{'avatar_url': string, email: string, id: number, 'is_pro': boolean, name: string, token: Token}>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(saveUserData({avatarUrl: data.avatar_url, email: data.email, id: data.id, isPro: data.is_pro, name: data.name}));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const sendComment = ({rating, comment}: CommentPost, offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const responseOfferIdComments = await api.post<CommentsFromServer>(`${APIRoute.Comments}/${offerId}`, {rating, comment});
    if (responseOfferIdComments.status === StatusCode.Ok) {
      dispatch(loadOfferComments(adaptToClientComments(responseOfferIdComments.data)));
    }
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  };
