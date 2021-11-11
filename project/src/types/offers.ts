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
  /*[key: string]: string | number | object;*/
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

export type Offers = Offer[];
export type OffersFromServer = OfferFromServer[];
export type Comments = Comment[];
export type CommentsFromServer = CommentFromServer[];
