import { Action, createReducer, on } from '@ngrx/store';
import * as UserDataActions from './userData.actions';
import { UserOptions } from '../../types/user-options';

export const featureKey = 'userData';

export interface State {
  userData?: UserOptions;
  contactPersons: Array<string>;
}

export const initialState: State = {
  userData: undefined,
  contactPersons: undefined
};

const userDataReducer = createReducer(initialState,
  on(UserDataActions.storeUserData, (state, { data }) => {
    return {
      ...state,
      userData: data
    };
  }),
  on(UserDataActions.setContactPersons, (state, { contactPersons }) => {
    return {
      ...state,
      contactPersons
    };
  }),
  on(UserDataActions.clearUserData, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return userDataReducer(state, action);
}
