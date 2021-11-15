import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../utils/const';
import {UserData} from '../../types/offers';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserData = (state: State): UserData => state[NameSpace.user].userData;
