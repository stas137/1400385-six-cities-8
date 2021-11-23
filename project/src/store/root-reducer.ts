import {combineReducers} from 'redux';
import {offersData} from './offers-data/offers-data';
import {bookProcess} from './book-process/book-process';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  Data = 'DATA',
  Book = 'BOOK',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData,
  [NameSpace.Book]: bookProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
