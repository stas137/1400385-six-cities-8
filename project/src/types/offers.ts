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

export type Offer = {
  id: string,
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
  isFavorite: boolean
};

export type Offers = Offer[];
