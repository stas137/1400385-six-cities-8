import {offersData} from './offers-data';
import {OffersData} from '../../types/offers';
import {makeFakeOffer, makeFakeOfferNearBy, makeFakeOfferComments, makeFakeOffers} from '../../utils/mock';
import {loadOffer, loadOffers, loadOfferComments, loadOfferNearBy} from '../action';

const initialOffer = {
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
};

const initialState: OffersData = {
  offers: [],
  offer: initialOffer,
  nearBy: [],
  comments: [],
  isDataLoaded: false,
};

const mockOffer = makeFakeOffer();
const mockOffers = makeFakeOffers();
const mockOfferNearBy = makeFakeOfferNearBy();
const mockOfferComments = makeFakeOfferComments();

describe('Reducer offersData:', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
  });

  it('should save Offers data and update "isDataLoaded"', () => {
    expect(offersData({...initialState, isDataLoaded: true}, loadOffers(mockOffers))).toEqual({
      ...initialState,
      offers: mockOffers,
      isDataLoaded: true,
    });
  });

  it('should save Offer data', () => {
    expect(offersData(initialState, loadOffer(mockOffer))).toEqual({
      ...initialState,
      offer: mockOffer,
    });
  });

  it('should save NearBy data', () => {
    expect(offersData(initialState, loadOfferNearBy(mockOfferNearBy))).toEqual({
      ...initialState,
      nearBy: mockOfferNearBy,
    });
  });

  it('should save Comments data', () => {
    expect(offersData(initialState, loadOfferComments(mockOfferComments))).toEqual({
      ...initialState,
      comments: mockOfferComments,
    });
  });
});
