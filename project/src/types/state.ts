import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';

export type State = {
  currentCity: string,
  selectedSort: string,
  selectedOfferId: number | null,
  offers: Offers,
  listOptions: string[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
