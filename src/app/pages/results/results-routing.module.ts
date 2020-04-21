import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WhatNowComponent} from './what-now/what-now.component';
import {GreenlightComponent} from './greenlight/greenlight.component';
import {RiskgroupComponent} from './riskgroup/riskgroup.component';

const routes: Routes = [
  {
    path: 'calculating',
    component: WhatNowComponent
  },
  {
    path: 'good-to-stay-home',
    component: GreenlightComponent
  },
  {
    path: 'better-check-up',
    component: RiskgroupComponent
  },
  {
    path: '',
    redirectTo: 'calculating',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsPageRoutingModule {}
