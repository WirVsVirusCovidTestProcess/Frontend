import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ResultsPageRoutingModule} from './results-routing.module';
import {GreenlightComponent} from './greenlight/greenlight.component';
import {RiskgroupComponent} from './riskgroup/riskgroup.component';
import {WhatNowComponent} from './what-now/what-now.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    GreenlightComponent,
    RiskgroupComponent,
    WhatNowComponent
  ]
})
export class ResultsPageModule {
}
