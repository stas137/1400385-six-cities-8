export type Comment = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }
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

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[];
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
  comments?: Comments,
};

export type OfferFromServer = {
  /*[key: string]: string | number | object;*/
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[];
  isFavorite?: boolean,
  'is_favorite'?: boolean,
  isPremium?: boolean,
  'is_premium'?: boolean,
  location: Location,
  maxAdults?: number,
  'max_adults'?: number,
  previewImage?: string,
  'preview_image'?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type Offers = Offer[];
export type OffersFromServer = OfferFromServer[];
export type Comments = Comment[];
