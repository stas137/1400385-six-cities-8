import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.book].currentCity;
export const getSelectedSort = (state: State): string => state[NameSpace.book].selectedSort;
export const getSelectedOfferId = (state: State): number | null => state[NameSpace.book].selectedOfferId;
export const getListOptions = (state: State): string[] => state[NameSpace.book].listOptions;
