import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';
import {Offers} from '../../types/offers';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
