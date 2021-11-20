import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {State} from '../../types/state';
import {redirect} from './redirect';
import {AppRoute} from '../../utils/const';
import {redirectToRoute} from '../action';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string){
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.SignIn));
    expect(fakeHistory.location.pathname).toBe(AppRoute.SignIn);
    expect(store.getActions()).toEqual([redirectToRoute(AppRoute.SignIn)]);
  });

  it('should not to be redirect to /login because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.SignIn});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.SignIn);
  });
});

