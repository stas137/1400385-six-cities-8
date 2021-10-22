import {Action, ActionType} from '../types/action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  currentCity: 'Paris',
  offers: offers,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    default:
      return state;
  }
};

export {reducer};
