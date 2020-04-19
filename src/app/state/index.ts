import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Questions from './questions/questions.reducer';
import { storageSync } from 'ngrx-store-ionic-storage';

export function hydratedReducer(state: boolean = false): boolean {
  return state;
}
export interface State {
  hydrated: boolean;
  [Questions.questionFeatureKey]: Questions.State;
}

export const reducers: ActionReducerMap<State> = {
  hydrated: hydratedReducer,
  [Questions.questionFeatureKey]: Questions.reducer
};

export const storageSyncReducer = storageSync({
  keys: [Questions.questionFeatureKey],
  ignoreActions: [],
  hydratedStateKey: 'hydrated',
  onSyncError: (err) => console.error(err)
});


export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storageMetaReducer] : [storageMetaReducer];
