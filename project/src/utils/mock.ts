import {Offers, Offer, UserData, Comment, Host} from '../types/offers';
import {internet, datatype, commerce, random, name} from 'faker';

export const makeFakeListOptions = ():string[] => ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const makeFakeUser = ():UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
});

export const makeFakeHost = ():Host => ({
  avatarUrl: internet.avatar(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
});

export const makeFakeOfferComment = ():Comment => ({
  comment: datatype.string(),
  date: datatype.datetime(),
  id: datatype.number(),
  rating: datatype.number(),
  user: makeFakeHost(),
});

export const makeFakeOffer = ():Offer => ({
  bedrooms: datatype.number(),
  city: {
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number(),
    },
    name: internet.userName(),
  },
  description: commerce.productDescription(),
  goods: random.arrayElements(),
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: datatype.number(),
  images: random.arrayElements(),
  isFavorite: datatype.boolean(),
  isPremium: false,
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number(),
  },
  maxAdults: datatype.number(),
  previewImage: internet.avatar(),
  price: datatype.number(),
  rating: datatype.number(),
  title: name.title(),
  type: datatype.string(),
});

export const makeFakeOffers = ():Offers => (new Array(5).fill(null).map(() => (makeFakeOffer())));
export const makeFakeOfferNearBy = ():Offers => (new Array(2).fill(null).map(() => (makeFakeOffer())));
export const makeFakeOfferComments = ():Comment[] => (new Array(2).fill(null).map(() => (makeFakeOfferComment())));

export const makeFakeCurrentCity = ():string => (datatype.string());
export const makeFakeSelectedSort = ():string => (datatype.string());
export const makeFakeSelectedOfferId = ():number => (datatype.number());
