import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';
import {Offers, Offer, Comments} from '../../types/offers';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getOffer = (state: State): Offer => state[NameSpace.data].offer;
export const getNearBy = (state: State): Offers => state[NameSpace.data].nearBy;
export const getComments = (state: State): Comments => state[NameSpace.data].comments;
