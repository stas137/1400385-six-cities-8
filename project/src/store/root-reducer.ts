import {combineReducers} from 'redux';
import {offersData} from './offers-data/offers-data';
import {bookProcess} from './book-process/book-process';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  book = 'BOOK',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: offersData,
  [NameSpace.book]: bookProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
