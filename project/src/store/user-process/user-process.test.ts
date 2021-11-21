import {userProcess} from './user-process';
import {UserProcess} from '../../types/offers';
import {makeFakeUser} from '../../utils/mock';
import {AuthorizationStatus} from '../../utils/const';
import {requireAuthorization, requireLogout, saveUserData} from '../action';

const initialUserData = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: initialUserData,
  isDisabledForm: false,
};

const mockUser = makeFakeUser();

describe('Reducer userProcess:', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
  });

  it('should update authorizationStatus to "NO_AUTH" when user logout', () => {
    expect(userProcess(initialState, requireLogout())).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: initialUserData,
      isDisabledForm: false,
    });
  });

  it('should update authorizationStatus to "AUTH" when user login', () => {
    expect(userProcess(initialState, requireAuthorization(AuthorizationStatus.Auth))).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      userData: initialUserData,
      isDisabledForm: false,
    });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    expect(userProcess(initialState, requireAuthorization(AuthorizationStatus.NoAuth))).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: initialUserData,
      isDisabledForm: false,
    });
  });

  it('should save userData when user login', () => {
    expect(userProcess(initialState, saveUserData(mockUser))).toEqual({
      ...initialState,
      userData: mockUser,
    });
  });
});
