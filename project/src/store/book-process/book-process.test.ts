import {bookProcess} from './book-process';
import {makeFakeCurrentCity, makeFakeSelectedSort, makeFakeSelectedOfferId} from '../../utils/mock';
import {changeCity, changeSort, setActiveCard} from '../action';

const initialState = {
  currentCity: 'Paris',
  selectedSort: 'Popular',
  selectedOfferId: null,
  listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
};

const mockCurrentCity = makeFakeCurrentCity();
const mockSelectedSort = makeFakeSelectedSort();
const mockSelectedOfferId = makeFakeSelectedOfferId();

describe('Reducer bookProcess:', () => {
  it('without additional parameters should return initial state', () => {
    expect(bookProcess(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
  });

  it('should save "currentCity" data', () => {
    expect(bookProcess(initialState, changeCity(mockCurrentCity))).toEqual({
      ...initialState,
      currentCity: mockCurrentCity,
    });
  });

  it('should save "selectedSort" data', () => {
    expect(bookProcess(initialState, changeSort(mockSelectedSort))).toEqual({
      ...initialState,
      selectedSort: mockSelectedSort,
    });
  });

  it('should save "selectedOfferId" data if it number', () => {
    expect(bookProcess(initialState, setActiveCard(mockSelectedOfferId))).toEqual({
      ...initialState,
      selectedOfferId: mockSelectedOfferId,
    });
  });

  it('should save "selectedOfferId" data if it null', () => {
    expect(bookProcess(initialState, setActiveCard(null))).toEqual({
      ...initialState,
      selectedOfferId: null,
    });
  });
});
