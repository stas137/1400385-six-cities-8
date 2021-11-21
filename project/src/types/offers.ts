import {AuthorizationStatus} from '../utils/const';

export type Comment = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: Host,
};

export type CommentPost = {
  comment: string,
  rating: number,
};

export type CommentFromServer = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: HostFromServer,
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type City = {
  location: Location,
  name: string,
};

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type HostFromServer = {
  'avatar_url': string,
  id: number,
  'is_pro': boolean,
  name: string,
};

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type OfferFromServer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: HostFromServer,
  id: number,
  images: string[];
  'is_favorite'?: boolean,
  'is_premium'?: boolean,
  location: Location,
  'max_adults'?: number,
  'preview_image'?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type OffersData = {
  offers: Offer[],
  offer: {
    bedrooms: number,
    city: {
      location: {
        latitude: number,
        longitude: number,
        zoom: number,
      },
      name: string,
    },
    description: string,
    goods: string[],
    host: {
      avatarUrl: string,
      id: number,
      isPro: boolean,
      name: string,
    },
    id: number,
    images: string[],
    isFavorite: boolean,
    isPremium: boolean,
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string,
  },
  nearBy: Offer[],
  comments: Comment[],
  isDataLoaded: boolean,
};

export type UserData = {
  avatarUrl: string | undefined,
  email: string | undefined,
  id: number | undefined,
  isPro: boolean | undefined,
  name: string | undefined,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData,
  isDisabledForm: boolean,
};

export type BookProcess = {
  currentCity: string,
  selectedSort: string,
  selectedOfferId: number | null,
  listOptions: string[],
};

export type Offers = Offer[];
export type OffersFromServer = OfferFromServer[];
export type Comments = Comment[];
export type CommentsFromServer = CommentFromServer[];
