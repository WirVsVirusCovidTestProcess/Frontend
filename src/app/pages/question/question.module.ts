import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AgeComponent,
BodyAcheComponent,
ChillsComponent,
CortisolComponent,
CoughComponent,
CrossborderTravelComponent,
DiabetesComponent,
DiarrheaComponent,
FeverComponent,
FeverDurationComponent,
FeverTemperatureComponent,
FluShotComponent,
GeneraltravelComponent,
HeadAcheComponent,
HeartDiseaseComponent,
ImmunSuppressivaComponent,
ListlessComponent,
LungDiseaseComponent,
NrwTravelReturnComponent,
NrwtravelComponent,
ObesityComponent,
PregnancyComponent,
RiskyContactComponent,
SuspectContactComponent,
SuspectContactDateComponent,
RiskyContactDateComponent,
RiskyTravelComponent,
ShortBreathComponent,
SoreThroatComponent,
SituationComponent,
SmokingComponent,
SniffComponent,
SymptomsDurationComponent,
WorkComponent } from '.';

import { FormsModule } from '@angular/forms';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import {QuestionPage} from './question';

@NgModule({
  providers: [
    QuestionnaireDataService
  ],
  imports: [
    CommonModule,
    IonicModule,
    QuestionRoutingModule,
    FormsModule
  ],
  declarations: [
    AgeComponent,
    BodyAcheComponent,
    ChillsComponent,
    CortisolComponent,
    CoughComponent,
    CrossborderTravelComponent,
    DiabetesComponent,
    DiarrheaComponent,
    FeverComponent,
    FeverDurationComponent,
    FeverTemperatureComponent,
    FluShotComponent,
    GeneraltravelComponent,
    HeadAcheComponent,
    HeartDiseaseComponent,
    ImmunSuppressivaComponent,
    ListlessComponent,
    LungDiseaseComponent,
    NrwTravelReturnComponent,
    NrwtravelComponent,
    ObesityComponent,
    PregnancyComponent,
    RiskyContactComponent,
    RiskyContactDateComponent,
    RiskyTravelComponent,
    ShortBreathComponent,
    SoreThroatComponent,
    SituationComponent,
    SmokingComponent,
    SniffComponent,
    SymptomsDurationComponent,
    WorkComponent,
    SuspectContactComponent,
    SuspectContactDateComponent,
    QuestionPage
  ],
  bootstrap: [QuestionPage],
})
export class QuestionModule { }
