import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {HighriskComponent, MediumriskComponent, NoriskComponent} from '.';

import { FormsModule } from '@angular/forms';

import { ResultsRoutingModule } from './results-routing.module';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import {ResultsPage} from './results';

@NgModule({
  providers: [
    QuestionnaireDataService
  ],
  imports: [
    CommonModule,
    IonicModule,
    ResultsRoutingModule,
    FormsModule
  ],
  declarations: [
    NoriskComponent,
    MediumriskComponent,
    HighriskComponent,
    ResultsPage
  ],
  bootstrap: [ResultsPage],
})
export class ResultsModule { }
