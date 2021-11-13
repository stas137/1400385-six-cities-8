import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus} from '../const';

const initialState = {
  currentCity: 'Paris',
  selectedSort: 'Popular',
  selectedOfferId: 0,
  offers: [],
  offer: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 0,
    images: [],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: '',
  },
  nearBy: [],
  comments: [],
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

const reducer = () => {
/*  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload, selectedSort: 'Popular'};
    case ActionType.ChangeSort:
      return {...state, selectedSort: action.payload};
    case ActionType.MouseEnter:
      return {...state, selectedOfferId: action.payload};
    case ActionType.MouseLeave:
      return {...state, selectedOfferId: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.LoadOffer:
      return {...state, offer: action.payload};
    case ActionType.LoadOfferNearBy:
      return {...state, nearBy: action.payload};
    case ActionType.LoadOfferComments:
      return {...state, comments: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SaveUserData:
      return {...state, userData: action.payload};
    default:
      return state;*/
  //}
};

export {reducer};
