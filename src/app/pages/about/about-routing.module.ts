import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationComponent } from './information/information.component';
import { AboutPage } from './about';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'details',
    component: InformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
