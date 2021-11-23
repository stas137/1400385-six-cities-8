import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.Book].currentCity;
export const getSelectedSort = (state: State): string => state[NameSpace.Book].selectedSort;
export const getSelectedOfferId = (state: State): number | null => state[NameSpace.Book].selectedOfferId;
export const getListOptions = (state: State): string[] => state[NameSpace.Book].listOptions;
