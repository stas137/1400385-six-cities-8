type Features = {
  wiFi: Boolean,
  heating: Boolean,
  kitchen: Boolean,
  fridge: Boolean,
  washingMachine: Boolean,
  coffeeMachine: Boolean,
  dishwasher: Boolean,
  towels: Boolean,
  babySeat: Boolean,
  cableTV: Boolean,
};

type Offers = {
  id: Number,
  name: String,
  section: String,
  rate: Number,
  type: String,
  countBedrooms: Number,
  countAdults: Number,
  cost: Number,
  features: Features,
};

export const offers: Offers[] = [{
  id: 1,
  name: 'Beautiful & luxurious studio at great location',
  section: 'Premium',
  rate: 4.8,
  type: 'Apartment',
  countBedrooms: 3,
  countAdults: 4,
  cost: 120,
  features: {
    wiFi: true,
    heating: true,
    kitchen: true,
    fridge: true,
    washingMachine: true,
    coffeeMachine: true,
    dishwasher: true,
    towels: true,
    babySeat: true,
    cableTV: true,
  }
}, {
  id: 2,
  name: 'Beautiful & luxurious studio at great location',
  section: 'Premium',
  rate: 4.5,
  type: 'Apartment',
  countBedrooms: 2,
  countAdults: 3,
  cost: 100,
  features: {
    wiFi: false,
    heating: false,
    kitchen: false,
    fridge: false,
    washingMachine: false,
    coffeeMachine: false,
    dishwasher: false,
    towels: false,
    babySeat: false,
    cableTV: true,
  }
}];
