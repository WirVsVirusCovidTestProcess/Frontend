import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer, StoreModule
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Questions from './questions/questions.reducer';
import { storageSync } from 'ngrx-store-ionic-storage';
import { StorageSyncEffects } from 'ngrx-store-ionic-storage';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { QuestionsStateModule } from './questions/questions.module';
import * as hydrated from './hydrated.reducer';


export interface State {
  hydrated: boolean;
}

export const reducers: ActionReducerMap<State> = {
  hydrated: hydrated.reducer
};

export const storageSyncReducer = storageSync({
  keys: [Questions.questionFeatureKey],
  onSyncError: (err) => console.error(err)
});


export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storageMetaReducer] : [storageMetaReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([ StorageSyncEffects ]),
    QuestionsStateModule
  ]
})
export class RootStateModule {}
