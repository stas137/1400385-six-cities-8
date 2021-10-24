import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  currentCity: 'Paris',
  currentOption: 'Popular',
  selectedOfferId: null,
  offers: offers,
  listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload, currentOption: 'Popular'};
    case ActionType.ChangeOption:
      return {...state, currentOption: action.payload};
    case ActionType.MouseEnter:
      return {...state, selectedOfferId: action.payload};
    case ActionType.MouseLeave:
      return {...state, selectedOfferId: null};
    default:
      return state;
  }
};

export {reducer};
