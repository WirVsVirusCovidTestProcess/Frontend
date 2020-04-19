import { Action, createReducer, on } from '@ngrx/store';
import {StorageSyncActions } from 'ngrx-store-ionic-storage';

const hydratedReducer = createReducer(false,
  on(StorageSyncActions.HYDRATED, () => true)
);

export function reducer(state: boolean | undefined, action: Action) {
  return hydratedReducer(state, action);
}
