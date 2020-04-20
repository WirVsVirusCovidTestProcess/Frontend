import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as userData from './userData.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(userData.featureKey, userData.reducer)
  ],
})
export class UserDataStateModule {}

