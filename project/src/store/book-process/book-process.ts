import {Actions, ActionType} from '../../types/action';
import {BookProcess} from '../../types/offers';

const initialState = {
  currentCity: 'Paris',
  selectedSort: 'Popular',
  selectedOfferId: null,
  listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
};

const bookProcess = (state: BookProcess = initialState, action: Actions): BookProcess => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload, selectedSort: 'Popular'};
    case ActionType.ChangeSort:
      return {...state, selectedSort: action.payload};
    case ActionType.MouseEnter:
      return {...state, selectedOfferId: action.payload};
    case ActionType.MouseLeave:
      return {...state, selectedOfferId: action.payload};
    default:
      return state;
  }
};

export {bookProcess};
