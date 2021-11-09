import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus} from '../const';

const initialState = {
  currentCity: 'Paris',
  selectedSort: 'Popular',
  selectedOfferId: null,
  offers: [],
  listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload, selectedSort: 'Popular'};
    case ActionType.ChangeSort:
      return {...state, selectedSort: action.payload};
    case ActionType.MouseEnter:
      return {...state, selectedOfferId: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SaveUserData:
      return {...state, userData: action.payload};
    default:
      return state;
  }
};

export {reducer};
