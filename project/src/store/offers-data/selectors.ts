import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';
import {Offers, Offer, Comments} from '../../types/offers';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer => state[NameSpace.Data].offer;
export const getNearBy = (state: State): Offers => state[NameSpace.Data].nearBy;
export const getComments = (state: State): Comments => state[NameSpace.Data].comments;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
