import {ThunkActionResult} from '../types/action';
import {
  loadOffer,
  loadOfferComments,
  loadOfferNearBy,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  saveUserData,
  disabledForm
} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, Bookmark} from '../utils/const';
import {CommentPost, CommentsFromServer, OffersFromServer} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {adaptToClientComments, adaptToClientOffer, adaptToClientOffers} from '../utils/common';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

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
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUserData({avatarUrl: data.avatar_url, email: data.email, id: data.id, isPro: data.is_pro, name: data.name}));
    }
    catch {
      toast.configure();
      toast.info(AUTH_FAIL_MESSAGE);
    }
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

export const fetchOfferIdBookmarkAction = (offerId: number, status: Bookmark, offerCurrentId: number | null): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      if (!offerCurrentId) {
        const responseOfferId = await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);
        dispatch(loadOffer(adaptToClientOffer(responseOfferId.data)));
      } else {
        await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);

        const responseOfferIdNearBy = await api.get(`${APIRoute.Offers}/${offerCurrentId}/nearby`);
        dispatch(loadOfferNearBy(adaptToClientOffers(responseOfferIdNearBy.data)));
      }

      const responseOffers = await api.get<OffersFromServer>(APIRoute.Offers);
      dispatch(loadOffers(adaptToClientOffers(responseOffers.data)));
    }
    catch {
      dispatch(redirectToRoute(AppRoute.SignIn));
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

export const sendComment = ({rating, comment}: CommentPost, offerId: number, clearForm: () => void): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      dispatch(disabledForm(true));
      const responseOfferIdComments = await api.post<CommentsFromServer>(`${APIRoute.Comments}/${offerId}`, {rating, comment});
      dispatch(loadOfferComments(adaptToClientComments(responseOfferIdComments.data)));
      clearForm();
    }
    catch {
      toast.configure();
      toast.info('Сообщение не было отправлено, попробуйте позже');
    }
    finally {
      dispatch(disabledForm(false));
    }
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(redirectToRoute(AppRoute.Main));
  };
