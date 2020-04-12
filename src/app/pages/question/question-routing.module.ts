import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {QuestionPage} from './question';
import {QUESTION_IDS} from '../../types/questions';

const routes: Routes = [
  {
    path: ':id',
    component: QuestionPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: QUESTION_IDS.AGE
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
