import {Offers} from '../types/offers';

export type State = {
  currentCity: string,
  currentOption: string,
  selectedOfferId: string | null,
  offers: Offers,
  listOptions: string[],
};
