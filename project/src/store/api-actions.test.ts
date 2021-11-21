import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {State} from '../types/state';
import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import {APIRoute, AuthorizationStatus} from '../utils/const';
import {checkAuthAction} from './api-actions';
import {requireAuthorization, saveUserData} from './action';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(middlewares);
const mockAPI = new MockAdapter(api);
const store = mockStore();

describe('Async actions', () => {
  it('should authorization status is «auth» when server return 200', async() => {
    mockAPI.onGet(APIRoute.Login).reply(200, []);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    const getAction = store.getActions();
    expect(getAction).toEqual([requireAuthorization(AuthorizationStatus.Auth), saveUserData({avatarUrl: undefined, email: undefined, id: undefined, isPro: undefined, name: undefined})]);
  });
});


