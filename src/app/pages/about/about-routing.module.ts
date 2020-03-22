import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationComponent } from './information/information.component';
import { AboutPage } from './about';
import { WhatNowComponent } from './what-now/what-now.component';
import { GreenlightComponent } from './greenlight/greenlight.component';
import { RiskgroupComponent } from './riskgroup/riskgroup.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'details',
    component: InformationComponent
  },
  {
    path: 'what-now',
    component: WhatNowComponent
  },
  {
    path: 'good-to-stay-home',
    component: GreenlightComponent
  },
  {
    path: 'better-check-up',
    component: RiskgroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
