import {Actions, ActionType} from '../../types/action';
import {UserProcess} from '../../types/offers';
import {AuthorizationStatus} from '../../utils/const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
  },
  isDisabledForm: false,
};

const userProcess = (state: UserProcess = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SaveUserData:
      return {...state, userData: action.payload};
    case ActionType.DisabledForm:
      return {...state, isDisabledForm: action.payload};
    default:
      return state;
  }
};

export {userProcess};
