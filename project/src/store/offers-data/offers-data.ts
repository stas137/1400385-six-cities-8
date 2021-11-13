import {Actions, ActionType} from '../../types/action';
import {OffersData} from '../../types/offers';

const initialState = {
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
  isDataLoaded: false,
};

const offersData = (state: OffersData = initialState, action: Actions): OffersData => {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.LoadOffer:
      return {...state, offer: action.payload};
    case ActionType.LoadOfferNearBy:
      return {...state, nearBy: action.payload};
    case ActionType.LoadOfferComments:
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export {offersData};
