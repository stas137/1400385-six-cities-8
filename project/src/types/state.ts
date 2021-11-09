import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';
import {UserData} from './auth-data';

export type State = {
  currentCity: string,
  selectedSort: string,
  selectedOfferId: number | null,
  offers: Offers,
  listOptions: string[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userData: UserData,
};
