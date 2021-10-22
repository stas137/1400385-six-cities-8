export type Features = {
  wiFi: boolean,
  heating: boolean,
  kitchen: boolean,
  fridge: boolean,
  washingMachine: boolean,
  coffeeMachine: boolean,
  dishwasher: boolean,
  towels: boolean,
  babySeat: boolean,
  cableTV: boolean,
};

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

export type Offer = {
  id: string,
  lat: number,
  lng: number,
  title: string,
  city: string,
  isPremium: boolean,
  rate: number,
  propertyType: string,
  bedrooms: number,
  maxAdults: number,
  previewImage: string,
  price: number,
  features: Features,
  comments: Comments,
  isFavorite: boolean
};

export type Offers = Offer[];
export type Comments = Comment[];
