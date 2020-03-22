import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoriskComponent } from '.';
import {ResultsPage} from './results';
import {MediumriskComponent} from './mediumrisk/mediumrisk.component';
import {HighriskComponent} from './highrisk/highrisk.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsPage,
    children: [
      {
        path: 'no-risk',
        component: NoriskComponent
      },
      {
        path: 'medium-risk',
        component: MediumriskComponent
      },
      {
        path: 'high-risk',
        component: HighriskComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
