import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { QuestionRoutingModule } from './question-routing.module';
import {QuestionPage} from './question';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    QuestionRoutingModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    QuestionPage
  ],
  bootstrap: [QuestionPage],
})
export class QuestionModule { }
