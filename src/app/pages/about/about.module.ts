import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about';
import { AboutPageRoutingModule } from './about-routing.module';
import { InformationComponent } from './information/information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [
    AboutPage,
    InformationComponent],
  bootstrap: [AboutPage],
})
export class AboutModule {}
