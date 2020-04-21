import { createSelector } from '@ngrx/store';
import { State as AppState } from '../';
import { State as UserDataState, featureKey } from './userData.reducer';

const getUserDataState = (state: AppState) => state[featureKey];

export const selectUserData = createSelector(getUserDataState, (state: UserDataState) => state.userData);
export const selectContactPersons = createSelector(getUserDataState, (state: UserDataState) => state.contactPersons);
export const selectHasUserData = createSelector(getUserDataState, (state: UserDataState) => !!state.userData);
